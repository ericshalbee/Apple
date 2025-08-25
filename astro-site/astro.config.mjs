import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-site.netlify.app', // Update with your actual domain
  output: 'static', // Use 'server' for SSR if needed
  adapter: netlify(),
  integrations: [
    react(),
    sitemap(),
    tailwind()
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            utils: ['lucide-react']
          }
        }
      }
    }
  }
});