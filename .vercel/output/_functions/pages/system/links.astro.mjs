import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from '../../chunks/BaseLayout_DZYrKpAc.mjs';
import { $ as $$Link } from '../../chunks/Link_BGxdYCbD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Links = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result4) => renderTemplate`
Links
` })} ` })} ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12" }, { "default": ($$result3) => renderTemplate` <div class="border-t dark:border-white/10 border-black/10 pt-2"> ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result4) => renderTemplate`
All variants
` })} </div> <div class="flex flex-col divide-y divide-zinc-200 dark:divide-white/10 mt-8"> <!-- Primary Variant --> <div class="py-4 flex flex-wrap items-center gap-4"> ${renderComponent($$result3, "Link", $$Link, { "size": "small", "variant": "primary" }, { "default": ($$result4) => renderTemplate`Primary small` })} ${renderComponent($$result3, "Link", $$Link, { "size": "medium", "variant": "primary" }, { "default": ($$result4) => renderTemplate`Primary medium` })} </div> <!-- Secondary Variant --> <div class="py-4 flex flex-wrap items-center gap-4"> ${renderComponent($$result3, "Link", $$Link, { "size": "small", "variant": "secondary" }, { "default": ($$result4) => renderTemplate`Secondary small` })} ${renderComponent($$result3, "Link", $$Link, { "size": "medium", "variant": "secondary" }, { "default": ($$result4) => renderTemplate`Medium secondary` })} </div> </div> ` })} </section> ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/system/links.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/system/links.astro";
const $$url = "/system/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Links,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
