import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Tp03px_G.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Wrapper, b as $$Text } from '../chunks/BaseLayout_DZYrKpAc.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "pt-12 lg:py-32 xl:py-54" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textLG", "class": "text-black dark:text-white font-medium" }, { "default": ($$result4) => renderTemplate`
About
` })} ` })} ${renderComponent($$result2, "Wrapper", $$Wrapper, { "variant": "standard", "class": "py-12" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Text", $$Text, { "tag": "h1", "variant": "textLG", "class": "text-black dark:text-white font-medium mb-4" }, { "default": ($$result4) => renderTemplate`
Simplexiy
` })} <div class="border-t dark:border-white/10 border-black/10 pt-2"> ${renderComponent($$result3, "Text", $$Text, { "tag": "p", "variant": "textSM", "class": "2xl:text-base mt-8 dark:text-zinc-400 text-zinc-500" }, { "default": ($$result4) => renderTemplate`
Now, this is a story all about how My life got flipped-turned upside
          down And I'd like to take a minute Just sit right there I'll tell you
          how I became the prince of a town called Bel-Air
<br> <br>
In West Philadelphia born and raised On the playground was where I spent
          most of my days Chillin' out, maxin', relaxin', all cool And all shootin'
          some b-ball outside of the school When a couple of guys who were up to
          no good Started making trouble in my neighborhood I got in one little fight
          and my mom got scared She said, "You're movin' with your auntie and uncle
          in Bel-Air"
<br> <br>
I begged and pleaded with her day after day But she packed my suitcase
          and sent me on my way She gave me a kiss and then she gave me my ticket
          I put my Walkman on and said, "I might as well kick it"
<br> <br>
But wait, I hear they're prissy, bourgeois, all that Is this the type of
          place that they just send this cool cat? I don't think so I'll see when
          I get there I hope they're prepared for the prince of Bel-Air
<br> <br>
Well, the plane landed and when I came out There was a dude who looked
          like a cop standing there with my name out I ain't trying to get arrested
          yet, I just got here I sprang with the quickness like lightning, disappeared
          I whistled for a cab and when it came near The license plate said, "Fresh"
          and it had dice in the mirror If anything I could say that this cab was
          rare But I thought "Nah, forget it, yo, holmes to Bel Air"
` })} </div> ` })} </section> ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/pages/about.astro", void 0);

const $$file = "/Users/adamking/claude-code-projects/ak-site/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
