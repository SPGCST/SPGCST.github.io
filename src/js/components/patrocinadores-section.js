class SponsorsSection extends HTMLElement {
  connectedCallback() {
    const logoVale = new URL('../../assets/images/vale-topografia.png', import.meta.url).href;
    const logoGeoOne = new URL('../../assets/images/geoone.png', import.meta.url).href;

    this.innerHTML = `
      <div class="sponsors-container">
        <div class="sponsors-grid">
          <div class="sponsor-card">
            <div class="sponsor-logo-wrapper" style="padding: 20px; display: flex; justify-content: center; align-items: center; height: 180px;">
              <img src="${logoVale}" alt="Vale Topografia" class="sponsor-logo" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;" />
            </div>
            <div class="sponsor-meta">
              <span class="sponsor-name">Vale Topografia</span>
            </div>
          </div>

          <div class="sponsor-card">
            <div class="sponsor-logo-wrapper" style="padding: 20px; display: flex; justify-content: center; align-items: center; height: 180px;">
              <img src="${logoGeoOne}" alt="GeoOne" class="sponsor-logo" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;" />
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
