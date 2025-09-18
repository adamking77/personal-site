import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { a as $$Wrapper, b as $$Text, $ as $$BaseLayout } from '../../chunks/BaseLayout_DZYrKpAc.mjs';
export { renderers } from '../../renderers.mjs';

const $$Overview$1 = createComponent(($$result, $$props, $$slots) => {
  const pageSections = [
    {
      title: "Overview",
      columns: [
        {
          category: "Main Pages",
          links: [
            { text: "Home", href: "/" },
            { text: "404", href: "/404" },
            { text: "About", href: "/about" },
            { text: "Pricing", href: "/pricing" }
          ]
        },
        {
          category: "Forms",
          links: [
            { text: "Login", href: "/forms/login" },
            { text: "Sign up", href: "/forms/signup" },
            { text: "Forgot Password", href: "/forms/forgot" }
          ]
        },
        {
          category: "System",
          links: [
            { text: "Colors", href: "/system/colors" },
            { text: "Links", href: "/system/links" },
            { text: "Buttons", href: "/system/buttons" },
            { text: "Typography", href: "/system/typography" }
          ]
        },
        {
          category: "Resources",
          links: [
            { text: "Social", href: "https://x.com/lexingtonthemes" },
            {
              text: "License",
              href: "https://lexingtonthemes.com/legal/license"
            },
            {
              text: "Documentation",
              href: "https://lexingtonthemes.com/documentation/quick-start"
            }
          ]
        }
      ]
    },
    {
      title: "Content Collections",
      columns: [
        {
          category: "Blog Pages",
          links: [
            { text: "Blog home one", href: "/blog/home" },
            { text: "Blog home two", href: "/blog/home-two" },
            { text: "Blog home three", href: "/blog/home-three" },
            { text: "Blog Post", href: "/blog/posts/1" },
            { text: "Tag Index", href: "/blog/tags" },
            { text: "Tag Category", href: "/blog/tags/Development" },
            { text: "RSS", href: "/rss.xml" }
          ]
        },
        {
          category: "Utility Pages",
          links: [
            { text: "DPA", href: "/infopages/privacy" },
            { text: "Cookies", href: "/infopages/cookies" },
            { text: "Terms Of Use", href: "/infopages/terms" },
            { text: "Privacy Policy", href: "/infopages/privacy" }
          ]
        },
        {
          category: "Projects",
          links: [
            { text: "Projects", href: "/projects/home" },
            { text: "Project Details", href: "/projects/1" }
          ]
        },
        {
          category: "Store",
          links: [
            { text: "Store", href: "/store/home" },
            { text: "Product Page", href: "/store/1" }
          ]
        },
        {
          category: "Other Pages",
          links: [{ text: "Authors", href: "/authors/authors" }]
        }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section> <section> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result3) => renderTemplate`
A quick overview of all <br> pages included on Simplexity
` })} ` })} </section> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12" }, { "default": ($$result2) => renderTemplate` <div class="space-y-24"> ${pageSections.map((section) => renderTemplate`<div class="flex flex-col gap-12 border-t dark:border-white/10 border-black/10 pt-2"> ${renderComponent($$result2, "Text", $$Text, { "tag": "h3", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result3) => renderTemplate`${section.title}` })} <div class="grid grid-cols-2 gap-12 text-sm lg:grid-cols-4 md:grid-cols-3 text-zinc-500"> ${section.columns.map((column) => renderTemplate`<div class="flex flex-col gap-2"> ${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textBase", "class": "text-black dark:text-white" }, { "default": ($$result3) => renderTemplate`${column.category}` })} ${column.links.map((link) => renderTemplate`${renderComponent($$result2, "Text", $$Text, { "tag": "a", "variant": "textSM", "class": "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white font-medium", "href": link.href }, { "default": ($$result3) => renderTemplate`${link.text}` })}`)} </div>`)} </div> </div>`)} </div> ` })} </section>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/system/Overview.astro", void 0);

const $$Overview = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Overview", $$Overview$1, {})} ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/system/overview.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/system/overview.astro";
const $$url = "/system/overview";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Overview,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
