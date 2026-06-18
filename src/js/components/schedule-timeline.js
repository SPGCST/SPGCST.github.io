class ScheduleTimeline extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="schedule-tabs-container">
        <button class="tab-btn active" data-tab="day1">Segunda, 19/10 (Eixo 1)</button>
        <button class="tab-btn" data-tab="day2">Terça, 20/10 (Eixo 2)</button>
        <button class="tab-btn" data-tab="day3">Quarta, 21/10 (Eixo 3)</button>
        <button class="tab-btn" data-tab="day4">Quinta, 22/10 (Encerramento)</button>
        <button class="tab-btn" data-tab="day5">Sexta, 23/10 (Campo)</button>
      </div>

      <!-- DIA 1 -->
      <div id="day1" class="tab-pane active">
        <h3 style="text-align: center; margin-bottom: 30px; color: var(--color-blue-menu); font-family: var(--font-family-questrial);">Eixo 1: Adaptação, Governança e Dinâmica Socioterritorial</h3>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">08:00 - 09:00</span>
              <h4 class="timeline-title">Credenciamento e Café da Manhã</h4>
              <p class="timeline-desc">Credenciamento dos participantes e café da manhã de boas-vindas no hall do auditório.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">09:00 - 09:45</span>
              <h4 class="timeline-title">Abertura Oficial</h4>
              <p class="timeline-desc">Apresentação da programação e boas-vindas com o Diretor do INPE (Antonio Miguel Vieira Monteiro), o Coordenador da PGCST (Andre Rodrigues), e as Representantes Discentes (Sara e Monique).</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">09:45 - 10:45</span>
              <h4 class="timeline-title">Palestra 1: Fronteiras e Desafios da Transdisciplinaridade</h4>
              <p class="timeline-desc">Discussão sobre os caminhos, as fronteiras e as metodologias de pesquisa transdisciplinar em ciência do sistema terrestre.</p>
              <div class="timeline-speaker">Palestrante: Evandro Albiach Branco (INPE)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">10:45 - 11:20</span>
              <h4 class="timeline-title">Palestra 2: Entre ciência e sociedade: o papel do diálogo na construção da transdisciplinaridade</h4>
              <p class="timeline-desc">Uma análise do diálogo e da ponte entre o conhecimento acadêmico e as demandas sociais na construção de pesquisas participativas.</p>
              <div class="timeline-speaker">Palestrante: Rafael de Araujo Arosa Monteiro (Bolsista DTC-B - INPE)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">11:20 - 12:00</span>
              <h4 class="timeline-title">Mesa Redonda: Transdisciplinaridade em Perspectiva</h4>
              <p class="timeline-desc">Espaço de discussão, perguntas e debate integrativo com os palestrantes sobre relações dialógicas entre ciência e sociedade.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">13:45 - 14:30</span>
              <h4 class="timeline-title">Palestra 3: Dimensão socioambiental na gestão de risco na América do Sul</h4>
              <p class="timeline-desc">Análise de riscos sob a perspectiva de fatores sociais, climáticos e ambientais integrados no continente sul-americano.</p>
              <div class="timeline-speaker">Palestrante: Viviana Aguilar Muñoz (Cemaden)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">14:30 - 15:30</span>
              <h4 class="timeline-title">Apresentações Orais de Alunos & Discussão</h4>
              <p class="timeline-desc">Apresentações orais de trabalhos de alunos do PGCST, seguidas de mesa de discussão e dúvidas.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">15:30 - 17:00</span>
              <h4 class="timeline-title">Coffee Break & Apresentação de Banners</h4>
              <p class="timeline-desc">Apresentação dos pôsteres de pesquisa no hall do auditório e intervalo de confraternização dos participantes.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">17:00 - 18:30</span>
              <h4 class="timeline-title">Oficina / Dinâmica: AdaptaBrasil MCTI</h4>
              <p class="timeline-desc">Atividade prática interativa para conhecer e aplicar a plataforma de modelagem e análise de adaptação às mudanças climáticas.</p>
              <div class="timeline-speaker">Facilitador: Francinelli de Angel</div>
            </div>
          </div>
        </div>
      </div>

      <!-- DIA 2 -->
      <div id="day2" class="tab-pane">
        <h3 style="text-align: center; margin-bottom: 30px; color: var(--color-blue-menu); font-family: var(--font-family-questrial);">Eixo 2: Dinâmicas Biofísicas e Ecológicas do Sistema Terrestre e seus Impactos</h3>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">08:30 - 09:15</span>
              <h4 class="timeline-title">Palestra 4: Secas no Semiárido: Ciência e Monitoramento</h4>
              <p class="timeline-desc">Como a ciência monitora e quantifica a seca no semiárido brasileiro e quais são as principais descobertas recentes sobre seus impactos biocríticos.</p>
              <div class="timeline-speaker">Palestrante: Ana Paula Cunha (Cemaden)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">09:15 - 10:00</span>
              <h4 class="timeline-title">Apresentação Oral de Trabalhos</h4>
              <p class="timeline-desc">Apresentações de pesquisas científicas dos discentes da pós-graduação.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">10:00 - 10:30</span>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Espaço reservado para perguntas do público aos apresentadores.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">10:30 - 11:00</span>
              <h4 class="timeline-title">Coffee Break & Banners</h4>
              <p class="timeline-desc">Sessão de pôsteres e debates diretos com pesquisadores.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">11:00 - 11:45</span>
              <h4 class="timeline-title">Palestra 5: Extremos Hidrometeorológicos no Brasil</h4>
              <p class="timeline-desc">Foco na análise, recorrência e severidade dos extremos hidrometeorológicos em todo o território nacional e as vulnerabilidades dos biomas.</p>
              <div class="timeline-speaker">Palestrante: Sâmia Regina Garcia Calheiro (UNIFESP)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">11:45 - 12:00</span>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Debates sobre extremos hidrológicos com a palestrante.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">13:45 - 14:30</span>
              <h4 class="timeline-title">Palestra 6: Clima, uso da terra e gestão da água em cenários de extremos</h4>
              <p class="timeline-desc">Aborda a complexa relação entre o clima, a cobertura da terra, as transformações no uso do solo e seus efeitos no planejamento dos recursos hídricos.</p>
              <div class="timeline-speaker">Palestrante: Javier Tomasella (INPE)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">14:30 - 14:45</span>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Rodada de perguntas direcionadas ao uso da terra e recursos hídricos.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">14:45 - 15:30</span>
              <h4 class="timeline-title">Apresentação Oral de Trabalhos</h4>
              <p class="timeline-desc">Sessão de trabalhos acadêmicos de discentes do PGCST.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">15:30 - 16:00</span>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Perguntas e respostas sobre as apresentações orais da tarde.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">16:00 - 17:00</span>
              <h4 class="timeline-title">Coffee Break & Banners</h4>
              <p class="timeline-desc">Apresentação de posters e rede de contatos.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">17:00 - 18:30</span>
              <h4 class="timeline-title">Oficina / Dinâmica: Cemaden Educação</h4>
              <p class="timeline-desc">Oficina voltada a práticas educativas e de conscientização para redução de desastres socioambientais nas escolas.</p>
              <div class="timeline-speaker">Facilitador: Felipe Santos</div>
            </div>
          </div>
        </div>
      </div>

      <!-- DIA 3 -->
      <div id="day3" class="tab-pane">
        <h3 style="text-align: center; margin-bottom: 30px; color: var(--color-blue-menu); font-family: var(--font-family-questrial);">Eixo 3: Modelagem, Inovação e Monitoramento do Sistema Terrestre</h3>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">08:30 - 09:15</span>
              <h4 class="timeline-title">Palestra 7: Queimadas na Amazônia e inovação tecnológica</h4>
              <p class="timeline-desc">Uso de novas ferramentas computacionais e tecnologias espaciais para monitoramento, controle e estudos do fogo na região amazônica.</p>
              <div class="timeline-speaker">Palestrante: Liana Anderson (Cemaden)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">09:15 - 10:00</span>
              <h4 class="timeline-title">Apresentação Oral de Trabalhos</h4>
              <p class="timeline-desc">Apresentações acadêmicas dos discentes do PGCST.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">10:00 - 10:30</span>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Debates abertos sobre as pesquisas discentes de modelagem.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">10:30 - 11:00</span>
              <h4 class="timeline-title">Coffee Break & Banners</h4>
              <p class="timeline-desc">Intervalo e sessão de banners científicos.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">11:00 - 11:45</span>
              <h4 class="timeline-title">Palestra 8: Programa de Monitoramento de vegetação por satélite - BiomasBR</h4>
              <p class="timeline-desc">Histórico, técnicas inovadoras de sensoriamento remoto e resultados do mapeamento sistemático da vegetação nativa brasileira.</p>
              <div class="timeline-speaker">Palestrante: Silvana Amaral Kampel (INPE)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">11:45 - 12:00</span>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Debates sobre monitoramento por satélite dos biomas brasileiros.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">13:45 - 14:15</span>
              <h4 class="timeline-title">Palestra 9: Modelagem e cenários no contexto do projeto Nexus</h4>
              <p class="timeline-desc">Mapeamento e modelagem das relações água-alimento-energia em escala global e regional.</p>
              <div class="timeline-speaker">Palestrante: Minella Alves Martins (INPE)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">14:15 - 14:45</span>
              <h4 class="timeline-title">Palestra 10: AdaptaBrasil e políticas públicas em biodiversidade</h4>
              <p class="timeline-desc">A utilização de dados científicos e plataformas nacionais na formulação de estratégias ecológicas do governo.</p>
              <div class="timeline-speaker">Palestrante: Peter Mann de Toledo (INPE)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">14:45 - 15:30</span>
              <h4 class="timeline-title">Mesa Redonda & Discussão</h4>
              <p class="timeline-desc">Espaço interativo para discussão dos temas de modelagem com o público.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">15:30 - 16:00</span>
              <h4 class="timeline-title">Coffee Break & Banners</h4>
              <p class="timeline-desc">Intervalo e visualização final de banners.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">16:00 - 16:45</span>
              <h4 class="timeline-title">Palestra 11: Florestas tropicais úmidas da Mata Atlântica: produtoras ou consumidoras de água?</h4>
              <p class="timeline-desc">Análise de balanço hídrico e acoplamento floresta-atmosfera em bioma degradado e sob restauração.</p>
              <div class="timeline-speaker">Palestrante: Laura de Simone Borma (INPE)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">16:45 - 17:00</span>
              <h4 class="timeline-title">Discussão e Dúvidas</h4>
              <p class="timeline-desc">Painel final de debate do Eixo 3.</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">17:00 - 18:30</span>
              <h4 class="timeline-title">Oficina / Dinâmica: Gaia em Jogo</h4>
              <p class="timeline-desc">Dinâmica cooperativa focada nos cenários de retroalimentação global e governança socioecológica.</p>
              <div class="timeline-speaker">Facilitadoras: Luciana Ferrer e Lis Accioli</div>
            </div>
          </div>
        </div>
      </div>

      <!-- DIA 4 -->
      <div id="day4" class="tab-pane">
        <h3 style="text-align: center; margin-bottom: 30px; color: var(--color-blue-menu); font-family: var(--font-family-questrial);">Encerramento e Minicursos</h3>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">08:00 - 12:00</span>
              <h4 class="timeline-title">Minicurso: Geoprocessamento com QGIS</h4>
              <p class="timeline-desc">Atividade prática presencial ministrada com foco em aplicações espaciais para ciência ambiental e mapeamento de dados do sistema terrestre.</p>
              <div class="timeline-speaker">Instrutora: Jocilene Barros (Geoaplicada/INPE)</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">15:00 - 15:30</span>
              <h4 class="timeline-title">Encerramento Formal e Happy Hour</h4>
              <p class="timeline-desc">Happy hour de encerramento do evento.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- DIA 5 -->
      <div id="day5" class="tab-pane">
        <h3 style="text-align: center; margin-bottom: 30px; color: var(--color-blue-menu); font-family: var(--font-family-questrial);">Saída de Campo</h3>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <span class="time-badge">07:00 - 12:00</span>
              <h4 class="timeline-title">Saída de Campo: APTA Regional em Pindamonhangaba</h4>
              <p class="timeline-desc">Visita técnica de campo focada em sistemas agroecológicos e práticas sustentáveis de uso do solo. Ônibus com saída pontual programada da portaria principal do INPE.</p>
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
