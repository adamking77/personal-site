import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from '../../chunks/BaseLayout_DZYrKpAc.mjs';
export { renderers } from '../../renderers.mjs';

const $$Colors = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result4) => renderTemplate`
Colors
` })} ` })} ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12" }, { "default": ($$result3) => renderTemplate` <div class="border-t dark:border-white/10 border-black/10 pt-2"> ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result4) => renderTemplate`
Colors used on Simplexity
` })} </div> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8 text-zinc-500 dark:text-zinc-400"> <div class="flex flex-col gap-2"> ${renderComponent($$result3, "Text", $$Text, { "tag": "h3", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result4) => renderTemplate`Base` })} <div class="flex items-center gap-4 mt-8"> <div class="p-6 rounded-lg bg-white border border-black/10 dark:border-white/5"></div> <span class="text-sm text-base-500">White </span> </div> <div class="flex items-center gap-4"> <div class="p-6 rounded-lg bg-black border border-black/10 dark:border-white/5"></div> <span class="text-sm text-base-500">Black </span> </div> </div> <div class="flex flex-col gap-2"> ${renderComponent($$result3, "Text", $$Text, { "tag": "h3", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result4) => renderTemplate`Accent` })} <div class="flex items-center gap-4 mt-8"> <div class="p-6 rounded-lg bg-zinc-50 border border-black/10 dark:border-white/5"></div> <span class="text-sm text-base-500">Zinc 50 </span> </div> <div class="flex items-center gap-4"> <div class="p-6 rounded-lg bg-zinc-100"></div> <span class="text-sm text-base-500">Zinc 100 </span> </div> <div class="flex items-center gap-4"> <div class="p-6 rounded-lg bg-zinc-200"></div> <span class="text-sm text-base-500">Zinc 200 </span> </div><div class="flex items-center gap-4"> <div class="p-6 rounded-lg bg-zinc-300"></div> <span class="text-sm text-base-500">Zinc 300 </span> </div><div class="flex items-center gap-4"> <div class="p-6 rounded-lg bg-zinc-400"></div> <span class="text-sm text-base-500">Zinc 400 </span> </div><div class="flex items-center gap-4"> <div class="p-6 rounded-lg bg-zinc-500"></div> <span class="text-sm text-base-500">Zinc 500 </span> </div><div class="flex items-center gap-4"> <div class="p-6 rounded-lg bg-zinc-600"></div> <span class="text-sm text-base-500">Zinc 600 </span> </div><div class="flex items-center gap-4"> <div class="p-6 rounded-lg bg-zinc-700"></div> <span class="text-sm text-base-500">Zinc 700 </span> </div><div class="flex items-center gap-4"> <div class="p-6 rounded-lg bg-zinc-800"></div> <span class="text-sm text-base-500">Zinc 800 </span> </div><div class="flex items-center gap-4"> <div class="p-6 rounded-lg bg-zinc-900"></div> <span class="text-sm text-base-500">Zinc 900 </span> </div><div class="flex items-center gap-4"> <div class="p-6 rounded-lg bg-zinc-950"></div> <span class="text-sm text-base-500">Zinc 950 </span> </div> </div> </div> ` })} </section> ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/system/colors.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/system/colors.astro";
const $$url = "/system/colors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Colors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
