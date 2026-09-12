import logoVale from '../../assets/images/vale-topografia.png';
import logoGeoOne from '../../assets/images/geoone.png';

class SponsorsSection extends HTMLElement {
  connectedCallback() {
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
