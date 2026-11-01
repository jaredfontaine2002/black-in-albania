import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites are served from /<repo-name>/.
  // The deploy workflow sets BASE_PATH=/black-in-albania/ ; local dev uses /.
  base: process.env.BASE_PATH || '/',
})
