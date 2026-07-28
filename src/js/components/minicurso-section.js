class MinicursoSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="minicurso-container">
        <div class="minicurso-header">
          <p class="minicurso-subtitle">Confira as informações, regras e detalhes sobre o minicurso ofertado no 13º SPGCST.</p>
        </div>

        <div class="minicurso-rules-banner">
          <div class="rule-item">
            <span class="rule-icon">📌</span>
            <span><strong>Inscrições abertas</strong> até 20 de setembro de 2026.</span>
          </div>
          <div class="rule-item">
            <span class="rule-icon">🆓</span>
            <span><strong>Inscrição 100% gratuita!</strong></span>
          </div>
          <div class="rule-item">
            <span class="rule-icon">⚠️</span>
            <span><strong>Vagas Limitadas:</strong> Cada participante poderá se inscrever em apenas 1 minicurso ou trabalho de campo, que ocorrerão simultaneamente na manhã do dia <strong>23 de Outubro de 2026</strong>.</span>
          </div>
        </div>

        <!-- Card de Minicurso -->
        <div class="minicurso-card">
          <div class="minicurso-card-header">
            <div class="minicurso-title-area">
              <span class="badge-tag">🎓 MINICURSO 1</span>
              <h3>Geoprocessamento com QGIS</h3>
            </div>
            <div class="minicurso-speaker-thumb">
              <img src="https://static.even3.com/pagina-evento/ImagemdoWhatsAppde2025-08-28s11.20.12_78096117.6d18e42582cb4d3cb380.jpg" alt="Jocilene Dantas Barros" class="speaker-img" />
              <div class="speaker-meta">
                <span class="speaker-label">Proponente</span>
                <span class="speaker-name">Jocilene Dantas Barros</span>
              </div>
            </div>
          </div>

          <div class="minicurso-card-body">
            <div class="minicurso-details-grid">
              <div class="detail-cell">
                <span class="detail-label">📅 DATA</span>
                <span class="detail-value">23 de Outubro de 2026</span>
              </div>
              <div class="detail-cell">
                <span class="detail-label">🕒 HORÁRIO</span>
                <span class="detail-value">13:00 às 18:00</span>
              </div>
              <div class="detail-cell">
                <span class="detail-label">🎯 VAGAS</span>
                <span class="detail-value">Até 16 participantes</span>
              </div>
              <div class="detail-cell">
                <span class="detail-label">📍 LOCAL</span>
                <span class="detail-value">Prédio do SERE/INPE (sala indicada posteriormente)</span>
              </div>
            </div>

            <div class="minicurso-info-block">
              <h4>📖 RESUMO DO MINICURSO</h4>
              <p>Praticar a utilização de ferramentas para processamento e análise de dados espaciais no QGIS, com o objetivo de gerar informações úteis para pesquisas científicas e gestão do território.</p>
            </div>

            <div class="minicurso-info-block topics-block">
              <h4>📌 TÓPICOS DO MINICURSO</h4>
              <ul class="bullet-list-tight">
                <li>Importação de dados espaciais no QGIS;</li>
                <li>União de tabela com camada vetorial;</li>
                <li>Análises espaciais com dados vetoriais;</li>
                <li>Análises espaciais com dados raster;</li>
                <li>Representação cartográfica dos resultados;</li>
                <li>Dúvidas.</li>
              </ul>
            </div>

            <div class="minicurso-info-block req-block">
              <h4>💡 REQUISITOS OBRIGATÓRIOS</h4>
              <ul class="bullet-list-tight">
                <li>Ter disponibilidade para participar do curso pelas 5 horas;</li>
                <li>Levar notebook com o QGIS instalado <strong><a href="https://qgis.org/download/" target="_blank">QGIS 3.44 (LTR)</a></strong>;</li>
                <li>Possuir conhecimentos teóricos básicos de geoprocessamento (ou assistir ao vídeo <strong><a href="https://youtu.be/Fx4ESumq4Zk" target="_blank">introdução aos conceitos básicos de geoprocessamento</a></strong>);</li>
                <li>Baixar previamente os dados espaciais (serão disponibilizados em breve).</li>
              </ul>
            </div>

            <div class="minicurso-info-block bio-block">
              <h4>👩‍🏫 MINIBIOGRAFIA</h4>
              <p>É bacharel e mestre em Geografia pela UFRN e doutoranda em Ciência do Sistema Terrestre pelo INPE, co-autora do canal e blog <strong>Geoaplicada</strong> e instrutora de QGIS. Tem experiências como pesquisadora bolsista (INPE), professora (UFRN e PUC-PR), na prestação de serviços de mapeamento e em aulas particulares de SIG. Na pesquisa científica, tem trabalhado principalmente com os temas degradação da terra, modelagem espacial, indicadores socioambientais e vegetação urbana.</p>
            </div>

            <div class="minicurso-action">
              <div class="action-status">
                <span class="status-indicator-green"></span> Inscrições abertas via e-mail!
              </div>
              <a href="#inscricao" class="btn-primary" id="minicurso-to-inscricao">Fazer Inscrição no Simpósio</a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Configura evento de clique para direcionar à seção de inscrição
    const btn = this.querySelector('#minicurso-to-inscricao');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const header = document.querySelector('site-header');
        if (header) {
          const inscLink = header.querySelector('a[data-target="inscricao"]');
          if (inscLink) {
            inscLink.click();
          }
        }
      });
    }
  }
}

customElements.define('minicurso-section', MinicursoSection);
