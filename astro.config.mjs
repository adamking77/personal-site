import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import path from 'path';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'http://localhost:4321',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }), 
    sitemap(), 
    mdx()
  ]
});