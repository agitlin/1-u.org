import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Almost 1 am. Writing because I feel engaged, curious, inspired, happy, excited, connected, valued, special, alive — all the ways I like to feel.</p>\n<p>My extended stretch of time when I was not working for an employer is starting to pay off. I no longer see myself as a problem to solve, as a nuisance to manage. I live my life, trust my intuition, follow my wants, tend to my needs, stick with my priorities.</p>\n<p>Because of that, time, attention, and space feel different. I connect with people differently. I pay attention. I remember things. I feel things. I get curious and go into rabbit holes — feeling the sensation of the walls of the rabbit hole on my skin while thinking of a different rabbit hole I will jump into soon enough.</p>\n<p><strong>Many tabs open in my browser and in my brain. I tend to many things and I feel good.</strong></p>\n<p>The suggested YouTube algorithm as a reflection of who you are: Claude architecture ideas, Muay Thai in Russian, procrastination help, movie trailers. A browser history that tells your story.</p>";

				const frontmatter = {"title":"Connected, Curious, Alive","date":"2026-04-16","tags":["identity","values","curiosity","philosophy"],"description":"Living from your own center: what it feels like when you stop seeing yourself as a problem to solve."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/1-u.org/src/content/articles/connected-curious-alive.md";
				const url = undefined;
				function rawContent() {
					return "\nAlmost 1 am. Writing because I feel engaged, curious, inspired, happy, excited, connected, valued, special, alive — all the ways I like to feel.\n\nMy extended stretch of time when I was not working for an employer is starting to pay off. I no longer see myself as a problem to solve, as a nuisance to manage. I live my life, trust my intuition, follow my wants, tend to my needs, stick with my priorities.\n\nBecause of that, time, attention, and space feel different. I connect with people differently. I pay attention. I remember things. I feel things. I get curious and go into rabbit holes — feeling the sensation of the walls of the rabbit hole on my skin while thinking of a different rabbit hole I will jump into soon enough.\n\n**Many tabs open in my browser and in my brain. I tend to many things and I feel good.**\n\nThe suggested YouTube algorithm as a reflection of who you are: Claude architecture ideas, Muay Thai in Russian, procrastination help, movie trailers. A browser history that tells your story.\n";
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
