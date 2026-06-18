import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        programacao: resolve(__dirname, 'programacao.html'),
        palestrantes: resolve(__dirname, 'palestrantes.html'),
        local: resolve(__dirname, 'local.html'),
        inscricao: resolve(__dirname, 'inscricao.html'),
        submissoes: resolve(__dirname, 'submissoes.html'),
        minicurso: resolve(__dirname, 'minicurso.html'),
        patrocinadores: resolve(__dirname, 'patrocinadores.html'),
        apoio: resolve(__dirname, 'apoio.html')
      }
    }
  }
});
