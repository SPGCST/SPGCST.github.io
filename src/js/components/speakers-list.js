class SpeakersList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="speakers-grid">
        <div class="speaker-card">
          <div class="speaker-avatar-wrapper">
            <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">EB</div>
          </div>
          <h3 class="speaker-name">Evandro A. Branco</h3>
          <p class="speaker-title">INPE</p>
          <p class="speaker-bio">Palestra: Fronteiras e Desafios da Transdisciplinaridade</p>
        </div>

        <div class="speaker-card">
          <div class="speaker-avatar-wrapper">
            <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">RM</div>
          </div>
          <h3 class="speaker-name">Rafael de A. Monteiro</h3>
          <p class="speaker-title">INPE (Bolsista DTC-B)</p>
          <p class="speaker-bio">Palestra: Entre ciência e sociedade: o papel do diálogo na construção da transdisciplinaridade</p>
        </div>

        <div class="speaker-card">
          <div class="speaker-avatar-wrapper">
            <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">VM</div>
          </div>
          <h3 class="speaker-name">Viviana A. Muñoz</h3>
          <p class="speaker-title">Cemaden</p>
          <p class="speaker-bio">Palestra: Dimensão socioambiental na gestão de risco na América do Sul</p>
        </div>

        <div class="speaker-card">
          <div class="speaker-avatar-wrapper">
            <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">AC</div>
          </div>
          <h3 class="speaker-name">Ana Paula Cunha</h3>
          <p class="speaker-title">Cemaden</p>
          <p class="speaker-bio">Palestra: Secas no Semiárido: Ciência e Monitoramento</p>
        </div>

        <div class="speaker-card">
          <div class="speaker-avatar-wrapper">
            <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">SC</div>
          </div>
          <h3 class="speaker-name">Sâmia R. G. Calheiro</h3>
          <p class="speaker-title">UNIFESP</p>
          <p class="speaker-bio">Palestra: Extremos Hidrometeorológicos no Brasil</p>
        </div>

        <div class="speaker-card">
          <div class="speaker-avatar-wrapper">
            <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">JT</div>
          </div>
          <h3 class="speaker-name">Javier Tomasella</h3>
          <p class="speaker-title">INPE</p>
          <p class="speaker-bio">Palestra: Clima, uso da terra e gestão da água em cenários de extremos</p>
        </div>

        <div class="speaker-card">
          <div class="speaker-avatar-wrapper">
            <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">LA</div>
          </div>
          <h3 class="speaker-name">Liana Anderson</h3>
          <p class="speaker-title">Cemaden</p>
          <p class="speaker-bio">Palestra: Queimadas na Amazônia e inovação tecnológica</p>
        </div>

        <div class="speaker-card">
          <div class="speaker-avatar-wrapper">
            <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">SK</div>
          </div>
          <h3 class="speaker-name">Silvana A. Kampel</h3>
          <p class="speaker-title">INPE</p>
          <p class="speaker-bio">Palestra: Programa de Monitoramento de vegetação por satélite - BiomasBR</p>
        </div>

        <div class="speaker-card">
          <div class="speaker-avatar-wrapper">
            <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">MM</div>
          </div>
          <h3 class="speaker-name">Minella A. Martins</h3>
          <p class="speaker-title">INPE</p>
          <p class="speaker-bio">Palestra: Modelagem e cenários no contexto do projeto Nexus</p>
        </div>

        <div class="speaker-card">
          <div class="speaker-avatar-wrapper">
            <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">PT</div>
          </div>
          <h3 class="speaker-name">Peter M. de Toledo</h3>
          <p class="speaker-title">INPE</p>
          <p class="speaker-bio">Palestra: AdaptaBrasil e políticas públicas em biodiversidade</p>
        </div>

        <div class="speaker-card">
          <div class="speaker-avatar-wrapper">
            <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">LB</div>
          </div>
          <h3 class="speaker-name">Laura de S. Borma</h3>
          <p class="speaker-title">INPE</p>
          <p class="speaker-bio">Palestra: Florestas tropicais úmidas da Mata Atlântica: produtoras ou consumidoras de água?</p>
        </div>
      </div>
    `;
  }
}

customElements.define('speakers-list', SpeakersList);
