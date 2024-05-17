import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist'
//   }
// })

// https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defa
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 80,
    strictPort: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: 80,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:80",
  },
})