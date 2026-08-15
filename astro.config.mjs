import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.SITE_URL || 'https://birminghamtreecompany.com',
  integrations: [
    tailwind(),
  ],
  image: {
    domains: ['images.unsplash.com'],
    cacheDir: './.cache/images'
  },
  output: 'static',
  compressHTML: true,
});
