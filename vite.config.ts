import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  resolve: {
      alias: {
          '@/core': path.resolve(__dirname, './src/core'),
          '@/entities': path.resolve(__dirname, './src/entities'),
          '@/utils': path.resolve(__dirname, './src/utils'),
          '@/hooks': path.resolve(__dirname, './src/hooks'),
      }
  },
  plugins: [react()]
})
