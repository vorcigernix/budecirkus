import fs from 'fs';
import { extract_frontmatter, link_renderer } from '@sveltejs/site-kit/utils/markdown.js';
import marked from 'marked';
import { makeSlugProcessor } from '../helpers/slug';

export const SLUG_PRESERVE_UNICODE = false;
export const SLUG_SEPARATOR = '_';
const makeSlug = makeSlugProcessor(SLUG_PRESERVE_UNICODE);

export function get(req, res) {
    const file = `content/${req.params.slug}.md`;
    const match = /^(\d+-\d+-\d+)-(.+)\.md$/.exec(file);
    if (!match) throw new Error(`Invalid filename '${file}'`);

    const [, pubdate, slug] = match;

    const markdown = fs.readFileSync(`content/${file}`, 'utf-8');

    const { content, metadata } = extract_frontmatter(markdown);

    const date = new Date(`${pubdate} EDT`); // cheeky hack
    metadata.pubdate = pubdate;
    metadata.dateString = date.toDateString();

    const renderer = new marked.Renderer();

    renderer.link = link_renderer;

    renderer.heading = (text, level, rawtext) => {
        const fragment = makeSlug(rawtext);

        return `
					<h${level}>
						<span id="${fragment}" class="offset-anchor"></span>
						<a href="blog/${slug}#${fragment}" class="anchor" aria-hidden="true"></a>
						${text}
					</h${level}>`;
    };

    const html = marked(
        content.replace(/^\t+/gm, match => match.split('\t').join('  ')),
        { renderer }
    );

    return {
        html,
        metadata,
        slug
    };
}