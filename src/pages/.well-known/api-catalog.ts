import { createApiCatalog } from '@jdevalk/astro-seo-graph';

export const GET = createApiCatalog({
  siteUrl: 'https://adamking.me',
  schemaEndpoints: [
    { path: '/schema/writing.json', schemaType: 'BlogPosting' },
  ],
  schemaMap: { path: '/schemamap.xml' },
  additional: [
    { anchor: '/rss.xml', type: 'https://schema.org/RssFeed' },
  ],
});
