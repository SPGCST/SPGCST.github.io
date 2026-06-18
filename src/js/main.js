import '../css/reset.css'
import '../css/variables.css'
import '../css/main.css'
import './components/site-header.js'
import './components/site-footer.js'
import './components/schedule-timeline.js'
import './components/speakers-list.js'
import './components/organizing-committee.js'
import './components/submissoes-section.js'
import './components/minicurso-section.js'
import './components/patrocinadores-section.js'
import './components/apoio-section.js'
import { initGlobe } from './globe.js'

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o globo 3D
  initGlobe('globe-container');

  // Caso o usuário acesse via link com âncora (ex: index.html#programacao) de outra página
  const hash = window.location.hash;
  if (hash) {
    const targetId = hash.substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      // Oculta todas as seções e ativa a correspondente
      const sections = document.querySelectorAll('.view-section');
      sections.forEach(sec => {
        sec.classList.remove('active-section');
        if (sec.id === targetId) {
          sec.classList.add('active-section');
        }
      });

      // Atualiza o link ativo no header
      const header = document.querySelector('site-header');
      if (header) {
        // Aguarda a renderização do custom element
        setTimeout(() => {
          const links = header.querySelectorAll('.nav-links a');
          links.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('href') === hash) {
              l.classList.add('active');
            }
          });
        }, 50);
      }
    }
  }
});
