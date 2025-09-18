import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { a as $$Wrapper, b as $$Text, $ as $$BaseLayout } from '../../chunks/BaseLayout_BqvvlpEb.mjs';
import { $ as $$Button } from '../../chunks/Button_DdE7ujd6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Login$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result3) => renderTemplate`
Log in to your account
` })} ` })} ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12" }, { "default": ($$result2) => renderTemplate` <form class="border-t dark:border-white/10 border-black/10 pt-2" action="#" method="POST"> <div class="grid grid-cols-1 gap-2 md:grid-cols-3"> <div> <label for="email" class="sr-only">Email address</label> <div> <input id="email" name="email" type="email" autocomplete="email" placeholder="email@example.com" aria-placeholder="email@example.com" required class="block w-full rounded-lg border h-8 dark:bg-white/5 border-black/10 px-4 py-2 font-spline text-sm font-medium text-zinc-800 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 lg:px-6 focus:ring-zinc-600/50 disabled:opacity-50"> </div> </div> <div> <label for="password" class="sr-only">Password</label> <div> <input id="password" name="password" type="password" autocomplete="current-password" placeholder="your password" aria-placeholder="your password" required class="block w-full rounded-lg border h-8 dark:bg-white/5 border-black/10 px-4 py-2 font-spline text-sm font-medium text-zinc-800 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 lg:px-6 focus:ring-zinc-600/50 disabled:opacity-50"> </div> </div> ${renderComponent($$result2, "Button", $$Button, { "size": "medium", "variant": "primary" }, { "default": ($$result3) => renderTemplate`Sign in` })} </div> <div class="flex items-center justify-between mt-2"> <div class="flex items-center"> <input id="remember-me" name="remember-me" type="checkbox" class="size-4 rounded-full focus:ring-zinc-600 border-black/10 dark:bg-white/10 dark:border-white/30 text-black dark:text-white"> <label for="remember-me" class="ml-2 block text-sm font-medium text-black dark:text-white">Remember me</label> </div> ${renderComponent($$result2, "Text", $$Text, { "tag": "a", "variant": "textSM", "href": "/forgot", "title": "link to your page", "aria-label": "your label", "class": "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white font-medium" }, { "default": ($$result3) => renderTemplate`Forgot your password?
` })} </div> </form> ` })} </section>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/forms/Login.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Login", $$Login$1, {})} ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/forms/login.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/forms/login.astro";
const $$url = "/forms/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
