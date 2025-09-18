import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { b as $$Text, g as getCollection, $ as $$BaseLayout, a as $$Wrapper } from '../../chunks/BaseLayout_BqvvlpEb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://adamking.com");
const $$StoreEntries = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StoreEntries;
  const { title, url, description, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="h-full flex flex-col"> <div class="bg-black/5 dark:bg-white/5 rounded-xl p-12 lg:p-20"> <img class="object-cover w-full"${addAttribute(title, "alt")}${addAttribute(image, "src")}> </div> <div class="flex flex-col justify-between h-full mt-4"> <div> ${renderComponent($$result, "Text", $$Text, { "tag": "h4", "variant": "textBase", "class": "text-black dark:text-white font-medium group-hover:text-black/70 dark:group-hover:text-white/70" }, { "default": ($$result2) => renderTemplate`${title}` })} ${renderComponent($$result, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-zinc-500 dark:text-zinc-400 mt-2 2xl:text-base" }, { "default": ($$result2) => renderTemplate`${description}` })} </div> <div class="mt-4"> ${renderComponent($$result, "Text", $$Text, { "tag": "a", "variant": "textSM", "href": url, "title": title, "aria-label": title, "class": "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white font-medium" }, { "default": ($$result2) => renderTemplate`
&rarr; Read more about ${title}` })} </div> </div> </div>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/store/StoreEntries.astro", void 0);

const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("store");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": async ($$result4) => renderTemplate`
The store
` })} ` })} ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12" }, { "default": async ($$result3) => renderTemplate` <div class="border-t dark:border-white/10 border-black/10 pt-2"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "2xl:text-base dark:text-zinc-400 text-zinc-500" }, { "default": async ($$result4) => renderTemplate`
Look around and find out
` })} </div> <div class="mt-8 flex flex-col gap-y-24"> ${allPosts.slice().map((post) => renderTemplate`${renderComponent($$result3, "StoreEntries", $$StoreEntries, { "url": "/store/" + post.slug, "title": post.data.title, "description": post.data.description, "alt": post.data.title, "image": post.data.image.url })}`)} </div> ` })} </section> ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/store/home.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/store/home.astro";
const $$url = "/store/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
