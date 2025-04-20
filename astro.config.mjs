import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import path from 'path';

export default defineConfig({
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
  site: 'https://yourdomain.com',
  integrations: [tailwind(), sitemap(), mdx()]
});