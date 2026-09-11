class SpeakersList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="speakers-container">
        <div class="speakers-grid" style="margin-top: 0; margin-bottom: 50px;">
          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">RR</div>
            </div>
            <h3 class="speaker-name">Raquel Rolnik</h3>
            <p class="speaker-title">FAU-USP</p>
            <p class="speaker-bio">Arquiteta e urbanista, professora titular da FAU-USP e ex-relatora especial da ONU para o Direito à Moradia Adequada.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">JG</div>
            </div>
            <h3 class="speaker-name">Julio Guató</h3>
            <p class="speaker-title">Povo Indígena Guató</p>
            <p class="speaker-bio">Pesquisador e liderança indígena, atuando na preservação dos saberes ancestrais, território e dinâmicas socioambientais do Pantanal.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">RG</div>
            </div>
            <h3 class="speaker-name">Ricardo Galvão</h3>
            <p class="speaker-title">CNPq / USP</p>
            <p class="speaker-bio">Físico, professor titular do Instituto de Física da USP, atual Presidente do CNPq e ex-diretor do INPE.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">ML</div>
            </div>
            <h3 class="speaker-name">Myhanna Lahsen</h3>
            <p class="speaker-title">INPE / CCST</p>
            <p class="speaker-bio">Pesquisadora e especialista em interações entre ciência e política ambiental e mudanças climáticas.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">RA</div>
            </div>
            <h3 class="speaker-name">Regina Célia dos Santos Alvalá</h3>
            <p class="speaker-title">Cemaden / INPE</p>
            <p class="speaker-bio">Pesquisadora em monitoramento de desastres, alertas e gestão de riscos socioambientais.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">RV</div>
            </div>
            <h3 class="speaker-name">Rita de Cássia Silva Von Randow</h3>
            <p class="speaker-title">CST / INPE</p>
            <p class="speaker-bio">Pesquisadora em dinâmica do sistema terrestre e acolhimento institucional.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">JO</div>
            </div>
            <h3 class="speaker-name">Jean Ometto</h3>
            <p class="speaker-title">INPE / CCST</p>
            <p class="speaker-bio">Pesquisador em ecossistemas, ciclo do carbono e mudanças ambientais globais.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">AS</div>
            </div>
            <h3 class="speaker-name">António Mauro Saraiva</h3>
            <p class="speaker-title">USP</p>
            <p class="speaker-bio">Pesquisador em engenharia de computação aplicada à agricultura e saúde planetária.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">TK</div>
            </div>
            <h3 class="speaker-name">Thelma Krug</h3>
            <p class="speaker-title">INPE / Ex-IPCC</p>
            <p class="speaker-bio">Especialista em inventários de emissões de gases de efeito estufa e políticas climáticas globais.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #3b98d3, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">AP</div>
            </div>
            <h3 class="speaker-name">Alexandre Pires</h3>
            <p class="speaker-title">MMA</p>
            <p class="speaker-bio">Atuação em políticas públicas e estratégias de mitigação e adaptação climática.</p>
          </div>

          <div class="speaker-card">
            <div class="speaker-avatar-wrapper">
              <div class="speaker-avatar" style="background: linear-gradient(135deg, #1e457e, #010a15); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem; font-family: var(--font-family-track); width: 100%; height: 100%; border-radius: 50%;">MB</div>
            </div>
            <h3 class="speaker-name">Marcos Buckeridge</h3>
            <p class="speaker-title">IB-USP</p>
            <p class="speaker-bio">Pesquisador em fisiologia vegetal, bioenergia e infraestrutura verde urbana (Cidades Esponja).</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('speakers-list', SpeakersList);
