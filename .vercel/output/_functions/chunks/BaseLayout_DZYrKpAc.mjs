import { b as createAstro, c as createComponent, e as addAttribute, a as renderTemplate, g as renderScript, r as renderComponent, m as maybeRenderHead, d as renderSlot, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, s as spreadAttributes, k as renderHead } from './astro/server_Tp03px_G.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from './path_mk0j0CbE.mjs';
import { V as VALID_INPUT_FORMATS } from './consts_BmVDRGlB.mjs';
import * as devalue from 'devalue';
import { marked } from 'marked';

const $$Astro$3 = createAstro("https://adamking.com");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title = "Adam King",
    description = "Personal website and blog of Adam King",
    image = "https://adamking.com/og-image.jpg",
    canonical = "https://adamking.com",
    noindex = false
  } = Astro2.props;
  const fullTitle = title === "Adam King" ? title : `${title} | Adam King`;
  return renderTemplate`<!-- Primary Meta Tags --><title>${fullTitle}</title><meta name="title"${addAttribute(fullTitle, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonical, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"${addAttribute(fullTitle, "content")}><meta property="og:site_name" content="Adam King"><meta property="og:locale" content="en_US"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonical, "content")}><meta property="twitter:title"${addAttribute(fullTitle, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><meta property="twitter:creator" content="@adamking77"><meta property="twitter:site" content="@adamking77"><!-- Additional SEO --><meta name="robots"${addAttribute(noindex ? "noindex, nofollow" : "index, follow", "content")}><meta name="googlebot"${addAttribute(noindex ? "noindex, nofollow" : "index, follow", "content")}><meta name="theme-color" content="#ededed"><meta name="color-scheme" content="light dark">`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/head/Seo.astro", void 0);

const $$Meta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Meta Tags --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Adam King</title><meta name="description" content="Personal website and blog of Adam King"><meta name="keywords" content="Adam King, Developer, Blog"><meta name="author" content="Adam King"><!-- Theme Color for Mobile Browsers --><meta name="theme-color" content="#ffffff"><!-- For IE --><meta http-equiv="X-UA-Compatible" content="IE=edge">`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/head/Meta.astro", void 0);

const $$Fonts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Lexend Font from Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap" rel="stylesheet">`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/head/Fonts.astro", void 0);

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Favicons --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest"><!-- Favicon for IE --><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"><!-- Favicons for different sizes --><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"><!-- Apple Touch Icon (for backwards compatibility) --><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/head/Favicons.astro", void 0);

