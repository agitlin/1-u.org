import { b as createComponent, r as renderComponent, i as renderTemplate, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BEQuM_bF.mjs';
import { $ as $$TagCloud } from '../chunks/TagCloud_Bv7IdbAA.mjs';
import { g as getCollection } from '../chunks/_astro_content_DD0hPq5h.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const articles = (await getCollection("articles")).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()).slice(0, 5);
  const allArticles = await getCollection("articles");
  const tagCounts = {};
  allArticles.forEach((a) => a.data.tags.forEach((t) => {
    tagCounts[t] = (tagCounts[t] || 0) + 1;
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "One You" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hero"> <h1>One You.</h1> <p>A modern Adlerian take on attending to yourself — health, wealth, and purpose — so you can contribute from a full cup.</p> </div> <section style="margin-bottom: 2.5rem;"> <h2 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); margin-bottom: 1rem;">Explore by topic</h2> ${renderComponent($$result2, "TagCloud", $$TagCloud, { "tags": tagCounts })} </section> <section> <h2 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); margin-bottom: 1rem;">Recent writing</h2> <ul class="article-list"> ${articles.map((article) => renderTemplate`<li class="article-item"> <h2><a${addAttribute(`/articles/${article.slug}`, "href")}>${article.data.title}</a></h2> <div class="article-meta">${article.data.date}</div> ${article.data.description && renderTemplate`<p class="article-desc">${article.data.description}</p>`} </li>`)} </ul> <p style="margin-top: 1.5rem;"><a href="/articles">All articles →</a></p> </section> ` })}`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/1-u.org/src/pages/index.astro", void 0);

const $$file = "/sessions/kind-gracious-gauss/mnt/1u/sites/1-u.org/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
