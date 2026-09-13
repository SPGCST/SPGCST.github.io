class SpeakersList extends HTMLElement {
  connectedCallback() {
    const photoRolnik = new URL('../../assets/images/Speaker Raquel Rolnik.jpg', import.meta.url).href;
    const photoGuato = new URL('../../assets/images/Speaker Julio Guato.jpg', import.meta.url).href;
    const photoGalvao = new URL('../../assets/images/Speaker Ricardo Galvao.jpg', import.meta.url).href;
    const photoLahsen = new URL('../../assets/images/Speaker Myanna Lahsen.jpg', import.meta.url).href;
    const photoAlvala = new URL('../../assets/images/Speaker Regina Celia dos Santos Alvala.jpg', import.meta.url).href;
    const photoVonRandow = new URL('../../assets/images/Speaker Rita Von Randow.jpg', import.meta.url).href;
    const photoOmetto = new URL('../../assets/images/Speaker Jean Ometto.jpg', import.meta.url).href;
    const photoBuckeridge = new URL('../../assets/images/Speaker Marcos Silveira Buckeridge.jpg', import.meta.url).href;
    const photoKrug = new URL('../../assets/images/Speaker Thelma Krug.jpg', import.meta.url).href;
    const photoPires = new URL('../../assets/images/Speaker Alexandre Henrique Pereira Pires.jpg', import.meta.url).href;

    this.innerHTML = `
      <div class="speakers-container">
        <div class="speakers-grid" style="margin-top: 0; margin-bottom: 50px;">
          
          <div class="speaker-card">
            <div class="speaker-avatar-wrapper" style="width: 120px; height: 120px; margin: 0 auto 20px auto; border-radius: 50%; overflow: hidden; border: 3px solid rgba(59, 152, 211, 0.4);">
              <img src="${photoRolnik}" alt="Raquel Rolnik" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h3 class="speaker-name">Raquel Rolnik</h3>
            <p class="speaker-title">FAU-USP</p>
            <p class="speaker-bio">Arquiteta e urbanista, professora titular da FAU-USP e ex-relatora especial da ONU para o Direito à Moradia Adequada.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper" style="width: 120px; height: 120px; margin: 0 auto 20px auto; border-radius: 50%; overflow: hidden; border: 3px solid rgba(59, 152, 211, 0.4);">
              <img src="${photoGuato}" alt="Julio Guató" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h3 class="speaker-name">Julio Guató</h3>
            <p class="speaker-title">Povo Indígena Guató</p>
            <p class="speaker-bio">Pesquisador e liderança indígena, atuando na preservação dos saberes ancestrais, do território e das dinâmicas socioambientais do Pantanal.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper" style="width: 120px; height: 120px; margin: 0 auto 20px auto; border-radius: 50%; overflow: hidden; border: 3px solid rgba(59, 152, 211, 0.4);">
              <img src="${photoGalvao}" alt="Ricardo Galvão" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h3 class="speaker-name">Ricardo Galvão</h3>
            <p class="speaker-title">CNPq / USP</p>
            <p class="speaker-bio">Físico, professor titular do Instituto de Física da USP, atual Presidente do CNPq e ex-diretor do INPE.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper" style="width: 120px; height: 120px; margin: 0 auto 20px auto; border-radius: 50%; overflow: hidden; border: 3px solid rgba(59, 152, 211, 0.4);">
              <img src="${photoLahsen}" alt="Myanna Lahsen" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h3 class="speaker-name">Myanna Lahsen</h3>
            <p class="speaker-title">INPE / CCST</p>
            <p class="speaker-bio">Pesquisadora e especialista em interações entre ciência e política ambiental e mudanças climáticas.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper" style="width: 120px; height: 120px; margin: 0 auto 20px auto; border-radius: 50%; overflow: hidden; border: 3px solid rgba(59, 152, 211, 0.4);">
              <img src="${photoAlvala}" alt="Regina Célia dos Santos Alvalá" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h3 class="speaker-name">Regina Célia dos Santos Alvalá</h3>
            <p class="speaker-title">Cemaden / INPE</p>
            <p class="speaker-bio">Pesquisadora em monitoramento de desastres, alertas e gestão de riscos socioambientais.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper" style="width: 120px; height: 120px; margin: 0 auto 20px auto; border-radius: 50%; overflow: hidden; border: 3px solid rgba(59, 152, 211, 0.4);">
              <img src="${photoVonRandow}" alt="Rita de Cássia Silva Von Randow" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h3 class="speaker-name">Rita de Cássia Silva Von Randow</h3>
            <p class="speaker-title">CST / INPE</p>
            <p class="speaker-bio">Pesquisadora em dinâmica do sistema terrestre e acolhimento institucional.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper" style="width: 120px; height: 120px; margin: 0 auto 20px auto; border-radius: 50%; overflow: hidden; border: 3px solid rgba(59, 152, 211, 0.4);">
              <img src="${photoOmetto}" alt="Jean Ometto" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h3 class="speaker-name">Jean Ometto</h3>
            <p class="speaker-title">INPE / CCST</p>
            <p class="speaker-bio">Pesquisador em ecossistemas, ciclo do carbono e mudanças ambientais globais.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper" style="width: 120px; height: 120px; margin: 0 auto 20px auto; border-radius: 50%; overflow: hidden; border: 3px solid rgba(59, 152, 211, 0.4);">
              <img src="${photoPires}" alt="Alexandre Pires" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h3 class="speaker-name">Alexandre Henrique Pereira Pires</h3>
            <p class="speaker-title">MMA</p>
            <p class="speaker-bio">Atuação em políticas públicas e estratégias de mitigação e adaptação climática.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper" style="width: 120px; height: 120px; margin: 0 auto 20px auto; border-radius: 50%; overflow: hidden; border: 3px solid rgba(59, 152, 211, 0.4);">
              <img src="${photoKrug}" alt="Thelma Krug" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h3 class="speaker-name">Thelma Krug</h3>
            <p class="speaker-title">INPE / Ex-IPCC</p>
            <p class="speaker-bio">Especialista em inventários de emissões de gases de efeito estufa e políticas climáticas globais.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper" style="width: 120px; height: 120px; margin: 0 auto 20px auto; border-radius: 50%; overflow: hidden; border: 3px solid rgba(59, 152, 211, 0.4);">
              <img src="${photoBuckeridge}" alt="Marcos Buckeridge" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <h3 class="speaker-name">Marcos Silveira Buckeridge</h3>
            <p class="speaker-title">IB-USP</p>
            <p class="speaker-bio">Pesquisador em fisiologia vegetal, bioenergia e infraestrutura verde urbana (Cidades Esponja).</p>
          </div>

        </div>
      </div>
    `;
  }
}

customElements.define('speakers-list', SpeakersList);
