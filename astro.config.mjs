import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://gregarious-frangipane-fb4d6a.netlify.app',
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static',
  adapter: netlify()
});