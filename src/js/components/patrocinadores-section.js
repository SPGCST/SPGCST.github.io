class SponsorsSection extends HTMLElement {
  connectedCallback() {
    // Força o Vite a processar as imagens e retornar o caminho real final
    const logoVale = new URL('../../assets/images/vale-topografia.png', import.meta.url).href;
    const logoGeoOne = new URL('../../assets/images/geoone.png', import.meta.url).href;

    this.innerHTML = `
      <div class="sponsors-container">
        <div class="sponsors-grid">
          <div class="sponsor-card">
            <div class="sponsor-logo-wrapper">
              <img src="${logoVale}" alt="Vale Topografia" class="sponsor-logo" />
            </div>
            <div class="sponsor-meta">
              <span class="sponsor-name">Vale Topografia</span>
            </div>
          </div>

          <div class="sponsor-card">
            <div class="sponsor-logo-wrapper">
              <img src="${logoGeoOne}" alt="GeoOne" class="sponsor-logo" />
            </div>
            <div class="sponsor-meta">
              <span class="sponsor-name">GeoOne</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('sponsors-section', SponsorsSection);
