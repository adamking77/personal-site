import { c as createComponent, g as renderScript, m as maybeRenderHead, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$Wrapper, b as $$Text, $ as $$BaseLayout } from '../chunks/BaseLayout_BqvvlpEb.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  try {
    const sections = await getCollection("homeSections");
    var heroSection = sections.find((section) => section.data.section === "hero");
    var aboutSection = sections.find((section) => section.data.section === "about");
    var workSection = sections.find((section) => section.data.section === "work");
    var nowSection = sections.find((section) => section.data.section === "now");
  } catch (error) {
    console.error("Error loading content:", error);
    var heroSection = null;
    var aboutSection = null;
    var workSection = null;
    var nowSection = null;
  }
  const heroLines = heroSection?.body?.trim()?.split("\n") || ["Welcome to my site"];
  const processRichText = (content) => {
    if (!content) return [];
    return content.trim().split("\n\n").filter(Boolean);
  };
  const aboutContent = processRichText(aboutSection?.body);
  const workContent = processRichText(workSection?.body);
  const nowContent = processRichText(nowSection?.body);
  return renderTemplate`${renderScript($$result, "/Users/adamking/claude-code-projects/ak-site/src/components/landing/Hero.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<section class="hero-section mt-12" data-astro-cid-7vszemnk> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "wide", "class": "min-h-[80vh] py-16 lg:py-24 relative", "data-astro-cid-7vszemnk": true }, { "default": async ($$result2) => renderTemplate` <div class="flex items-center h-full" data-astro-cid-7vszemnk> <div class="w-full lg:w-3/5 z-10 relative" data-astro-cid-7vszemnk> ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "displayXS", "class": "font-medium leading-loose animate-on-scroll hero-slide-in text-3xl lg:text-5xl", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${unescapeHTML(heroLines.join("<br />"))}` })} </div> </div> <div class="absolute top-0 right-0 w-3/5 h-full hero-bg" id="hero-image" data-astro-cid-7vszemnk></div> ` })} ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-16 lg:py-24 max-w-4xl", "data-astro-cid-7vszemnk": true }, { "default": async ($$result2) => renderTemplate` <div class="animate-on-scroll" data-astro-cid-7vszemnk> ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "displayXS", "class": "font-medium mb-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${aboutSection?.data.title}` })} <div class="border-t dark:border-white/10 border-black/10 pt-2" data-astro-cid-7vszemnk> <div class="ml-0 md:ml-12 lg:ml-24" data-astro-cid-7vszemnk> ${aboutContent.map((paragraph) => renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textLG", "class": "mt-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${unescapeHTML(paragraph)}` })}`)} </div> </div> </div> <div class="animate-on-scroll delay-200 mt-48" data-astro-cid-7vszemnk> ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "displayXS", "class": "font-medium mb-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${workSection?.data.title}` })} <div class="border-t dark:border-white/10 border-black/10 pt-2" data-astro-cid-7vszemnk> <div class="ml-0 md:ml-12 lg:ml-24" data-astro-cid-7vszemnk> ${workContent.map((paragraph) => renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textLG", "class": "mt-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${unescapeHTML(paragraph)}` })}`)} </div> </div> </div> <div class="animate-on-scroll delay-400 mt-48" data-astro-cid-7vszemnk> ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "displayXS", "class": "font-medium mb-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${nowSection?.data.title}` })} <div class="border-t dark:border-white/10 border-black/10 pt-2" data-astro-cid-7vszemnk> <div class="ml-0 md:ml-12 lg:ml-24" data-astro-cid-7vszemnk> ${nowContent.map((paragraph) => renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textLG", "class": "mt-4", "data-astro-cid-7vszemnk": true }, { "default": async ($$result3) => renderTemplate`${unescapeHTML(paragraph)}` })}`)} </div> </div> </div> ` })} </section>`;
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
