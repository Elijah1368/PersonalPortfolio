import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PersonalPortfolio/', // Adjust this to match your GitHub Pages URL path
  plugins: [react(), svgr()],
})
