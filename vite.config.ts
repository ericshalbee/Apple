import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react']
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    copyPublicDir: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});