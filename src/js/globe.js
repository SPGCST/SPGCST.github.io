import * as THREE from 'three';

export function initGlobe(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Cena, Câmera e Renderizador
  const scene = new THREE.Scene();
  
  // Câmera posicionada de forma a enquadrar o topo do planeta gigante
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 32;
  camera.position.y = 0;  
  camera.lookAt(0, -6, 0);
  camera.updateMatrixWorld(); // Garante que a matriz da câmera esteja atualizada para os shaders

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Obter capacidade de filtragem anisotrópica para máxima nitidez
  const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

  const textureLoader = new THREE.TextureLoader();

  // Textura do planeta (Mapa Noturno de Alta Resolução local)
  const earthNightUrl = new URL('../assets/images/earth-night.jpg', import.meta.url).href;
  const earthTexture = textureLoader.load(earthNightUrl);
  earthTexture.colorSpace = THREE.SRGBColorSpace;
  earthTexture.anisotropy = maxAnisotropy;

  // Textura do planeta (Mapa Diurno - 2K High Resolution local)
  const earthDayUrl = new URL('../assets/images/earth-blue-marble.jpg', import.meta.url).href;
  const earthDayTexture = textureLoader.load(earthDayUrl);
  earthDayTexture.colorSpace = THREE.SRGBColorSpace;
  earthDayTexture.anisotropy = maxAnisotropy;

  // Cores da Atmosfera (Valores exatos solicitados pelo usuário)
  const atmosphereDayColor = new THREE.Color('#4db2ff');
  const atmosphereTwilightColor = new THREE.Color('#bc490b');

  // Vetor de direção do Sol em espaço de câmera (atualizado no loop de renderização)
  const sunDirViewSpace = new THREE.Vector3();

  // --- SHADER DO GLOBO (Superfície Terrestre Realista) ---
  // Aumentado para 128 segmentos para eliminar a fragmentação poligonal nas bordas
  const globeGeometry = new THREE.SphereGeometry(25, 128, 128);
  const globeMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uMapDay: { value: earthDayTexture },
      uMapNight: { value: earthTexture },
      uSunDirViewSpace: { value: sunDirViewSpace },
      uAtmosphereDayColor: { value: atmosphereDayColor },
      uAtmosphereTwilightColor: { value: atmosphereTwilightColor }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        // Calcula normal e posição no espaço de câmera (View Space)
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vPosition = mvPosition.xyz;
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform sampler2D uMapDay;
      uniform sampler2D uMapNight;
      uniform vec3 uSunDirViewSpace;
      uniform vec3 uAtmosphereDayColor;
      uniform vec3 uAtmosphereTwilightColor;

      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vPosition); // Vetor da câmera (0,0,0) ao vértice em view space
        vec3 sunDir = normalize(uSunDirViewSpace);

        // Orientação do Sol em relação à superfície (em view space)
        float sunOrientation = dot(normal, sunDir);

        // Efeito Fresnel na superfície (0 no centro, 1 na borda)
        float fresnel = 1.0 - abs(dot(viewDir, normal));

        // Textura do dia (Blue Marble) e da noite (Earth Night)
        vec4 dayTexColor = texture2D(uMapDay, vUv);
        vec4 nightTexColor = texture2D(uMapNight, vUv);

        // Cidades acesas (Brilho noturno ampliado substancialmente para destacar no mapa)
        vec3 nightColor = nightTexColor.rgb * 15.0;
        
        // Fundo azul escuro para os oceanos noturnos
        vec3 spaceDark = vec3(0.002, 0.005, 0.012);
        nightColor = max(nightColor, spaceDark);

        // Lado do dia: usa a textura de satélite real, somada à iluminação solar (diffuse + ambient)
        vec3 dayColor = dayTexColor.rgb;
        float diffuse = max(sunOrientation, 0.0);
        float ambient = 0.35; // Aumentado para 0.35 para clarear o planeta na parte frontal
        dayColor = dayColor * (diffuse * 0.65 + ambient);

        // Transição suave entre dia e noite (terminador solar)
        float dayStrength = smoothstep(-0.2, 0.2, sunOrientation);
        vec3 finalColor = mix(nightColor, dayColor, dayStrength);

        // Reflexo especular do Sol no oceano (Lado do dia)
        vec3 reflectDir = reflect(-sunDir, normal);
        float spec = pow(max(dot(reflectDir, -viewDir), 0.0), 45.0);
        // Usamos o brilho da textura de dia como uma máscara simples de terra vs oceano
        // (O oceano na textura real é bem escuro, a terra é mais clara/texturizada)
        float landMask = clamp(length(nightTexColor.rgb) * 10.0, 0.0, 1.0);
        vec3 specularColor = vec3(0.6, 0.8, 1.0) * spec * (1.0 - landMask * 0.8) * dayStrength;
        finalColor += specularColor * 0.4;

        // Determinação das cores da atmosfera na superfície
        vec3 atmosphereColor = mix(uAtmosphereTwilightColor, uAtmosphereDayColor, smoothstep(-0.25, 0.75, sunOrientation));

        // Glow de borda interno (atmosfera refletida na superfície)
        float atmosphereDayStrength = smoothstep(-0.5, 1.0, sunOrientation);
        // Elevado à potência 15.0 para confinar o brilho à borda extrema da Terra
        float atmosphereMix = clamp(atmosphereDayStrength * pow(fresnel, 15.0), 0.0, 1.0);

        // Mistura final do planeta com a atmosfera interna
        finalColor = mix(finalColor, atmosphereColor, atmosphereMix);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  });

  const globe = new THREE.Mesh(globeGeometry, globeMaterial);
  globe.position.y = -28; // Afunda o planeta para mostrar apenas o arco superior
  globe.rotation.y = -1.2; // Rotação inicial apontando para as Américas
  scene.add(globe);

  // --- SHADER DA ATMOSFERA (Glow Externo Hiperrealista) ---
  // Aumentado para 128 segmentos para suavidade perfeita
  const atmosphereGeometry = new THREE.SphereGeometry(25, 128, 128);
  const atmosphereMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uSunDirViewSpace: { value: sunDirViewSpace },
      uAtmosphereDayColor: { value: atmosphereDayColor },
      uAtmosphereTwilightColor: { value: atmosphereTwilightColor }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vPosition = mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 uSunDirViewSpace;
      uniform vec3 uAtmosphereDayColor;
      uniform vec3 uAtmosphereTwilightColor;

      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vPosition);
        vec3 sunDir = normalize(uSunDirViewSpace);

        // Orientação do sol
        float sunOrientation = dot(normal, sunDir);

        // Fresnel (0 no centro, 1 na borda)
        float fresnel = 1.0 - abs(dot(viewDir, normal));

        // Remapeamento físico da Three.js (remap 0.73, 1.0, 1.0, 0.0) elevado ao cubo
        float remapT = (fresnel - 0.73) / (1.0 - 0.73);
        remapT = clamp(remapT, 0.0, 1.0);
        float alpha = pow(1.0 - remapT, 3.0);

        // Escurecimento da atmosfera na face noturna do planeta
        alpha *= smoothstep(-0.5, 1.0, sunOrientation);

        // Transição de cores dia (azul) / crepúsculo (laranja)
        vec3 atmosphereColor = mix(uAtmosphereTwilightColor, uAtmosphereDayColor, smoothstep(-0.25, 0.75, sunOrientation));

        gl_FragColor = vec4(atmosphereColor, alpha);
      }
    `,
    side: THREE.BackSide, // Renderiza o interior da esfera
    transparent: true
  });

  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  atmosphere.scale.setScalar(1.04); // Ligeiramente maior que a Terra para projetar o halo no espaço
  globe.add(atmosphere); // Adicionado como filho do globo para girar e mover junto

  // Responsividade
  window.addEventListener('resize', () => {
    if(!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Loop de Animação
  let isVisible = true;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
    });
  }, { threshold: 0 });
  observer.observe(container);

  function animate() {
    requestAnimationFrame(animate);
    
    if (!isVisible) return; // Pausa a renderização quando o elemento está oculto/fora da tela
    
    // Rotação sutil e contínua do globo terrestre
    globe.rotation.y += 0.0008;

    // Atualiza a direção do sol em espaço de câmera (View Space)
    // Movido ligeiramente para a direita e para a frente (Z = -8 em vez de -22) para iluminar a parte frontal e destacar a transição
    const sunWorldDir = new THREE.Vector3(15, 12, -8).normalize();
    sunDirViewSpace.copy(sunWorldDir).transformDirection(camera.matrixWorldInverse);

    renderer.render(scene, camera);
  }

  animate();
}
