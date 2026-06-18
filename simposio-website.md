# Overview
Construção do site do Simpósio "Conectando Dinâmicas, Entendendo Mudanças: o Futuro do Sistema Terrestre" seguindo os princípios de Spec-Driven Development, Clean Architecture e Clean Code. O projeto será estático e hospedado no GitHub Pages.

# Project Type
WEB

# Success Criteria
- Site totalmente responsivo (Mobile e Desktop).
- Código componentizado seguindo Clean Code.
- Aderência estrita à paleta de cores, tipografia e logo do Canva fornecido.
- SEO e Meta Tags configurados adequadamente.
- Aprovação nos testes de funcionalidade e segurança.

# Tech Stack
- **HTML5 & CSS3 (Vite + Vanilla JS):** Permite modularização e componentização sem engessar, ideal para site estático do evento.
- **Testes:** Scripts de automação nativos da workspace (`playwright_runner.py`, `security_scan.py`).
- **Hospedagem:** GitHub Pages.

# File Structure
```text
├── index.html
├── src/
│   ├── css/
│   │   ├── variables.css (Cores e tipografia do Canva)
│   │   ├── reset.css
│   │   └── main.css
│   ├── js/
│   │   ├── main.js
│   │   └── components/ (Ex: nav-menu.js, agenda.js)
│   └── assets/
│       ├── images/ (Logos, ícones)
│       └── fonts/
├── .github/
│   └── workflows/ (GitHub actions para deploy no gh-pages)
└── package.json (Scripts Vite e testes)
```

# Task Breakdown

| Task ID | Name | Agent | Skills | Priority | Dependencies | INPUT → OUTPUT → VERIFY |
|---------|------|-------|--------|----------|--------------|-------------------------|
| T01 | Setup Project & Vite | `frontend-specialist` | `app-builder` | P0 | None | IN: Plano → OUT: Estrutura base criada → VERIFY: `npm run dev` roda com sucesso |
| T02 | Design Tokens (Canva) | `frontend-specialist` | `frontend-design` | P1 | T01 | IN: Link Canva → OUT: `variables.css` populado → VERIFY: Variáveis disponíveis globalmente |
| T03 | HTML Structure & Layout | `frontend-specialist` | `clean-code` | P1 | T02 | IN: Ref GeoinfoBR → OUT: Estrutura semântica → VERIFY: Layout base aprovado no navegador |
| T04 | Menus & Navigation | `frontend-specialist` | `clean-code` | P1 | T03 | IN: Ref Even3 → OUT: Componente de Menu → VERIFY: Navegação fluida em Mobile/Desktop |
| T05 | SEO & Meta Tags | `seo-specialist` | `seo-fundamentals` | P2 | T03 | IN: Info evento → OUT: Tags OpenGraph e Meta → VERIFY: Ferramenta de SEO aponta conformidade |
| T06 | Functional & Security Tests | `test-engineer` / `security-auditor` | `testing-patterns` | P3 | T04, T05 | IN: Código final → OUT: Suíte de testes passando → VERIFY: Scripts de checklist executam com sucesso |

# Phase X: Verification
- [ ] Segurança: Executar `security_scan.py`
- [ ] UX/Acessibilidade: Executar `ux_audit.py` e `lighthouse_audit.py`
- [ ] Testes Funcionais: Executar `playwright_runner.py` (ou testes definidos)
- [ ] Build e Deploy: `npm run build`
