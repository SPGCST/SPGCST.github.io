class ApoioSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="apoio-container">
        <div class="apoio-grid">
          <p class="placeholder-text text-muted" style="text-align: center; grid-column: 1 / -1; padding: 40px 20px; color: rgba(255, 255, 255, 0.6); font-family: 'Quicksand', sans-serif; font-size: 1.1rem; border: 1px dashed rgba(255, 255, 255, 0.15);">
            Os apoiadores oficiais do evento serão anunciados em breve.
          </p>

          <!--
          <div class="apoio-card">
            <div class="apoio-logo-wrapper">
              <img src="https://static.even3.com/pagina-evento/Logo-geoaplicada.6c2b7b1242dc4cb697ac.png" alt="Geoaplicada" class="apoio-logo" />
            </div>
            <div class="apoio-meta">
              <span class="apoio-name">Geoaplicada</span>
            </div>
          </div>

          <div class="apoio-card">
            <div class="apoio-logo-wrapper">
              <img src="https://static.even3.com/pagina-evento/ADAPTABRASIL.34eec4faf40f43609d12.png" alt="Adapta Brasil" class="apoio-logo" />
            </div>
            <div class="apoio-meta">
              <span class="apoio-name">Adapta Brasil</span>
            </div>
          </div>

          <div class="apoio-card">
            <div class="apoio-logo-wrapper">
              <img src="https://static.even3.com/pagina-evento/Cemadeneducao.4221b4d70b1e40b9a2d9.jpg" alt="Cemaden Educação" class="apoio-logo" />
            </div>
            <div class="apoio-meta">
              <span class="apoio-name">Cemaden Educação</span>
            </div>
          </div>
          -->

        </div>
      </div>
    `;
  }
}

customElements.define('apoio-section', ApoioSection);
