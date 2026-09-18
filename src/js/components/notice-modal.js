import bannerImg from '../../assets/images/banner-001.jpg';

class NoticeModal extends HTMLElement {
  connectedCallback() {
    // Verifica se o usuário já visualizou o aviso nesta sessão do navegador
    if (sessionStorage.getItem('simposio_notice_modal_seen')) {
      return;
    }

    this.innerHTML = `
      <div class="notice-modal-backdrop" id="notice-modal-backdrop" role="dialog" aria-modal="true" aria-label="Aviso Importante">
        <div class="notice-modal-container">
          <button class="notice-modal-close" id="notice-modal-close" aria-label="Fechar aviso">&times;</button>
          <div class="notice-modal-content">
            <img src="${bannerImg}" alt="Aviso SPGCST: Prorrogação de prazo de submissão de trabalhos até 30/08" class="notice-modal-img" />
          </div>
        </div>
      </div>
    `;

    // Marca como visto nesta sessão
    sessionStorage.setItem('simposio_notice_modal_seen', 'true');

    this.initEvents();
  }

  initEvents() {
    const backdrop = this.querySelector('#notice-modal-backdrop');
    const closeBtn = this.querySelector('#notice-modal-close');

    if (!backdrop) return;

    // Trava scroll da página de fundo
    document.body.classList.add('modal-open');

    const closeModal = () => {
      backdrop.classList.add('closing');
      document.body.classList.remove('modal-open');
      setTimeout(() => {
        this.remove();
      }, 250);
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    // Fechar ao clicar no fundo escuro
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal();
      }
    });

    // Fechar com tecla ESC
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
  }
}

customElements.define('notice-modal', NoticeModal);

// Auto-instancia caso a tag não esteja presente no HTML e a sessão seja nova
if (typeof document !== 'undefined') {
  const initNoticeModal = () => {
    if (!sessionStorage.getItem('simposio_notice_modal_seen') && !document.querySelector('notice-modal')) {
      const modalEl = document.createElement('notice-modal');
      document.body.appendChild(modalEl);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNoticeModal);
  } else {
    initNoticeModal();
  }
}
