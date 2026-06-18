# Prompt: Construção do Site do Simpósio

**Ativação de Agente:** Atue como **Orquestrador (`orchestrator`)** e **Planejador de Projetos (`project-planner`)**.

Sua missão é coordenar o desenvolvimento do site oficial do Simpósio utilizando **Spec-Driven Development**. Você deve orquestrar os agentes especialistas disponíveis na pasta `.agents/agent/` para garantir que o projeto seja construído com máxima qualidade, seguindo a identidade visual, as referências de arquitetura e garantindo excelente responsividade.

---

## 1. Escopo e Requisitos do Projeto

### 1.1. Tema e Informações do Evento
- **Tema Central:** “Conectando Dinâmicas, Entendendo Mudanças: o Futuro do Sistema Terrestre”
- **Local e Horários Regulares:**
  - **08h30 às 15h30** – Auditório Fernando de Mendonça, prédio do LIT, INPE
  - **15h30 às 17h00** – Prédio da DIIAV/CCST, INPE
- **Encerramento (22/10):** Auditório Fernando de Mendonça, prédio do LIT, INPE
- **Saída de Campo (23/10):** A definir

### 1.2. Identidade Visual (Design System)
- **Fonte de Verdade:** [Canva Design Link](https://www.canva.com/design/DAHGShRDS94/CcYig7RcS1n_-SslldK-cg/edit)
- **Instrução:** O site deve, de forma estrita, seguir a paleta de cores, tipografia (fontes) e logotipo presentes neste Canva. 

### 1.3. Arquitetura, Código e Referências
- **Hospedagem:** GitHub Pages (Site Estático).
- **Referência de Estrutura Técnica e Layout:** [Projeto GeoinfoBR](https://geoinfobr.github.io/index.html) (Repositório: [GeoinfoBR.github.io](https://github.com/GeoinfoBR/GeoinfoBR.github.io)).
- **Referência para Estrutura de Menus e Conteúdo:** [Site do Simpósio Anterior - Even3](https://www.even3.com.br/e/xii-spgcst-2025-simposio-do-programa-da-pos-graduacao-em-ciencia-do-sistema-terrestre-603643).
- **Boas Práticas e Arquitetura:** Utilize os princípios de **Clean Architecture** e **Clean Code**. Todo o projeto deve ser estritamente **componentizado** (separando marcação, lógica e estilos de forma modular) para não engessar o código e facilitar sua escalabilidade.
- **Responsividade:** Obrigatória para Mobile (Smartphones) e Desktop.

---

## 2. Metodologia de Trabalho: Spec-Driven Development

Você deve seguir este fluxo de forma rigorosa, sem pular etapas:

### Passo 1: Análise e Planejamento (Project Planner)
- Extraia todas as diretrizes (Design, Menus, Hospedagem).
- Elabore um documento detalhado de Especificações (Specs) contendo:
  - Arquitetura de arquivos (HTML/CSS/JS).
  - Componentes de UI que precisarão ser criados.
  - O fluxo de navegação baseado no site da Even3.
- Apresente este plano para minha aprovação (**Socratic Gate**). Não comece a programar antes do meu "De Acordo".

### Passo 2: Orquestração de Agentes (Orchestrator)
Após a aprovação das specs, orquestre a execução invocando/comunicando-se com os agentes corretos da pasta `.agents/agent/`. Sugestões de uso:
- `frontend-specialist`: Para codificar a UI de forma **componentizada**, garantindo design responsivo, Clean Code e integração da identidade visual do Canva.
- `seo-specialist`: Para aplicar as melhores práticas de SEO, meta tags e acessibilidade para o GitHub Pages.
- `test-engineer` e `qa-automation-engineer`: Para implementar testes de funcionalidade automatizados, garantindo que a navegação e a responsividade estejam blindadas.
- `security-auditor` (ou similar): Para realizar varreduras e testes de segurança no projeto final, garantindo proteção contra vulnerabilidades.

### Passo 3: Implementação, Testes e Verificação
- Desenvolva o site de forma iterativa, mantendo total foco na componentização e no isolamento de cada peça da UI.
- Execute a suíte de testes (funcionalidade e segurança) para certificar a resiliência da aplicação.
- Ao final, execute os `scripts/checklist.py` (ou scripts de auditoria pertinentes) para aprovar a qualidade visual, de segurança e de código antes de enviar ao GitHub Pages.

---

**[INÍCIO]** Por favor, inicie suas ações agora. Comece confirmando o entendimento deste prompt e apresentando o plano detalhado de Especificações (Step 1) para minha revisão.
