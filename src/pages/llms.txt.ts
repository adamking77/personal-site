import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('writing');
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const site = context.site?.toString().replace(/\/$/, '') ?? 'https://adamking.me';

  const postEntries = sortedPosts
    .map((post) => `- ${post.data.title}: ${site}/writing/${post.id}`)
    .join('\n');

  const body = `# Adam King

> Generalized specialist. Founder of GenZen — counter-exploitation and autonomy restoration.

## About

Adam King is a generalized specialist based between Europe and Southeast Asia. He founded GenZen in 2016 — a counter-exploitation and autonomy restoration agency serving ultra-high-net-worth families and their advisors. He is also a co-developer of Sogo, an open-source productivity system, and a practitioner of agentic partnership design — building AI systems that operate as genuine working partners.

His work sits at the intersection of pattern recognition, systems thinking, behavioral profiling, and design thinking — applied to detecting and reversing exploitation architectures across personal, business, and generational domains.

## Site Structure

- Homepage: ${site}
- Writing: ${site}/writing
- RSS Feed: ${site}/rss.xml

## Writing

${postEntries}

## Topics Covered

- Counter-exploitation and autonomy restoration
- Legacy protection for high-net-worth families
- Agentic partnership design (AI as operational partner)
- The generalized specialist as a practice model
- Systems thinking applied to human autonomy
- Pattern recognition in exploitation architectures

## Related

- GenZen Solutions: https://genzen.solutions
- Sogo: https://sogo-site.vercel.app
- LinkedIn: https://www.linkedin.com/in/adamkingco/
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
