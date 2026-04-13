import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        blog: path.resolve(__dirname, 'blog.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        projects: path.resolve(__dirname, 'projects.html'),
        retail: path.resolve(__dirname, 'retail.html'),
        services: path.resolve(__dirname, 'services.html'),
        workspaces: path.resolve(__dirname, 'workspaces.html'),
      },
    },
  },
})
