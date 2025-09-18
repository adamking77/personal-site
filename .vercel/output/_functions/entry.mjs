import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_fHhFG2gw.mjs';
import { manifest } from './manifest_D-B5v2qe.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/authors/_---slug_.astro.mjs');
const _page4 = () => import('./pages/blog/home.astro.mjs');
const _page5 = () => import('./pages/blog/home-three.astro.mjs');
const _page6 = () => import('./pages/blog/home-two.astro.mjs');
const _page7 = () => import('./pages/blog/posts/_---slug_.astro.mjs');
const _page8 = () => import('./pages/blog/tags/_tag_.astro.mjs');
const _page9 = () => import('./pages/blog/tags.astro.mjs');
const _page10 = () => import('./pages/forms/forgot.astro.mjs');
const _page11 = () => import('./pages/forms/login.astro.mjs');
const _page12 = () => import('./pages/forms/signup.astro.mjs');
const _page13 = () => import('./pages/infopages/_---slug_.astro.mjs');
const _page14 = () => import('./pages/pricing.astro.mjs');
const _page15 = () => import('./pages/projects/home.astro.mjs');
const _page16 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page17 = () => import('./pages/rss.xml.astro.mjs');
const _page18 = () => import('./pages/store/home.astro.mjs');
const _page19 = () => import('./pages/store/_---slug_.astro.mjs');
const _page20 = () => import('./pages/system/buttons.astro.mjs');
const _page21 = () => import('./pages/system/colors.astro.mjs');
const _page22 = () => import('./pages/system/links.astro.mjs');
const _page23 = () => import('./pages/system/overview.astro.mjs');
const _page24 = () => import('./pages/system/typography.astro.mjs');
const _page25 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/authors/[...slug].astro", _page3],
    ["src/pages/blog/home.astro", _page4],
    ["src/pages/blog/home-three.astro", _page5],
    ["src/pages/blog/home-two.astro", _page6],
    ["src/pages/blog/posts/[...slug].astro", _page7],
    ["src/pages/blog/tags/[tag].astro", _page8],
    ["src/pages/blog/tags/index.astro", _page9],
    ["src/pages/forms/forgot.astro", _page10],
    ["src/pages/forms/login.astro", _page11],
    ["src/pages/forms/signup.astro", _page12],
    ["src/pages/infopages/[...slug].astro", _page13],
    ["src/pages/pricing.astro", _page14],
    ["src/pages/projects/home.astro", _page15],
    ["src/pages/projects/[...slug].astro", _page16],
    ["src/pages/rss.xml.js", _page17],
    ["src/pages/store/home.astro", _page18],
    ["src/pages/store/[...slug].astro", _page19],
    ["src/pages/system/buttons.astro", _page20],
    ["src/pages/system/colors.astro", _page21],
    ["src/pages/system/links.astro", _page22],
    ["src/pages/system/overview.astro", _page23],
    ["src/pages/system/typography.astro", _page24],
    ["src/pages/index.astro", _page25]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8858f0a6-3f05-454c-8fcf-cf3e164b1e02",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
