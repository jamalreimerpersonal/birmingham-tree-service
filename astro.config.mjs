import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://birmingham-tree-service.pages.dev',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/admin')
    })
  ],
  image: {
    domains: ['images.unsplash.com'],
    cacheDir: './.cache/images'
  },
  output: 'static',
  compressHTML: true,
});
