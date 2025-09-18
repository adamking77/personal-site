import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, d as renderSlot, a as renderTemplate } from './astro/server_Tp03px_G.mjs';
import 'clsx';

const $$Astro = createAstro("https://adamking.com");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const { size, variant, gapSize, class: className, href, ...rest } = Astro2.props;
  const variantClasses = {
    primary: [
      "text-white",
      "bg-black",
      "hover:bg-black/80",
      "focus:ring-white",
      "dark:text-black",
      "dark:hover:bg-black/80",
      "dark:bg-white"
    ],
    secondary: [
      "text-black",
      "bg-black/5",
      "hover:bg-black/10",
      "focus:ring-black",
      "dark:text-white",
      "dark:hover:bg-white/10",
      "dark:bg-white/10"
    ]
  };
  const sizeClasses = {
    small: ["h-6", "text-sm", "font-medium", "px-2", "py-3.5"],
    medium: ["h-8", "text-sm", "font-medium", "px-4", "py-4"]
  };
  const gapClasses = {
    small: "gap-2",
    medium: "gap-4"
  };
  const gapClass = gapClasses[gapSize] || "";
  const additionalClasses = className ? className.split(" ") : [];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "flex",
    "rounded-lg",
    "cursor-pointer",
    "items-center",
    "justify-center",
    "duration-200",
    "focus:ring-2",
    "focus:ring-offset-2",
    gapClass,
    ...variant ? variantClasses[variant] || [] : [],
    // Variant classes
    ...size ? sizeClasses[size] || [] : [],
    // Size classes
    ...additionalClasses
    // User-provided classes
  ], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["left-icon"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["right-icon"])} </a>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/elements/Link.astro", void 0);

export { $$Link as $ };
