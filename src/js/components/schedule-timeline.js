class ScheduleTimeline extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="schedule-tabs-container">
        <button class="tab-btn active" data-tab="day1">Segunda, 19/10 (Eixo 1)</button>
        <button class="tab-btn" data-tab="day2">Terça, 20/10 (Eixo 2)</button>
        <button class="tab-btn" data-tab="day3">Quarta, 21/10 (Eixo 3)</button>
        <button class="tab-btn" data-tab="day4">Quinta, 22/10 (Encerramento)</button>
        <button class="tab-btn" data-tab="day5">Sexta, 23/10 (Saída de Campo & Minicurso)</button>
      </div>

      <!-- DIA 1 (Segunda, 19/10) -->
      <div id="day1" class="tab-pane active">
        <h3 style="text-align: center; margin-bottom: 15px; color: var(--color-blue-menu); font-family: var(--font-family-questrial);">Eixo 1 – Adaptação, Governança e Dinâmica Socioterritorial</h3>
        <div class="eixo-desc-box">
          <strong>Sobre o Eixo 1:</strong> Reúne trabalhos sobre respostas sociais e institucionais às mudanças climáticas, abrangendo políticas públicas de adaptação, impactos sobre populações vulneráveis e os efeitos sobre os sistemas de saúde diante de novos riscos ambientais.
        </div>

        <div class="mesa-header">
          <span>🌅</span> MANHÃ | Mesa Lobo-Guará
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">08:00 – 09:00</span>
                <span class="location-badge">📍 Hall do auditório</span>
              </div>
              <h4 class="timeline-title">Credenciamento + Café da manhã de boas-vindas</h4>
              <p class="timeline-desc">Recepção, credenciamento dos participantes e café da manhã de acolhimento.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">09:00 – 09:45</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Abertura, boas-vindas e apresentação da programação</h4>
              <p class="timeline-desc">Sessão solene de abertura institucional do 13º Simpósio SPGCST:</p>
              <ul class="timeline-list">
                <li><strong>Antonio Miguel Vieira Monteiro</strong> – Diretor do INPE</li>
                <li><strong>André Gonçalves Rodrigues</strong> – Coordenador do Curso (PPGCST)</li>
                <li><strong>Amanda Freitas Silva Garcia e Mariana Marques Wolf</strong> – Representação Discente</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">09:45 – 10:45</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Palestra: Jean Ometto</h4>
              <p class="timeline-desc">Apresentação e reflexões científicas no âmbito da dinâmica socioterritorial e ambiental.</p>
              <div class="timeline-speaker">Palestrante: Jean Ometto</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">10:45 – 11:15</span>
                <span class="location-badge">📍 Hall do auditório</span>
              </div>
              <h4 class="timeline-title">Coffee Break</h4>
              <p class="timeline-desc">Intervalo para café e integração dos participantes.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">11:30 – 12:00</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Mesa Redonda – Discussão e Dúvidas</h4>
              <p class="timeline-desc">Espaço de debate, perguntas e integração com os participantes da mesa da manhã.</p>
            </div>
          </div>
        </div>

        <div class="mesa-header">
          <span>☀️</span> TARDE | Mesa Tucano
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">13:30 – 14:10</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Palestra: Myanna Lahsen</h4>
              <p class="timeline-desc">Apresentação temática e reflexões socioambientais com Myanna Lahsen.</p>
              <div class="timeline-speaker">Palestrante: Myanna Lahsen</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">14:10 – 14:50</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Palestra: Raquel Rolnik</h4>
              <p class="timeline-desc">Discussão sobre planejamento urbano, vulnerabilidades e <strong>cidades resilientes</strong> frente às mudanças climáticas.</p>
              <div class="timeline-speaker">Palestrante: Raquel Rolnik (Cidades Resilientes)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">14:50 – 15:10</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Sessão de perguntas do público e debate com as palestrantes.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">15:10 – 15:30</span>
                <span class="location-badge">📍 Hall do auditório</span>
              </div>
              <h4 class="timeline-title">Coffee Break</h4>
              <p class="timeline-desc">Intervalo para café e networking.</p>
            </div>
          </div>

              <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">15:30 – 17:00</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Oficina: Gaia em Jogo</h4>
              <p class="timeline-desc">Dinâmica vivencial de tomada de decisão, governança e modelagem de sustentabilidade planetária em formato de jogo cooperativo.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- DIA 2 (Terça, 20/10) -->
      <div id="day2" class="tab-pane">
        <h3 style="text-align: center; margin-bottom: 15px; color: var(--color-blue-menu); font-family: var(--font-family-questrial);">Eixo 2 – Dinâmicas Biofísicas e Ecológicas do Sistema Terrestre e seus Impactos</h3>
        <div class="eixo-desc-box">
          <strong>Sobre o Eixo 2:</strong> Aborda os processos naturais e ecológicos do sistema terrestre, com ênfase nos impactos das mudanças climáticas sobre ecossistemas e biodiversidade, e nas estratégias de mitigação relacionadas ao uso da terra e aos ciclos do carbono.
        </div>

        <div class="mesa-header">
          <span>🌅</span> MANHÃ | Mesa Gato do Mato
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">08:00 – 09:00</span>
                <span class="location-badge">📍 Hall do auditório</span>
              </div>
              <h4 class="timeline-title">Credenciamento</h4>
              <p class="timeline-desc">Recepção e credenciamento dos congressistas.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">09:00 – 10:00</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Palestra: Julio Guató</h4>
              <p class="timeline-desc">Palestra e reflexões científicas no contexto das dinâmicas biofísicas e ecológicas.</p>
              <div class="timeline-speaker">Palestrante: Julio Guató</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">10:00 – 10:30</span>
                <span class="location-badge">📍 Hall do auditório</span>
              </div>
              <h4 class="timeline-title">Coffee Break</h4>
              <p class="timeline-desc">Intervalo para café e integração.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">10:30 – 11:15</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Palestra: Alexandre Pires (MMA)</h4>
              <p class="timeline-desc">Políticas ambientais, mitigação e visão do Ministério do Meio Ambiente e Mudança do Clima.</p>
              <div class="timeline-speaker">Palestrante: Alexandre Pires (MMA)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">11:30 – 12:00</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Debate e perguntas abertas ao público com os palestrantes da manhã.</p>
            </div>
          </div>
        </div>

        <div class="mesa-header">
          <span>☀️</span> TARDE | Mesa Boto cor de rosa
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">13:30 – 14:10</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Palestra: Rita de Cássia Silva von Randow</h4>
              <p class="timeline-desc">Apresentação institucional e acolhimento com <strong>boas-vindas aos novos membros do CST</strong>.</p>
              <div class="timeline-speaker">Palestrante: Rita de Cássia Silva von Randow (CST/INPE)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">14:10 – 14:50</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Palestra: António Mauro Saraiva (USP)</h4>
              <p class="timeline-desc">Apresentação sobre ações antrópicas, conexões ecológicas e <strong>o conceito e o movimento de Saúde Planetária</strong>.</p>
              <div class="timeline-speaker">Palestrante: António Mauro Saraiva (USP)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">14:50 – 15:10</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Espaço de perguntas e respostas com a plenária.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">15:10 – 15:30</span>
                <span class="location-badge">📍 Hall do auditório</span>
              </div>
              <h4 class="timeline-title">Coffee Break</h4>
              <p class="timeline-desc">Intervalo para café e troca de experiências.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">15:30 – 17:00</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Oficina MCTI Adapta Brasil</h4>
              <p class="timeline-desc">Atividade prática sobre a plataforma AdaptaBrasil do MCTI para modelagem, análise e suporte à formulação de políticas públicas de adaptação.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- DIA 3 (Quarta, 21/10) -->
      <div id="day3" class="tab-pane">
        <h3 style="text-align: center; margin-bottom: 15px; color: var(--color-blue-menu); font-family: var(--font-family-questrial);">Eixo 3 – Modelagem, Inovação e Monitoramento do Sistema Terrestre</h3>
        <div class="eixo-desc-box">
          <strong>Sobre o Eixo 3:</strong> Congrega contribuições sobre novas tecnologias e metodologias para simular e monitorar o sistema terrestre, incluindo modelagem climática, sensoriamento remoto e uso de inteligência artificial aplicada ao monitoramento ambiental.
        </div>

        <div class="mesa-header">
          <span>🌅</span> MANHÃ | Mesa Onça Pintada
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">08:00 – 09:00</span>
                <span class="location-badge">📍 Hall do auditório</span>
              </div>
              <h4 class="timeline-title">Credenciamento</h4>
              <p class="timeline-desc">Recepção dos participantes e confirmação de presença.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">09:00 – 10:00</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Palestra: Ricardo Galvão</h4>
              <p class="timeline-desc">Palestra magna abordando desafios da ciência, inovação tecnológica, integridade dos dados e monitoramento espacial.</p>
              <div class="timeline-speaker">Palestrante: Ricardo Galvão</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">10:00 – 10:30</span>
                <span class="location-badge">📍 Hall do auditório</span>
              </div>
              <h4 class="timeline-title">Coffee Break</h4>
              <p class="timeline-desc">Intervalo para café e integração.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">10:30 – 11:15</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Palestra: Thelma Krug</h4>
              <p class="timeline-desc">Panorama global e avanços em <strong>ciências da Terra e mudanças climáticas</strong> com a renomada pesquisadora Thelma Krug.</p>
              <div class="timeline-speaker">Palestrante: Thelma Krug (Ciências da Terra e Mudanças Climáticas)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">11:30 – 12:00</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Sessão de debate e perguntas com os conferencistas da manhã.</p>
            </div>
          </div>
        </div>

        <div class="mesa-header">
          <span>☀️</span> TARDE | Mesa Tamanduá-bandeira
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">13:30 – 14:10</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Palestra CST: Regina Alvalá</h4>
              <p class="timeline-desc">Pesquisa científica em monitoramento de desastres, alertas e a trajetória do CST.</p>
              <div class="timeline-speaker">Palestrante CST: Regina Alvalá (Cemaden/INPE)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">14:10 – 14:50</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Palestra: Marcos Buckeridge (USP)</h4>
              <p class="timeline-desc">Conceitos biológicos, planejamento de infraestrutura verde e resiliência com foco no modelo das <strong>Cidades Esponja</strong>.</p>
              <div class="timeline-speaker">Palestrante: Marcos Buckeridge (USP) – Cidades Esponja</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">14:50 – 15:10</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Mesa redonda e perguntas da audiência.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">15:10 – 15:30</span>
                <span class="location-badge">📍 Hall do auditório</span>
              </div>
              <h4 class="timeline-title">Coffee Break</h4>
              <p class="timeline-desc">Intervalo para café e conversas.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">15:30 – 17:00</span>
                <span class="location-badge">📍 Prédio do CST</span>
              </div>
              <h4 class="timeline-title">Oficina: MonitoraEA</h4>
              <p class="timeline-desc">Oficina prática de monitoramento e integração de práticas em educação e análise socioambiental.</p>
              <div class="timeline-speaker">Responsável: Celly Santos</div>
            </div>
          </div>
        </div>

      </div>

      <!-- DIA 4 (Quinta, 22/10) -->
      <div id="day4" class="tab-pane">
        <h3 style="text-align: center; margin-bottom: 15px; color: var(--color-blue-menu); font-family: var(--font-family-questrial);">Papo sobre a Divisão e sobre o PPGCST (Encerramento)</h3>
        <div class="eixo-desc-box">
          <strong>Programação de Encerramento:</strong> Dia focado na reflexão sobre o curso, apresentações orais de pesquisas discentes, premiações de excelência, visitação técnica aos laboratórios de ponta do CST e encerramento comunitário.
        </div>

        <div class="mesa-header">
          <span>🌅</span> MANHÃ – CARCARÁ
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">08:00 – 09:00</span>
                <span class="location-badge">📍 Hall do auditório</span>
              </div>
              <h4 class="timeline-title">Credenciamento</h4>
              <p class="timeline-desc">Recepção e credenciamento dos participantes.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">09:00 – 09:30</span>
                <span class="location-badge">📍 Hall do auditório</span>
              </div>
              <h4 class="timeline-title">Café da manhã com todos</h4>
              <p class="timeline-desc">Café da manhã comunitário de confraternização e integração de alunos, pesquisadores e docentes.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">09:30 – 11:30</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Apresentação de Trabalhos</h4>
              <p class="timeline-desc">Sessão oral de apresentações de trabalhos acadêmicos e pesquisas dos alunos do programa.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">11:30 – 12:00</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Premiações de Melhores Trabalhos / Palestra sobre Saúde Mental</h4>
              <p class="timeline-desc">Cerimônia de premiação aos trabalhos de destaque do simpósio e momento reflexivo sobre saúde mental e bem-estar na pós-graduação.</p>
            </div>
          </div>
        </div>

        <div class="mesa-header">
          <span>☀️</span> TARDE – SARUÊ
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">14:00 – 15:00</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Visita aos Laboratórios do CST</h4>
              <p class="timeline-desc">Visita técnica guiada às instalações e laboratórios do Centro de Ciência do Sistema Terrestre:</p>
              <ul class="timeline-list">
                <li><strong>LaGEE</strong> – Laboratório de Gases de Efeito Estufa</li>
                <li><strong>LABREN</strong> – Laboratório de Modelagem e Estudos de Recursos Renováveis de Energia</li>
                <li><strong>LADIS</strong> – Laboratório de Dinâmicas Socioambientais</li>
                <li><strong>LAPBIO</strong> – Laboratório de Processos Biofísicos</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">15:00 – 15:30</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Roda de Discussão</h4>
              <p class="timeline-desc">Roda de conversa integrativa sobre o PPGCST, perspectivas científicas e novos horizontes do curso.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">15:30 – 16:00</span>
                <span class="location-badge">📍 Auditório</span>
              </div>
              <h4 class="timeline-title">Coffee Break</h4>
              <p class="timeline-desc">Intervalo para lanche e bate-papo.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- DIA 5 (Sexta, 23/10) -->
      <div id="day5" class="tab-pane">
        <h3 style="text-align: center; margin-bottom: 15px; color: var(--color-blue-menu); font-family: var(--font-family-questrial);">Saída de Campo & Minicurso</h3>
        <div class="eixo-desc-box">
          <strong>Atividades Práticas e Extensão:</strong> Atividades presenciais de imersão de campo na Mata Atlântica e capacitação prática técnica especializada em análise de dados espaciais.
        </div>

        <div class="mesa-header">
          <span>🌿</span> MANHÃ – Saída de Campo
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">07:00 – 16:00</span>
                <span class="location-badge">📍 Portaria Principal do INPE</span>
              </div>
              <h4 class="timeline-title">Saída de Campo: Parque Estadual Serra do Mar</h4>
              <p class="timeline-desc"><strong>Destino:</strong> Núcleo Santa Virgínia &mdash; Trilha do Saltinho.</p>
              <ul class="timeline-list">
                <li><strong>Itinerário:</strong> Saída pontual às 07h00 da portaria principal do INPE, chegada prevista no parque às 09h00. Início da viagem de volta às 14h00, com chegada em São José dos Campos (SJC) prevista para as 16h00.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mesa-header">
          <span>💻</span> TARDE – Minicurso Presencial
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-badges">
                <span class="time-badge">13:00 – 18:00</span>
                <span class="location-badge">📍 A ser definido</span>
              </div>
              <h4 class="timeline-title">Minicurso Geoaplicada (Duração: 5 horas)</h4>
              <p class="timeline-desc">Atividade prática de capacitação em ferramentas e análise de dados geoespaciais voltada para a Ciência do Sistema Terrestre.</p>
              <div class="timeline-speaker">Responsável: Jocilene Barros (Geoaplicada)</div>
            </div>
          </div>
        </div>
      </div>
    `;
    this.initTabs();
  }

  initTabs() {
    const tabButtons = this.querySelectorAll('.tab-btn');
    const tabPanes = this.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        button.classList.add('active');
        const targetPane = this.querySelector(`#${targetTab}`);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }
}

customElements.define('schedule-timeline', ScheduleTimeline);
