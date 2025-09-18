import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { b as $$Text, g as getCollection, $ as $$BaseLayout, a as $$Wrapper } from '../../chunks/BaseLayout_BqvvlpEb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://adamking.com");
const $$ProjectsEntries = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectsEntries;
  const { title, subtitle, url, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="h-full flex flex-col py-8"> <div class="bg-black/5 dark:bg-white/5 rounded-xl p-12 lg:p-20"> <img class="object-cover w-full"${addAttribute(title, "alt")}${addAttribute(image, "src")}> </div> <div class="grid grid-cols-1 gap-4 md:grid-cols-3 justify-between h-full mt-4"> ${renderComponent($$result, "Text", $$Text, { "tag": "h4", "variant": "textBase", "class": "text-black dark:text-white font-medium group-hover:text-black/70 dark:group-hover:text-white/70" }, { "default": ($$result2) => renderTemplate`${title}` })} <div class="md:col-span-2"> ${renderComponent($$result, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-zinc-500 dark:text-zinc-400" }, { "default": ($$result2) => renderTemplate`${subtitle}` })} ${renderComponent($$result, "Text", $$Text, { "tag": "a", "variant": "textSM", "href": url, "title": title, "aria-label": title, "class": "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white font-medium mt-4 flex" }, { "default": ($$result2) => renderTemplate`
&rarr; Read more
` })} </div> </div> </div>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/projects/ProjectsEntries.astro", void 0);

const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("projects");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": async ($$result4) => renderTemplate`
Selected projects
` })} ` })} ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12" }, { "default": async ($$result3) => renderTemplate` <div class="border-t dark:border-white/10 border-black/10 pt-2"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "2xl:text-base dark:text-zinc-400 text-zinc-500" }, { "default": async ($$result4) => renderTemplate`
Over the years, I have been involved in designing and creating various
          products, ranging from single-page websites to developing the first
          mobile site builder in the world. Below are some examples of my recent
          projects and the experiences gained from them.
` })} </div> <div class="flex flex-col divide-black/10 dark:fivide-white/0 divide-y border-y mt-8 dark:border-white/10 border-black/10"> ${allPosts.slice().map((post) => renderTemplate`${renderComponent($$result3, "ProjectsEntries", $$ProjectsEntries, { "url": "/projects/" + post.slug, "subtitle": post.data.subtitle, "title": post.data.title, "alt": post.data.title, "image": post.data.image.url })}`)} </div> ` })} </section> ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/projects/home.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/projects/home.astro";
const $$url = "/projects/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
