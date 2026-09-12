class ApoioSection extends HTMLElement {
  connectedCallback() {
    const logoInpe = new URL('../../assets/images/INPE.png', import.meta.url).href;
    const logoMcti = new URL('../../assets/images/RODAPE_MCTI.png', import.meta.url).href;
    const logoCapes = new URL('../../assets/images/Identidade_Visual_CAPES.png', import.meta.url).href;

    this.innerHTML = `
      <div class="apoio-container">
        <div class="apoio-grid">
          <div class="apoio-card">
            <div class="apoio-logo-wrapper" style="padding: 15px; display: flex; justify-content: center; align-items: center; height: 150px;">
              <img src="${logoInpe}" alt="INPE" class="apoio-logo" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;" />
            </div>
            <div class="apoio-meta">
              <span class="apoio-name">INPE</span>
            </div>
          </div>

          <div class="apoio-card">
            <div class="apoio-logo-wrapper" style="padding: 15px; display: flex; justify-content: center; align-items: center; height: 150px;">
              <img src="${logoMcti}" alt="MCTI" class="apoio-logo" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;" />
            </div>
            <div class="apoio-meta">
              <span class="apoio-name">MCTI</span>
            </div>
          </div>

          <div class="apoio-card">
            <div class="apoio-logo-wrapper" style="padding: 15px; display: flex; justify-content: center; align-items: center; height: 150px;">
              <img src="${logoCapes}" alt="CAPES" class="apoio-logo" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;" />
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
