class OrganizingCommittee extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="comissao-grid">
        <div class="comissao-card">
          <h3 class="comissao-name">Amanda Freitas Silva Garcia</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </div>
        <div class="comissao-card">
          <h3 class="comissao-name">Diego Pinheiro de Menezes</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </div>
        <div class="comissao-card">
          <h3 class="comissao-name">Francisco Gilney S. Bezerra</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </div>
        <div class="comissao-card">
          <h3 class="comissao-name">Gisleine da Silva Cunha Zeri</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </div>
        <div class="comissao-card">
          <h3 class="comissao-name">Jaqueline Corolino Santos</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </div>
        <div class="comissao-card">
          <h3 class="comissao-name">Luciana Vieira</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </div>
        <div class="comissao-card">
          <h3 class="comissao-name">Marcio Malacarne</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </div>
        <div class="comissao-card">
          <h3 class="comissao-name">Mariana Marques Wolf</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </div>
        <div class="comissao-card">
          <h3 class="comissao-name">Monique Ribeiro P. Sampaio</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </div>
        <div class="comissao-card">
          <h3 class="comissao-name">Sara Bastos de Oliveira</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </div>
        <div class="comissao-card">
          <h3 class="comissao-name">Yumi Okumura Moliné</h3>
          <p class="comissao-institution">PGCST/INPE</p>
        </div>
      </div>
    `;
  }
}

customElements.define('organizing-committee', OrganizingCommittee);
