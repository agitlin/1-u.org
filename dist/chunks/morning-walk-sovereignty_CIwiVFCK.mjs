import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>On the morning walk, things are quite simple. I am not tempted, not intimidated, not distracted. I just am.</p>\n<p><strong>Sovereignty</strong> is probably the right word for how it feels. Putting myself first.</p>\n<p>What I feel is that I have no difficulty whatsoever to do hard things, complicated things, a lot of things — as long as I am sold on <em>why</em> I am doing them.</p>\n<p>There are so many moments in my day when I just enjoy being and doing whatever I do. And these moments don’t involve spending money. Therefore, many forced moments — related to work, or to parts of relationships that feel like useless work — seem like wasting my time.</p>\n<p>But really they are not. Both work and uncomfortable moments in relationships are there for me to endure them, grow stronger, more resilient — and as a result enjoy more of my life more often.</p>\n<p>For me, the right mindset for best work is not external pressure or external reward. It’s caring, being passionate about the cause, curious about the problem, inspired by an opportunity to make someone’s life better, and an intellectual longing to make a hairy, scary problem go away.</p>\n<p>What’s different now: I am calmer. I am not as eager to please. It’s a great feeling when your cup is full.</p>";

				const frontmatter = {"title":"Morning Walk Sovereignty","date":"2026-02-16","tags":["sovereignty","values","identity","philosophy"],"description":"Sovereignty: putting yourself first not as selfishness but as the necessary precondition for everything that follows."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/1-u.org/src/content/articles/morning-walk-sovereignty.md";
				const url = undefined;
				function rawContent() {
					return "\nOn the morning walk, things are quite simple. I am not tempted, not intimidated, not distracted. I just am.\n\n**Sovereignty** is probably the right word for how it feels. Putting myself first.\n\nWhat I feel is that I have no difficulty whatsoever to do hard things, complicated things, a lot of things — as long as I am sold on *why* I am doing them.\n\nThere are so many moments in my day when I just enjoy being and doing whatever I do. And these moments don't involve spending money. Therefore, many forced moments — related to work, or to parts of relationships that feel like useless work — seem like wasting my time.\n\nBut really they are not. Both work and uncomfortable moments in relationships are there for me to endure them, grow stronger, more resilient — and as a result enjoy more of my life more often.\n\nFor me, the right mindset for best work is not external pressure or external reward. It's caring, being passionate about the cause, curious about the problem, inspired by an opportunity to make someone's life better, and an intellectual longing to make a hairy, scary problem go away.\n\nWhat's different now: I am calmer. I am not as eager to please. It's a great feeling when your cup is full.\n";
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
