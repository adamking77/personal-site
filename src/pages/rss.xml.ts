import rss from '@astrojs/rss';
import { getCollection, render } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('writing');
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const items = await Promise.all(
    sortedPosts.map(async (post) => {
      const { remarkPluginFrontmatter } = await render(post);
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/writing/${post.id}/`,
        content: remarkPluginFrontmatter?.rawContent ?? post.data.description,
      };
    }),
  );

  return rss({
    title: 'Adam King — Writing',
    description: 'Writing on counter-exploitation, autonomy restoration, agentic partnership design, and the generalized specialist practice.',
    site: context.site!.toString(),
    items,
  });
}
