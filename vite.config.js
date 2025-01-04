import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist", // Ensure the output directory matches your Vercel settings
  },
  server: {
    historyApiFallback: true, // Handles SPA routing during development
  },
})
