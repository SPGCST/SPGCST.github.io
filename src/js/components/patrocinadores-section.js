class SponsorsSection extends HTMLElement {
  connectedCallback() {
    const logoVale = new URL('../../assets/images/vale-topografia.png', import.meta.url).href;
    const logoGeoOne = new URL('../../assets/images/geoone.png', import.meta.url).href;

    this.innerHTML = `
      <div class="sponsors-container">
        <div class="sponsors-grid">
          
          <!-- Patrocinador 1: Vale Topografia -->
          <div class="sponsor-card">
            <a href="https://valetopografia.com.br/" target="_blank" rel="noopener noreferrer" class="sponsor-logo-wrapper" style="padding: 20px; display: flex; justify-content: center; align-items: center; height: 180px; text-decoration: none;">
              <img src="${logoVale}" alt="Vale Topografia" class="sponsor-logo" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; transition: transform 0.3s ease;" />
            </a>
            <div class="sponsor-meta">
              <a href="https://valetopografia.com.br/" target="_blank" rel="noopener noreferrer" class="sponsor-name" style="text-decoration: none; color: inherit;">
                Vale Topografia <span style="font-size: 0.75rem; color: #3b98d3;">(Site ↗)</span>
              </a>
            </div>
          </div>

          <!-- Patrocinador 2: GeoOne -->
          <div class="sponsor-card">
            <a href="https://geoone.com.br/" target="_blank" rel="noopener noreferrer" class="sponsor-logo-wrapper" style="padding: 20px; display: flex; justify-content: center; align-items: center; height: 180px; text-decoration: none;">
              <img src="${logoGeoOne}" alt="GeoOne" class="sponsor-logo" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; transition: transform 0.3s ease;" />
            </a>
            <div class="sponsor-meta">
              <a href="https://geoone.com.br/" target="_blank" rel="noopener noreferrer" class="sponsor-name" style="text-decoration: none; color: inherit;">
                GeoOne <span style="font-size: 0.75rem; color: #3b98d3;">(Site ↗)</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    `;
  }
}

customElements.define('sponsors-section', SponsorsSection);
