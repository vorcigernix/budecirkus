import fs from 'fs';
import send from '@polka/send';
import marked from "marked";

export function get(req, res) {

    const markdown = fs.readFileSync(`content/${req.params.slug}.md`, 'utf-8');
    const html = marked(markdown);
    //console.log(html);
	send(res, 200, html, {
		'Content-Type': 'text/html',
		'Cache-Control': `max-age=${5 * 60 * 1e3}` // 5 minutes
	});

}