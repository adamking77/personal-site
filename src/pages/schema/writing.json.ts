import { createSchemaEndpoint } from '@jdevalk/astro-seo-graph';
import { getCollection } from 'astro:content';
import { buildWebPage, buildArticle } from '@jdevalk/seo-graph-core';
import { ids, siteWideEntities, SITE_URL, WRITING_URL, BLOG_ID } from '../../utils/schema/index';

export const GET = createSchemaEndpoint({
  entries: () => getCollection('writing'),
  mapper: (post) => {
    const url = `${SITE_URL}/writing/${post.id}/`;
    return [
      buildWebPage(
        {
          url,
          name: post.data.title,
          isPartOf: { '@id': ids.website },
          breadcrumb: { '@id': ids.breadcrumb(url) },
          datePublished: post.data.date,
          inLanguage: 'en-US',
        },
        ids,
      ),
      buildArticle(
        {
          url,
          headline: post.data.title,
          description: post.data.description,
          datePublished: post.data.date,
          author: { '@id': ids.person },
          publisher: { '@id': ids.person },
          isPartOf: [{ '@id': ids.webPage(url) }, { '@id': BLOG_ID }],
          articleSection: post.data.category ?? 'Writing',
          inLanguage: 'en-US',
        },
        ids,
        'BlogPosting',
      ),
      ...siteWideEntities(),
    ];
  },
});
