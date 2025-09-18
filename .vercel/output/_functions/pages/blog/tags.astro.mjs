import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from '../../chunks/BaseLayout_DZYrKpAc.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  const pageTitle = "Tag Index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": async ($$result4) => renderTemplate`
A collection of all tags
` })} ` })} ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12" }, { "default": async ($$result3) => renderTemplate` <div class="flex flex-col gap-2 mt-8 border-t dark:border-white/10 border-black/10 pt-2"> ${tags.map((tag) => renderTemplate`${renderComponent($$result3, "Text", $$Text, { "tag": "a", "variant": "textSM", "href": `/blog/tags/${tag}`, "class": "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white font-medium" }, { "default": async ($$result4) => renderTemplate`
&rarr; ${tag}` })}`)} </div> ` })} </section> ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/blog/tags/index.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/blog/tags/index.astro";
const $$url = "/blog/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
