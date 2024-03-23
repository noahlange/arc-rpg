import { basename, resolve } from "node:path";
import * as os from "node:os";
import * as fs from "node:fs";

import SVGIcons2SVGFontStream from "svgicons2svgfont";
import globber from "fast-glob";
import svg2ttf from "svg2ttf";

const paths = {
	glob: resolve(__dirname, "./**/*.svg"),
	ttf: resolve(__dirname, "../arc.ttf"),
	tmp: resolve(os.tmpdir(), "./font.svg"),
};

(async () => {
	const write = fs.createWriteStream(paths.tmp, "utf8");
	const stream = new SVGIcons2SVGFontStream({ fontName: "arc" });
	const files = await globber(paths.glob, { stats: false });

	await new Promise((done) => {
		stream.pipe(write);
		for (const file of files) {
			// files are named `${char}-${name}.svg`
			const [char, name] = basename(file, ".svg").split("-");
			const glyph = fs.createReadStream(file) as fs.ReadStream & { metadata: any };
			glyph.metadata = { unicode: [JSON.parse(`"\\u${char}"`)], name };
			stream.write(glyph);
		}
		stream.end();
		write.on("finish", done);
	});

	const tmp = fs.readFileSync(paths.tmp, "utf8");
	const ttf = svg2ttf(tmp).buffer;

	fs.writeFileSync(paths.ttf, ttf);
	fs.rmSync(paths.tmp);
})();
