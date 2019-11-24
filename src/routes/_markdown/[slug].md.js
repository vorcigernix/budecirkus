import fs from 'fs';
import send from '@polka/send';
import marked from "marked";

export function get(req, res) {

    const markdown = fs.readFileSync(`content/${req.params.slug}.md`, 'utf-8');
    const html = marked(markdown);
	send(res, 200, html, {
		'Content-Type': 'text/html'
	});

}