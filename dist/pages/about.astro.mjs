import { b as createComponent, r as renderComponent, i as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BEQuM_bF.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About", "description": "About 1-u.org \u2014 the One You project." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="prose"> <div class="article-header"> <h1>About</h1> </div> <p>There is only one you.</p> <p>Not a role. Not a title. Not a relationship. One person — with a body, a history, a set of values, a hunger for meaning, and a finite amount of time.</p> <p>The work of attending to that one person is not selfishness. It is the prerequisite for everything else. You cannot pour from an empty cup. You cannot contribute from a depleted self.</p> <p>1-u.org is a site about that work. It takes Alfred Adler's ideas seriously — that we are social creatures, that contribution is where meaning lives, that courage is the engine — and asks: what does that look like for someone living now?</p> <p>The answer is not a system. It's a practice. Health → Wealth → Purpose → Contribution. Attending to yourself so that your presence in the world is a gift rather than a tax.</p> <p>The writing here comes from journals, morning walks, late-night notes, and hard-won clarity. It's for people who are done waiting to feel ready before they start living.</p> </article> ` })}`;
}, "/sessions/kind-gracious-gauss/mnt/1u/sites/1-u.org/src/pages/about.astro", void 0);

const $$file = "/sessions/kind-gracious-gauss/mnt/1u/sites/1-u.org/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
