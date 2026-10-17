import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { localizePath, locales } from '../i18n';
import { getPosts, getTranslation, isoDate, postHref } from '../lib/posts';

// A hand-written sitemap listing every page with its language versions, so it needs no extra package.
export const GET: APIRoute = async ({ site: origin }) => {
  const base = origin ?? new URL(site.url);
  const abs = (path: string) => new URL(path, base).href;

  type Entry = { loc: string; alternates: Record<string, string>; lastmod?: string };
  const entries: Entry[] = [];

  for (const path of ['/', '/writing/']) {
    const alternates = Object.fromEntries(locales.map((code) => [code, abs(localizePath(path, code))]));
    for (const code of locales) entries.push({ loc: alternates[code], alternates });
  }

  for (const post of (await getPosts()).filter((p) => !p.data.draft)) {
    const translation = await getTranslation(post);
    const alternates: Record<string, string> = { [post.data.lang]: abs(postHref(post)) };
    if (translation) alternates[translation.data.lang] = abs(postHref(translation));
    entries.push({
      loc: abs(postHref(post)),
      alternates,
      lastmod: isoDate(post.data.updated ?? post.data.date),
    });
  }

  const body = entries
    .map(({ loc, alternates, lastmod }) => {
      const links = Object.entries(alternates)
        .map(([code, href]) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${href}" />`)
        .join('\n');
      return `  <url>
    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
${links}
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
