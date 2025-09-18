import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, e as addAttribute } from '../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { a as $$Wrapper, b as $$Text, $ as $$BaseLayout } from '../chunks/BaseLayout_DZYrKpAc.mjs';
import { $ as $$Button } from '../chunks/Button_DdE7ujd6.mjs';
export { renderers } from '../renderers.mjs';

const pricingPlans = [
  {
    duration: "12 Months",
    price: {
      monthly: "$29.00",
      annual: "$19.00"
    },
    description: "Subscribe and enjoy our newsletter for 12 months",
    features: ["Unlimited Articles", "Zero Advertising", "No card required"],
    button: {
      text: "Subscribe",
      href: "#_",
      variant: "secondary"
    }
  },
  {
    duration: "6 Months",
    price: {
      monthly: "$39.00",
      annual: "$29.00"
    },
    description: "Subscribe and enjoy our newsletter for 6 months",
    features: [
      "500 Articles a month",
      "Little Advertising",
      "No card required"
    ],
    button: {
      text: "Subscribe ",
      href: "#_",
      variant: "primary"
    }
  },
  {
    duration: "3 Months",
    price: {
      monthly: "$29.00",
      annual: "$19.00"
    },
    description: "Subscribe and enjoy our newsletter for 3 months",
    features: ["100 Articles a month", "Advertising", "Card required"],
    button: {
      text: "Subscribe",
      href: "#_",
      variant: "secondary"
    }
  }
];
const $$PricingTable = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Text", $$Text, { "tag": "h1", "variant": "textBase", "class": "text-black dark:text-white font-medium" }, { "default": ($$result3) => renderTemplate`
Membership
` })} <div x-data="{ duration: 'monthly' }" class="pt-2 border-t mt-24 dark:border-white/10 border-black/10 w-full"> <!-- Toggle Buttons --> <div aria-labelledby="pricing-toggle" class="w-full relative overflow-hidden justify-center gap-4 mx-auto lg:mx-0 inline-flex z-0"> <div class="absolute inset-0 bg-zinc-100 dark:bg-white/10 rounded-md transition-transform duration-200 ease-in-out h-full" x-bind:class="duration === 'monthly' ? 'w-1/2 translate-x-0' : 'w-1/2 translate-x-full'"></div> <button id="monthly-pricing-button" class="relative flex items-center cursor-pointer justify-center w-full px-2 py-2 text-sm font-medium focus:outline-none transition-colors duration-300 z-10" :class="duration === 'monthly' ? 'text-zinc-600 dark:text-white' : 'text-zinc-500 hover:text-zinc-500'" @click="duration = 'monthly'" type="button" :aria-pressed="duration === 'monthly'">
Monthly
</button> <button id="annual-pricing-button" class="relative flex items-center cursor-pointer justify-center w-full px-2 py-2 text-sm font-medium focus:outline-none transition-colors duration-300 z-10" :class="duration === 'annual' ? 'text-zinc-600 dark:text-white' : 'text-zinc-500 hover:text-zinc-500'" @click="duration = 'annual'" type="button" :aria-pressed="duration === 'annual'">
Annual
</button> </div> <!-- Pricing Cards --> <div class="grid grid-cols-1 gap-12 md:grid-cols-3 mt-8"> ${pricingPlans.map((plan) => renderTemplate`<div class="flex flex-col flex-1 h-full justify-between"${addAttribute(`{
                get currentPrice() {
                  return duration === 'monthly' ? '${plan.price.monthly}' : '${plan.price.annual}'
                }
              }`, "x-data")}> <div> ${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textBase", "class": "font-semibold flex   items-baseline   text-black dark:text-white" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "span", "variant": "textLG", "x-text": "currentPrice" })} ${renderComponent($$result3, "Text", $$Text, { "tag": "span", "class": " text-zinc-500 dark:text-zinc-400 " }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Text", $$Text, { "tag": "span", "variant": "textSM", "x-show": "duration === 'monthly'" }, { "default": ($$result5) => renderTemplate`
/month
` })} ${renderComponent($$result4, "Text", $$Text, { "tag": "span", "variant": "textSM", "x-show": "duration === 'annual'", "style": "display: none;" }, { "default": ($$result5) => renderTemplate`
/annually
` })} ` })} ` })} ${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "text-black dark:text-white font-medium mt-4" }, { "default": ($$result3) => renderTemplate`${plan.duration}` })} ${renderComponent($$result2, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "mt-2 text-zinc-500 dark:text-zinc-400" }, { "default": ($$result3) => renderTemplate`${plan.description}` })} </div> <ul class="flex flex-col list-disc list-inside mt-8 gap-1" role="list"> ${plan.features.map((feature) => renderTemplate`<li class="text-sm font-medium text-black dark:text-white "> ${feature} </li>`)} </ul> <div class="mt-6"> ${renderComponent($$result2, "Button", $$Button, { "size": "medium", "variant": "secondary", "variant": plan.button.variant, "href": plan.button.href, "title": "link to your page", "aria-label": "your label" }, { "default": ($$result3) => renderTemplate`${plan.button.text}` })} </div> </div>`)} </div> </div> ` })} </section>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/pricing/PricingTable.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PricingTable", $$PricingTable, {})} ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/pricing.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
