# Plano de Tarefas - Otimização e Componentização

## Goal
Otimizar o consumo de processamento do Globo 3D usando IntersectionObserver e componentizar o HTML repetido em Custom Elements (Web Components) para index, programacao e palestrantes.

## Tasks
- [x] T01: Otimizar o Globo 3D em `globe.js` implementando IntersectionObserver para pausar o loop de animação quando oculto. → Verificar: Logs de renderização pausados ao ocultar a Home.
- [x] T02: Criar o componente modular `<schedule-timeline>` em `schedule-timeline.js` com o conteúdo da programação e a lógica de tabs. → Verificar: Componente renderiza e funciona isoladamente.
- [x] T03: Criar os componentes modulares `<speakers-list>` em `speakers-list.js` e `<organizing-committee>` em `organizing-committee.js`. → Verificar: Listas renderizam corretamente.
- [x] T04: Integrar os componentes em `main.js`, `index.html`, `programacao.html` e `palestrantes.html`, removendo a duplicação de marcação. → Verificar: Páginas funcionam perfeitamente sem HTML duplicado.
- [x] T05: Executar build de produção (`npm run build`) e rodar script de validação (`checklist.py`). → Verificar: Sucesso no build e checklist 100% verificado.

## Done When
- [x] O consumo de processamento do Globo 3D cai para zero quando o elemento está oculto.
- [x] Toda a duplicação de programação e palestrantes foi removida do HTML e encapsulada nos Web Components.
- [x] Sucesso completo em todos os testes automatizados da workspace.
