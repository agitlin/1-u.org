import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>I want the life of truth, not the life of convenience.</p>\n<p>The word <em>bashert</em> (destined, meant to be) provides a harder and more meaningful alternative to life of convenience. My understanding of the concept helps me aim higher.</p>\n<p>Someone recently shared that his marriage is ending. Even though his wife initiated the divorce, she is having cold feet. The difference is the word <em>bashert</em> — aiming higher creates a harder, more meaningful pull that keeps people from settling for the easy exit.</p>\n<p>This applies beyond marriage. In any commitment — to a person, a project, a set of values — the question is whether you chose it because it was convenient or because you meant it.</p>\n<p>The life of convenience is available at all times. The life of truth requires courage to keep choosing it, especially when the convenient exit is right there.</p>\n<p>I want a life of purpose at work, at home and in between. I don’t want to be wasting more days.</p>";

				const frontmatter = {"title":"Bashert — The Life of Truth, Not Convenience","date":"2026-01-25","tags":["values","courage","identity","philosophy"],"description":"The word 'bashert' provides a harder and more meaningful alternative to a life of convenience. Aiming higher creates a pull that keeps you from settling for the easy exit."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/1-u.org/src/content/articles/bashert.md";
				const url = undefined;
				function rawContent() {
					return "\nI want the life of truth, not the life of convenience.\n\nThe word *bashert* (destined, meant to be) provides a harder and more meaningful alternative to life of convenience. My understanding of the concept helps me aim higher.\n\nSomeone recently shared that his marriage is ending. Even though his wife initiated the divorce, she is having cold feet. The difference is the word *bashert* — aiming higher creates a harder, more meaningful pull that keeps people from settling for the easy exit.\n\nThis applies beyond marriage. In any commitment — to a person, a project, a set of values — the question is whether you chose it because it was convenient or because you meant it.\n\nThe life of convenience is available at all times. The life of truth requires courage to keep choosing it, especially when the convenient exit is right there.\n\nI want a life of purpose at work, at home and in between. I don't want to be wasting more days.\n";
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
