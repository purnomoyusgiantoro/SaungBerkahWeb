import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true, // Biar bisa diakses dari network local jika perlu
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Matikan sourcemap untuk produksi agar build lebih ringan
    minify: 'terser', // Gunakan terser untuk minifikasi yang lebih baik
    terserOptions: {
      compress: {
        drop_console: true, // Hapus console.log di produksi
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Pisahkan vendor (react, react-dom) agar loading lebih efisien
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
