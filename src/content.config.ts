import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { seoSchema } from '@jdevalk/astro-seo-graph';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: (ctx) => z.object({
    title: z.string().min(5).max(120),
    description: z.string().min(15).max(160),
    date: z.coerce.date(),
    category: z.string().optional(),
    seo: seoSchema(ctx.image).optional(),
  }),
});

export const collections = { writing };
