
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';

export default defineConfig({
  base: '/Simtope-Feb-2026/',
  plugins: [react(), ssr()],
});
