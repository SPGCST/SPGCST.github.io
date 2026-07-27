# 🌐 13º Simpósio da Pós-Graduação em Ciência do Sistema Terrestre (SPGCST - INPE)

> **"Conectando Dinâmicas, Entendendo Mudanças: O Futuro do Sistema Terrestre"**  
> 🗓️ **Data do Evento:** 19 a 23 de Outubro de 2026 | 📍 **Local:** INPE — São José dos Campos, SP

---

## 📌 Sobre o Projeto

Este repositório contém o código-fonte da plataforma web oficial do **13º Simpósio da Pós-Graduação em Ciência do Sistema Terrestre (SPGCST)**, promovido pelo **Instituto Nacional de Pesquisas Espaciais (INPE)** através da **Coordenação-Geral de Ciências da Terra (CGCT/INPE)**.

A plataforma foi desenvolvida para atender tanto à comunidade científica e acadêmica quanto aos pesquisadores participantes, oferecendo uma experiência visual moderna, responsiva e performática para acesso às programações, submissões de resumos, informações de minicursos, palestrantes convidados e logística do evento.

---

## 🔬 Destaques Científicos & Tecnológicos

- **Engenharia de Performance com Web Components:** Arquitetura modular utilizando *Custom Elements* nativos da Web (Vanilla JS), garantindo encapsulamento, facilidade de manutenção e zero sobrecarga de frameworks pesados.
- **Visualização 3D do Sistema Terrestre (Three.js):** Globo 3D interativo na página inicial utilizando renderização WebGL acelerada por GPU.
- **Otimização de Recursos (`IntersectionObserver`):** O loop de renderização do Globo 3D é pausado automaticamente quando o elemento sai da área de visão do usuário (*viewport*), reduzindo a zero o consumo de CPU/GPU em outras seções do site.
- **Arquitetura Multi-Page & Single-Page Híbrida (Vite MPA):** Suporte tanto para navegação fluida em Single Page Application (SPA) na Home quanto para URLs estáticas dedicadas (`pages/`), otimizando o SEO e o compartilhamento de links.
- **Design Tokens & Acessibilidade:** Sistema de design fundamentado em variáveis CSS padronizadas, alinhado à identidade visual institucional e acessibilidade cross-browser.

---

## 📁 Arquitetura do Projeto

```text
simposio-website/
├── index.html                  # Página principal (Home com navegação fluida)
├── pages/                      # Páginas estáticas dedicadas
│   ├── apoio.html              # Instituições de Apoio
│   ├── inscricao.html          # Informações e links de Inscrição (Even3)
│   ├── local.html              # Localização e infraestrutura no INPE
│   ├── minicurso.html          # Minicursos e Workshops
│   ├── palestrantes.html       # Lista de Palestrantes Confirmados
│   ├── patrocinadores.html     # Patrocinadores do Evento
│   ├── programacao.html        # Programação Detalhada
│   └── submissoes.html         # Diretrizes de Submissão e Templates
├── src/
│   ├── assets/                 # Recursos de mídia, imagens, logos e templates .docx/.pptx
│   ├── css/                    # Estilos modulares e design tokens
│   │   ├── variables.css       # Tokens de cores, tipografia e espaçamento
│   │   ├── reset.css           # Normalização CSS
│   │   └── main.css            # Estilos globais e componentes UI
│   └── js/
│       ├── main.js             # Script de inicialização e rotas do menu
│       ├── globe.js            # Motor 3D Three.js com IntersectionObserver
│       └── components/         # Web Components (Custom Elements)
│           ├── site-header.js
│           ├── site-footer.js
│           ├── schedule-timeline.js
│           ├── speakers-list.js
│           ├── organizing-committee.js
│           ├── submissoes-section.js
│           ├── minicurso-section.js
│           ├── patrocinadores-section.js
│           └── apoio-section.js
├── .github/workflows/          # Pipeline CI/CD GitHub Actions (Deploy automático)
├── docs/                       # Documentações internas do projeto
├── vite.config.js              # Configuração do Vite para Multi-Page App
└── package.json                # Gerenciamento de dependências e scripts
```

---

## 🛠️ Tecnologias Utilizadas

- **Core:** HTML5, CSS3, JavaScript (ES6+ / ES Modules)
- **3D Graphics:** [Three.js](https://threejs.org/)
- **Build Tool & Bundler:** [Vite](https://vitejs.dev/)
- **CI/CD & Hosting:** GitHub Actions & GitHub Pages

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema (versão `18.0.0` ou superior recomendada).

### 1. Clonar o Repositório

```bash
git clone https://github.com/flameuss/simposio.git
cd simposio
```

### 2. Instalar as Dependências

```bash
npm install
```

### 3. Executar o Servidor de Desenvolvimento

```bash
npm run dev
```

Abra o navegador no endereço indicado (geralmente `http://localhost:5173`).

### 4. Gerar o Build de Produção

```bash
npm run build
```

Os arquivos otimizados e minificados serão gerados na pasta `dist/`.

### 5. Visualizar o Build Localmente

```bash
npm run preview
```

---

## 🔄 Pipeline de Integração Contínua (CI/CD)

O projeto possui um workflow configurado no **GitHub Actions** (`.github/workflows/deploy.yml`). A cada push para a branch `main`, o pipeline:

1. Realiza o checkout do código;
2. Configura o ambiente Node.js 20;
3. Executa o build de produção (`npm run build`);
4. Realiza o deploy automático para o **GitHub Pages**.

---

## 👥 Comissão Organizadora

O simpósio é organizado pelos discentes e docentes do programa de **Pós-Graduação em Ciência do Sistema Terrestre (PGCST/INPE)**.

---

## 📄 Licença

Este projeto é desenvolvido para fins acadêmicos e institucionais do **INPE**.  
© 2026 Instituto Nacional de Pesquisas Espaciais (INPE). Todos os direitos reservados.
