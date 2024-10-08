import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "@app", replacement: resolve(__dirname, "src/app") },
      { find: "@widgets", replacement: resolve(__dirname, "src/widgets") },
      { find: "@features", replacement: resolve(__dirname, "src/features") },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@entities", replacement: resolve(__dirname, "src/entities") },
      { find: "@shared", replacement: resolve(__dirname, "src/shared") },
    ],
  },
})
