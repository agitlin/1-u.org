import { b as createComponent, m as maybeRenderHead, u as unescapeHTML, i as renderTemplate } from './astro/server_BL4-wTnv.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>A remarkable day — gym, bread, cooking, errands, swimming, walking the dog through the park, assembling a hammock, hanging a seven-meter flag. Most of it done alone.</p>\n<p>Pushed the lonely thoughts to the background and focused on the work I was doing. Towards the end of the day:</p>\n<p><strong>I feel I’m the grownup everyone needs in their life. I have myself. And others have more time to grow up and become other grownups I need in my life.</strong></p>\n<hr>\n<p>The insight: <em>having yourself</em> is not consolation prize loneliness. It’s a kind of fullness. The grownup in the room doesn’t wait for others to be ready — they start, they do, they enjoy the process. And that creates the conditions where others can eventually show up.</p>\n<p>This is the Adlerian move: contribution doesn’t wait for conditions to be perfect. It is what creates the conditions.</p>";

				const frontmatter = {"title":"Being the Grownup","date":"2026-04-21","tags":["identity","resilience","sovereignty","values"],"description":"Having yourself is not a consolation prize. It's a kind of fullness."};
				const file = "/sessions/kind-gracious-gauss/mnt/1u/sites/1-u.org/src/content/articles/being-the-grownup.md";
				const url = undefined;
				function rawContent() {
					return "\nA remarkable day — gym, bread, cooking, errands, swimming, walking the dog through the park, assembling a hammock, hanging a seven-meter flag. Most of it done alone.\n\nPushed the lonely thoughts to the background and focused on the work I was doing. Towards the end of the day:\n\n**I feel I'm the grownup everyone needs in their life. I have myself. And others have more time to grow up and become other grownups I need in my life.**\n\n---\n\nThe insight: *having yourself* is not consolation prize loneliness. It's a kind of fullness. The grownup in the room doesn't wait for others to be ready — they start, they do, they enjoy the process. And that creates the conditions where others can eventually show up.\n\nThis is the Adlerian move: contribution doesn't wait for conditions to be perfect. It is what creates the conditions.\n";
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
