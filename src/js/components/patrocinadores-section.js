class SponsorsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="sponsors-container">
        <div class="sponsors-grid">
          <div class="sponsor-card">
            <div class="sponsor-logo-wrapper">
              <img src="/src/assets/images/TERRAVALE_SEMFUNDO.png" alt="Vale Topografia" class="sponsor-logo" />
            </div>
            <div class="sponsor-meta">
              <span class="sponsor-name">Vale Topografia</span>
            </div>
          </div>

          <div class="sponsor-card">
            <div class="sponsor-logo-wrapper">
              <img src="/src/assets/images/LOGO MODERNA - fonte branca.jpg" alt="GeoOne" class="sponsor-logo" />
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
