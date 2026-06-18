class SponsorsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="sponsors-container">
        <div class="sponsors-grid">
          <p class="placeholder-text text-muted" style="text-align: center; grid-column: 1 / -1; padding: 40px 20px; color: rgba(255, 255, 255, 0.6); font-family: 'Quicksand', sans-serif; font-size: 1.1rem; border: 1px dashed rgba(255, 255, 255, 0.15);">
            Os patrocinadores oficiais do evento serão anunciados em breve.
          </p>
          
          <!--
          <a href="https://plantsciencebrasil.com.br/" target="_blank" rel="noopener noreferrer" class="sponsor-card">
            <div class="sponsor-logo-wrapper">
              <img src="https://static.even3.com/pagina-evento/logoplantscienceBrasil.68301134ebb747b5b6a4.jpgatualizada.68301134ebb747b5b6a4.jpg" alt="Plant Science Brasil" class="sponsor-logo" />
            </div>
            <div class="sponsor-meta">
              <span class="sponsor-name">Plant Science Brasil</span>
              <span class="sponsor-link-tag">Visitar Website ↗</span>
            </div>
          </a>

          <a href="https://metergroup.com.br/" target="_blank" rel="noopener noreferrer" class="sponsor-card">
            <div class="sponsor-logo-wrapper">
              <img src="https://static.even3.com/pagina-evento/LOGOMETER2025.f66a01734dbf49d0ba38.png" alt="METER Group" class="sponsor-logo" />
            </div>
            <div class="sponsor-meta">
              <span class="sponsor-name">METER Group</span>
              <span class="sponsor-link-tag">Visitar Website ↗</span>
            </div>
          </a>

          <a href="https://www.pdinstrumentos.com.br/pt/paginas/" target="_blank" rel="noopener noreferrer" class="sponsor-card">
            <div class="sponsor-logo-wrapper">
              <img src="https://static.even3.com/pagina-evento/Logo.c0fcb488993a4deab2ed.jpg" alt="PD Instrumentos" class="sponsor-logo" />
            </div>
            <div class="sponsor-meta">
              <span class="sponsor-name">PD Instrumentos</span>
              <span class="sponsor-link-tag">Visitar Website ↗</span>
            </div>
          </a>

          <a href="https://www.campbellsci.com/" target="_blank" rel="noopener noreferrer" class="sponsor-card">
            <div class="sponsor-logo-wrapper">
              <img src="https://static.even3.com/pagina-evento/CSLOGO_HC_STAN.2970bb90e4b54f4b8520.png" alt="Campbell Scientific" class="sponsor-logo" />
            </div>
            <div class="sponsor-meta">
              <span class="sponsor-name">Campbell Scientific</span>
              <span class="sponsor-link-tag">Visitar Website ↗</span>
            </div>
          </a>
          -->

        </div>
      </div>
    `;
  }
}

customElements.define('sponsors-section', SponsorsSection);
