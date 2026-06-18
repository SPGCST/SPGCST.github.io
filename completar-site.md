# Plano de Tarefas - Completar Site Simpósio

## Goal
Completar o site do 13º SPGCST integrando a programação detalhada, palestrantes, comissão organizadora, links e ajustando a navegação de forma responsiva e componentizada.

## Tasks
- [x] T01: Clarificar datas, navegação e posicionamento da comissão organizadora com o usuário. (Depende de: nenhuma) → Verificar: Resposta do usuário obtida.
- [x] T02: Atualizar os estilos em `main.css` para a tabela de programação, cards de palestrantes, comissão e ícones sociais. (Depende de: T01) → Verificar: Estilos incluídos e estruturados.
- [x] T03: Integrar a programação oficial no `index.html` e nas páginas individuais/fallbacks. (Depende de: T01) → Verificar: Conteúdo exibido corretamente.
- [x] T04: Integrar os palestrantes e comissão organizadora no `index.html` e fallbacks. (Depende de: T01) → Verificar: Listagem renderizada com fotos/silhuetas e cargos.
- [x] T05: Atualizar links de Inscrição e redes sociais (Instagram, YouTube) nos componentes `site-header.js` e `site-footer.js`. (Depende de: T01) → Verificar: Cliques abrem as redes correspondentes e Even3.
- [x] T06: Executar scripts de validação (`checklist.py`, `ux_audit.py`, `security_scan.py`) e build de produção. (Depende de: T02, T03, T04, T05) → Verificar: Build limpo e scripts de auditoria com sucesso.

## Done When
- [x] Programação, palestrantes, inscrição e comissão estão totalmente populados e funcionais.
- [x] Design responsivo e interações (como o globo 3D e menu hambúrguer) funcionando perfeitamente.
- [x] Passar nas validações e builds de produção.

## ✅ PHASE X COMPLETE
- Lint: ✅ Pass
- Security: ✅ No critical issues
- Build: ✅ Success
- Date: 2026-06-18
