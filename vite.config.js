import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        terms: resolve(__dirname, 'terms.html'),
        dataSafety: resolve(__dirname, 'data-safety.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
