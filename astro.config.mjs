import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import path from 'path';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
      wrap: true,
      skipInline: false
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },
  site: 'https://adamking.com',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }), 
    sitemap(), 
    mdx()
  ]
});