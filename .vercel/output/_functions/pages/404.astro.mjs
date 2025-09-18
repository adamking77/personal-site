import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from '../chunks/BaseLayout_DZYrKpAc.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textXL", "class": "text-black dark:text-white font-medium" }, { "default": ($$result4) => renderTemplate`
404 Page not found
` })} ` })} ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12" }, { "default": ($$result3) => renderTemplate` <div class="border-t dark:border-white/10 border-black/10 pt-2"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "2xl:text-base dark:text-zinc-400 text-zinc-500" }, { "default": ($$result4) => renderTemplate`
It seems you've wandered off the beaten path.
` })} <ul class="mt-4 flex flex-col gap-y-2 list-disc text-black dark:text-white font-medium list-inside" role="list"> <li> ${renderComponent($$result3, "Text", $$Text, { "tag": "a", "variant": "textSM", "href": "#_", "class": "text-[#2c4863] hover:text-black dark:text-[#2c4863] dark:hover:text-white" }, { "default": ($$result4) => renderTemplate`Go back to the homepage` })} </li> </ul> </div> ` })} </section> ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/404.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
