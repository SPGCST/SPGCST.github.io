class ApoioSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="apoio-container">
        <div class="apoio-grid">
          <div class="apoio-card">
            <div class="apoio-logo-wrapper">
              <img src="/src/assets/images/INPE.png" alt="INPE" class="apoio-logo" />
            </div>
            <div class="apoio-meta">
              <span class="apoio-name">INPE</span>
            </div>
          </div>

          <div class="apoio-card">
            <div class="apoio-logo-wrapper">
              <img src="/src/assets/images/RODAPE_MCTI.png" alt="MCTI" class="apoio-logo" />
            </div>
            <div class="apoio-meta">
              <span class="apoio-name">MCTI</span>
            </div>
          </div>

          <div class="apoio-card">
            <div class="apoio-logo-wrapper">
              <img src="/src/assets/images/Identidade_Visual_CAPES.png" alt="CAPES" class="apoio-logo" />
            </div>
            <div class="apoio-meta">
              <span class="apoio-name">CAPES</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('apoio-section', ApoioSection);
