import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>From a letter to a dog trainer — but the insight applies well beyond dog training:</p>\n<blockquote>\n<p>You mentioned that when one is tired the dog feels it and decides that no one is in charge, so he needs to manage the situation. At the beginning of the day things are much better, partially because I am full of energy. My workday is quite intense, so at the end of it when I need to walk the dog, I feel tired, stressed and a bit off-balance. Life happens and it’s non-negotiable. This is a big one for me.</p>\n<p><strong>To give the performance of my life in front of the dog, pretending I’m not tired when I actually am tired — is not easy.</strong></p>\n</blockquote>\n<p>The dog doesn’t care about your reasons. He reads your state. If you’re off-center, he fills the vacuum.</p>\n<p>This is true with dogs, with children, with teams, with clients. Leadership is not about pretending you’re not tired. It’s about finding the grounded, present part of yourself that still exists underneath the tiredness — and leading from there.</p>\n<p>The energy management question: how do you preserve enough centered presence for the moments that require it most, when those moments come at the end of a full day?</p>";

				const frontmatter = {"title":"On Performing When Tired","date":"2026-05-11","tags":["resilience","values","energy","leadership"],"description":"The dog doesn't care about your reasons. He reads your state. Leadership is finding the grounded part of yourself that still exists underneath the tiredness."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/1-u.org/src/content/articles/on-performing-when-tired.md";
				const url = undefined;
				function rawContent() {
					return "\nFrom a letter to a dog trainer — but the insight applies well beyond dog training:\n\n> You mentioned that when one is tired the dog feels it and decides that no one is in charge, so he needs to manage the situation. At the beginning of the day things are much better, partially because I am full of energy. My workday is quite intense, so at the end of it when I need to walk the dog, I feel tired, stressed and a bit off-balance. Life happens and it's non-negotiable. This is a big one for me.\n>\n> **To give the performance of my life in front of the dog, pretending I'm not tired when I actually am tired — is not easy.**\n\nThe dog doesn't care about your reasons. He reads your state. If you're off-center, he fills the vacuum.\n\nThis is true with dogs, with children, with teams, with clients. Leadership is not about pretending you're not tired. It's about finding the grounded, present part of yourself that still exists underneath the tiredness — and leading from there.\n\nThe energy management question: how do you preserve enough centered presence for the moments that require it most, when those moments come at the end of a full day?\n";
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
