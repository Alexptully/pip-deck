/**
 * Folds the static export into one self-contained HTML file (dist/pip-deck.html),
 * so the deck can be hosted anywhere a single page can live. Run via `npm run build:single`.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const OUT = resolve("out");
const DIST = resolve("dist");

const MIME = { ".woff2": "font/woff2", ".woff": "font/woff", ".svg": "image/svg+xml", ".png": "image/png" };

function readAsset(publicPath) {
  return readFileSync(join(OUT, publicPath.replace(/^\//, "")));
}

function toDataUri(filePath) {
  const extension = filePath.slice(filePath.lastIndexOf("."));
  const type = MIME[extension] ?? "application/octet-stream";
  return `data:${type};base64,${readFileSync(filePath).toString("base64")}`;
}

function inlineCss(publicPath) {
  const cssPath = join(OUT, publicPath.replace(/^\//, ""));
  const css = readFileSync(cssPath, "utf8");
  return css.replace(/url\(([^)]+)\)/g, (match, raw) => {
    const url = raw.replace(/["']/g, "");
    if (url.startsWith("data:") || url.startsWith("#")) return match;
    const target = url.startsWith("/") ? join(OUT, url) : resolve(dirname(cssPath), url);
    return `url(${toDataUri(target)})`;
  });
}

function safeScript(code) {
  return code.replace(/<\/script/gi, "<\\/script");
}

let html = readFileSync(join(OUT, "index.html"), "utf8");
const chunkScripts = [];
const inlinedCss = new Set();

html = html.replace(/<link rel="stylesheet" href="([^"]+)"[^>]*\/?>/g, (_, href) => {
  inlinedCss.add(href);
  return `<style>${inlineCss(href)}</style>`;
});
html = html.replace(/<link rel="(preload|preconnect|modulepreload)"[^>]*\/?>/g, "");
html = html.replace(
  /(<link rel="icon" href=")([^"?]+)(\?[^"]*)?"/g,
  (_, start, href) => `${start}${toDataUri(join(OUT, href))}"`,
);
html = html.replace(/<script src="([^"]+)"[^>]*noModule[^>]*><\/script>/gi, "");
html = html.replace(/<script src="([^"]+)"[^>]*><\/script>/g, (_, src) => {
  chunkScripts.push(`<script>${safeScript(readAsset(src).toString("utf8"))}</script>`);
  return "";
});
html = html.replace("</body>", `${chunkScripts.join("\n")}</body>`);

// The React payload still names the original files; point those at already-inlined content.
for (const href of inlinedCss) html = html.split(href).join("data:text/css,");
html = html.replace(/\/icon\.svg\?[a-z0-9]+/g, () => toDataUri(join(OUT, "icon.svg")));

mkdirSync(DIST, { recursive: true });
writeFileSync(join(DIST, "pip-deck.html"), html);
console.log(
  `Wrote dist/pip-deck.html (${(html.length / 1024).toFixed(0)} KB, ${chunkScripts.length} scripts inlined).`,
);
