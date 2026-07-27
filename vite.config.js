import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        programacao: resolve(__dirname, 'pages/programacao.html'),
        palestrantes: resolve(__dirname, 'pages/palestrantes.html'),
        local: resolve(__dirname, 'pages/local.html'),
        inscricao: resolve(__dirname, 'pages/inscricao.html'),
        submissoes: resolve(__dirname, 'pages/submissoes.html'),
        minicurso: resolve(__dirname, 'pages/minicurso.html'),
        patrocinadores: resolve(__dirname, 'pages/patrocinadores.html'),
        apoio: resolve(__dirname, 'pages/apoio.html')
      }
    }
  }
});
