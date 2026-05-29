import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Just got a 1-u.org domain.</p>\n<p><strong>One you.</strong> A simple yet powerful idea of shifting one’s attention to one’s health, wealth, and purpose — and using it to have the drive, power and presence to make lasting and positive contribution in the world.</p>\n<p>The name says it all: there is only one you. The work of attending to that one person — yourself — is not selfish. It is the prerequisite for everything else. You cannot pour from an empty cup. You cannot contribute from a depleted self.</p>\n<p>Health → Wealth → Purpose → Contribution.</p>\n<p>The domain is the container. The site, the community, the content — all to be built around this axis.</p>";

				const frontmatter = {"title":"One You","date":"2026-05-15","tags":["identity","purpose","health","philosophy"],"description":"There is only one you. The work of attending to that person is not selfishness — it is the prerequisite for everything else."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/1-u.org/src/content/articles/one-you.md";
				const url = undefined;
				function rawContent() {
					return "\nJust got a 1-u.org domain.\n\n**One you.** A simple yet powerful idea of shifting one's attention to one's health, wealth, and purpose — and using it to have the drive, power and presence to make lasting and positive contribution in the world.\n\nThe name says it all: there is only one you. The work of attending to that one person — yourself — is not selfish. It is the prerequisite for everything else. You cannot pour from an empty cup. You cannot contribute from a depleted self.\n\nHealth → Wealth → Purpose → Contribution.\n\nThe domain is the container. The site, the community, the content — all to be built around this axis.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
