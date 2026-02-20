
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';

export default defineConfig({
  base: '/Simtope-Feb-2026/',
  plugins: [react(), vike()],
});
