import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from '../../chunks/BaseLayout_BqvvlpEb.mjs';
export { renderers } from '../../renderers.mjs';

const $$Typography = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result4) => renderTemplate`
Typography
` })} ` })} ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12" }, { "default": ($$result3) => renderTemplate` <div class="border-t dark:border-white/10 border-black/10 pt-2"> ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result4) => renderTemplate`
All variants - Font in use: Inter
` })} </div> <div class="flex flex-col font-medium mt-8 text-zinc-500 dark:text-zinc-400"> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXS" }, { "default": ($$result4) => renderTemplate` Text XS ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM" }, { "default": ($$result4) => renderTemplate` Text SM ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textBase" }, { "default": ($$result4) => renderTemplate` Text Base ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textLG" }, { "default": ($$result4) => renderTemplate` Text LG ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textXL" }, { "default": ($$result4) => renderTemplate` Text XL ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "displayXS" }, { "default": ($$result4) => renderTemplate` Display XS ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "displaySM" }, { "default": ($$result4) => renderTemplate` Display SM ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "displayMD" }, { "default": ($$result4) => renderTemplate` Display MD ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "displayLG" }, { "default": ($$result4) => renderTemplate` Display LG ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "displayXL" }, { "default": ($$result4) => renderTemplate` Display XL ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "display2XL" }, { "default": ($$result4) => renderTemplate` Display 2XL ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "display3XL" }, { "default": ($$result4) => renderTemplate` Display 3XL ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "display4XL" }, { "default": ($$result4) => renderTemplate` Display 4XL ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "display5XL" }, { "default": ($$result4) => renderTemplate` Display 5XL ` })} </div> <div class="py-4"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "display6XL" }, { "default": ($$result4) => renderTemplate` Display 6XL ` })} </div> </div> ` })} </section> ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/system/typography.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/system/typography.astro";
const $$url = "/system/typography";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Typography,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
