import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from 'dotenv'

// Load environment variables based on the current mode
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: process.env.VITE_SERVER_PORT || 80,
    strictPort: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: process.env.VITE_SERVER_PORT || 80,
    strictPort: true,
    host: process.env.VITE_SERVER_HOST || true,
    origin: `http://${process.env.VITE_SERVER_HOST}:${process.env.VITE_SERVER_PORT}`,
  },
  build: {
    outDir: 'dist',
  },
})