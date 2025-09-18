import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate, F as Fragment } from '../../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { b as $$Text, g as getCollection, $ as $$BaseLayout, a as $$Wrapper } from '../../chunks/BaseLayout_DZYrKpAc.mjs';
import { $ as $$Link } from '../../chunks/Link_BGxdYCbD.mjs';
import { $ as $$BlogSearch, a as $$SubsCta } from '../../chunks/BlogSearch_C2hRCNBE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://adamking.com");
const $$EntriesThree = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EntriesThree;
  const { title, url, description, pubDate, author, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(title, "title")}> <div class="flex flex-col items-center"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="object-cover aspect-square rounded-xl dark:opacity-70"> <div class="mt-4"> ${renderComponent($$result, "Text", $$Text, { "tag": "span", "variant": "textXS", "class": "font-medium text-zinc-500 dark:text-zinc-400 uppercase" }, { "default": ($$result2) => renderTemplate`${author} -
<time${addAttribute(pubDate, "datetime")}>${pubDate}</time> ` })} ${renderComponent($$result, "Text", $$Text, { "tag": "h4", "variant": "textBase", "class": "text-black dark:text-white mt-1 font-medium group-hover:text-black/70 dark:group-hover:text-white/70" }, { "default": ($$result2) => renderTemplate`${title}` })} ${renderComponent($$result, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-zinc-500 dark:text-zinc-400 mt-4" }, { "default": ($$result2) => renderTemplate`${description}` })} </div> </div> </a>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/blog/EntriesThree.astro", void 0);

const $$HomeThree = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const allTags = [...new Set(allPosts.flatMap((post) => post.data.tags || []))];
  const sortedTags = allTags.sort((a, b) => a.localeCompare(b));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": async ($$result4) => renderTemplate`
Me and my thoughts
` })} ` })} </section> <section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12" }, { "default": async ($$result3) => renderTemplate` <div> ${renderComponent($$result3, "BlogSearch", $$BlogSearch, {})} </div> <div class="mt-2 flex flex-wrap gap-1"> ${sortedTags.map((tag) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Link", $$Link, { "size": "small", "variant": "secondary", "title": tag, "aria-label": tag, "href": `/blog/tags/${tag}` }, { "default": async ($$result5) => renderTemplate`${tag}` })} ` })}`)} </div> <div class="grid gap-y-12 grid-cols-1 gap-4 lg:grid-cols-2 mt-2 border-t dark:border-white/10 border-black/10 pt-2"> ${allPosts.slice().map((post) => renderTemplate`${renderComponent($$result3, "EntriesThree", $$EntriesThree, { "url": "/blog/posts/" + post.slug, "title": post.data.title, "description": post.data.description, "alt": post.data.title, "pubDate": post.data.pubDate.toString().slice(0, 10), "author": post.data.author, "image": post.data.image.url })}`)} </div> ` })} </section> ${renderComponent($$result2, "SubsCta", $$SubsCta, {})} ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/blog/home-three.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/blog/home-three.astro";
const $$url = "/blog/home-three";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HomeThree,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
