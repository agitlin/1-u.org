import { c as createAstro, b as createComponent, a as addAttribute, f as renderHead, h as renderSlot, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://1-u.org");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "One You \u2014 health, wealth, and purpose for the modern age." } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | 1-u.org</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/styles/global.css">${renderHead()}</head> <body> <header class="site-header"> <div class="site-title"><a href="/">1-u.org</a></div> <nav> <a href="/about">About</a> <a href="/articles">Articles</a> <a href="/tags">Tags</a> </nav> </header> <main> ${renderSlot($$result, $$slots["default"])} </main> <footer class="site-footer">
© ${(/* @__PURE__ */ new Date()).getFullYear()} 1-u.org — One You
</footer> </body></html>`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/1-u.org/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