const $$FuseJS = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- FuseJS: https://fusejs.io/ -->${renderScript($$result, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/scripts/FuseJS.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/scripts/FuseJS.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$AlpineJS = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Alpine Js: Alpinejs.dev --><script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script>'])));
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/scripts/AlpineJS.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ToggleLocalStorage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script>\n    (function () {\n      // Get the saved theme from localStorage or system preference\n      const theme =\n        localStorage.getItem("theme") ||\n        (window.matchMedia("(prefers-color-scheme: dark)").matches\n          ? "dark"\n          : "light");\n  \n      // Apply the theme immediately\n      document.documentElement.classList.toggle("dark", theme === "dark");\n  \n      // Set the toggle state correctly based on the theme\n      const toggle = document.getElementById("theme-toggle");\n      toggle.setAttribute("aria-checked", theme === "dark" ? "true" : "false");\n    })();\n  <\/script>'])));
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/scripts/ToggleLocalStorage.astro", void 0);

const $$ScrollAnimations = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/scripts/ScrollAnimations.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/scripts/ScrollAnimations.astro", void 0);

const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Seo", $$Seo, {})} ${renderComponent($$result, "Meta", $$Meta, {})} ${renderComponent($$result, "Fonts", $$Fonts, {})} ${renderComponent($$result, "Favicons", $$Favicons, {})} ${renderComponent($$result, "FuseJS", $$FuseJS, {})} ${renderComponent($$result, "AlpineJS", $$AlpineJS, {})} ${renderComponent($$result, "ToggleLocalStorage", $$ToggleLocalStorage, {})} ${renderComponent($$result, "ScrollAnimations", $$ScrollAnimations, {})}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/head/BaseHead.astro", void 0);

const $$Astro$2 = createAstro("https://adamking.com");
const $$Wrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Wrapper;
  const { variant = "standard", class: extraClass = "" } = Astro2.props;
  const variantClasses = {
    // All purpose wrapper
    standard: "max-w-2xl 2xl:max-w-3xl mx-auto px-8 w-full",
    // Wrapper for prose blocks
    prose: "dark:text-zinc-400 prose-ul:text-zinc-500 prose max-w-3xl pt-0 mx-auto prose-a:text-black dark:prose-a:text-white prose-p:text-zinc-500 dark:prose-p:text-zinc-400 prose-code:text-black dark:prose-code:text-white prose-strong:text-black dark:prose-strong:text-white prose-ol:text-zinc-500 dark:prose-ol:text-zinc-400 prose-headings:text-black dark:prose-headings:text-white prose-headings:text-base text-sm"
  };
  const classes = `${variantClasses[variant]} ${extraClass}`.trim();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/containers/Wrapper.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_CTY_FqQc.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://adamking.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  maxAge: z.number().optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_DmtU3mcL.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const [footer] = await getCollection("footer");
  return renderTemplate`${maybeRenderHead()}<footer class="py-12"> ${renderComponent($$result, "Wrapper", $$Wrapper, { "variant": "standard" }, { "default": async ($$result2) => renderTemplate` <div class="space-y-8"> <p class="text-sm text-[var(--color-text)]">${footer.data.copyright}</p> <p class="text-sm text-[var(--color-text)]"> <span>${unescapeHTML(marked.parse(footer.data.lexendText))}</span> </p> </div> ` })} </footer>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/global/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://adamking.com");
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Text;
  const textStyles = {
    display6XL: "text-5xl leading-tight tracking-tight sm:text-8xl md:text-[10rem] lg:text-[13rem]",
    display5XL: "text-5xl leading-tight tracking-tight sm:text-8xl md:text-9xl lg:text-[12rem]",
    display4XL: "text-5xl leading-tight tracking-tight sm:text-8xl md:text-9xl lg:text-10xl",
    display3XL: "text-5xl leading-tight tracking-tight sm:text-7xl md:text-8xl lg:text-9xl",
    display2XL: "text-6xl leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl",
    displayXL: "text-4xl leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl",
    displayLG: "text-4xl leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl",
    displayMD: "text-3xl leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl",
    displaySM: "text-xl leading-tight sm:text-2xl md:text-3xl lg:text-4xl",
    displayXS: "text-lg leading-tight sm:text-xl md:text-2xl lg:text-3xl",
    textXL: "text-lg sm:text-xl md:text-2xl",
    textLG: "text-lg sm:text-xl md:text-2xl ",
    textBase: "text-lg",
    textSM: "text-base ",
    textXS: "text-sm "
  };
  const {
    tag = "p",
    // Defaults to paragraph tag
    variant = "textBase",
    // Defaults to textMD style variant
    class: className = "",
    // No additional classes by default
    ...props
    // Collect remaining props
  } = Astro2.props;
  const Tag = tag;
  const baseClasses = textStyles[variant] || textStyles.textBase;
  const linkClasses = tag === "a" ? "text-[#2c4863] underline hover:text-black dark:hover:text-white" : "";
  const combinedClasses = `${linkClasses} ${baseClasses} ${className}`.trim();
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [combinedClasses], ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["left-icon"])} ${renderSlot($$result2, $$slots["default"])} ${renderSlot($$result2, $$slots["right-icon"])} ` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/fundations/elements/Text.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Text", $$Text, { "href": "/", "tag": "a", "variant": "textBase", "title": "link to your page", "aria-label": "your label", "class": "!text-[var(--color-text)] !no-underline hover:text-black dark:hover:text-white font-medium" }, { "default": ($$result2) => renderTemplate`Adam King
` })}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/global/Logo.astro", void 0);

const $$Astro = createAstro("https://adamking.com");
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  const { class: className = "", ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(className, "class")}${spreadAttributes(rest)} role="switch" aria-checked="false" data-theme-toggle> <!-- Single SVG Icon --> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256" class="text-[var(--color-text)] size-5"> <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,16.37a86.4,86.4,0,0,1,16,3V212.67a86.4,86.4,0,0,1-16,3Zm32,9.26a87.81,87.81,0,0,1,16,10.54V195.83a87.81,87.81,0,0,1-16,10.54ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm160,50.54V77.46a87.82,87.82,0,0,1,0,101.08Z"></path> </svg> </button> ${renderScript($$result, "/Users/adamking/claude-code-projects/ak-site/src/components/assets/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/assets/ThemeToggle.astro", void 0);

const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const [navigation] = await getCollection("navigation");
  const links = navigation?.data.links || [];
  return renderTemplate`${maybeRenderHead()}<header class="bg-[var(--color-white)]"> ${renderComponent($$result, "Wrapper", $$Wrapper, { "class": "pt-14" }, { "default": async ($$result2) => renderTemplate` <div class="flex flex-row items-center justify-between w-full"> ${renderComponent($$result2, "Logo", $$Logo, {})} <div class="ml-auto flex items-center gap-4"> ${links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} class="text-sm hover:underline">${renderComponent($$result2, "Text", $$Text, {}, { "default": async ($$result3) => renderTemplate`${link.text}` })}</a>`)} ${renderComponent($$result2, "ThemeToggle", $$ThemeToggle, {})} </div> </div> ` })} </header>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/components/global/Navigation.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}${renderHead()}</head> <body class="flex flex-col min-h-svh"> ${renderComponent($$result, "Navigation", $$Navigation, {})} <main class="grow">${renderSlot($$result, $$slots["default"])}</main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/adamking/claude-code-projects/ak-site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Wrapper as a, $$Text as b, getCollection as g };
