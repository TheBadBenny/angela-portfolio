import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thebadbenny.github.io',
  base: '/angela-portfolio',
  integrations: [sitemap()],
});
