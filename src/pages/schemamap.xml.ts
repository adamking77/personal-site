import { createSchemaMap } from '@jdevalk/astro-seo-graph';

export const GET = createSchemaMap({
  siteUrl: 'https://adamking.me',
  entries: [
    { path: '/schema/writing.json', lastModified: new Date('2026-05-07') },
  ],
});
