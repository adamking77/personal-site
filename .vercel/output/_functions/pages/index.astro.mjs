import { c as createComponent, g as renderScript, m as maybeRenderHead, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$Wrapper, b as $$Text, $ as $$BaseLayout } from '../chunks/BaseLayout_DZYrKpAc.mjs';
import { marked } from 'marked';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const sections = await getCollection("homeSections");
  const heroSection = sections.find((section) => section.data.section === "hero");
  const aboutSection = sections.find((section) => section.data.section === "about");
  const workSection = sections.find((section) => section.data.section === "work");
  const nowSection = sections.find((section) => section.data.section === "now");
  const heroLines = heroSection?.body.trim().split("\n") || [];
  const processRichText = (content) => {
    if (!content) return [];
    return content.trim().split("\n\n").filter(Boolean);
  };
  const aboutContent = processRichText(aboutSection?.body);
  const workContent = processRichText(workSection?.body);
  const nowContent = processRichText(nowSection?.body);
  return renderTemplate`${renderScript($$result, "/Users/adamking/claude-code-projects/ak-site/src/components/landing/Hero.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<section data-astro-cid-7vszemnk> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54", "data-astro-cid-7vszemnk": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "textLG", "class": "font-medium animate-on-scroll", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${unescapeHTML(heroLines.join("<br />"))}` })} ` })} ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12", "data-astro-cid-7vszemnk": true }, { "default": async ($$result2) => renderTemplate` <div class="animate-on-scroll" data-astro-cid-7vszemnk> ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "textLG", "class": "font-medium mb-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${aboutSection?.data.title}` })} <div class="border-t dark:border-white/10 border-black/10 pt-2" data-astro-cid-7vszemnk> <div class="ml-0 md:ml-12 lg:ml-24" data-astro-cid-7vszemnk> ${aboutContent.map((paragraph) => renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "2xl:text-base mt-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${unescapeHTML(marked.parse(paragraph))}` })}`)} </div> </div> </div> <div class="animate-on-scroll delay-200 mt-36" data-astro-cid-7vszemnk> ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "textLG", "class": "font-medium mb-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${workSection?.data.title}` })} <div class="border-t dark:border-white/10 border-black/10 pt-2" data-astro-cid-7vszemnk> <div class="ml-0 md:ml-12 lg:ml-24" data-astro-cid-7vszemnk> ${workContent.map((paragraph) => renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "2xl:text-base mt-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${unescapeHTML(marked.parse(paragraph))}` })}`)} </div> </div> </div> <div class="animate-on-scroll delay-400 mt-36" data-astro-cid-7vszemnk> ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "textLG", "class": "font-medium mb-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${nowSection?.data.title}` })} <div class="border-t dark:border-white/10 border-black/10 pt-2" data-astro-cid-7vszemnk> <div class="ml-0 md:ml-12 lg:ml-24" data-astro-cid-7vszemnk> ${nowContent.map((paragraph) => renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "2xl:text-base mt-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${unescapeHTML(marked.parse(paragraph))}` })}`)} </div> </div> </div> ` })} </section>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/landing/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/index.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
