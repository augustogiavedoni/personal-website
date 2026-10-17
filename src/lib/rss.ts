// A hand-written RSS 2.0 feed per language, so the site needs no extra package for it.
import { site, about } from '../data/site';
import { localizePath, t, type Locale } from '../i18n';
import { getPosts, postHref } from './posts';

const escape = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function feedResponse(locale: Locale, origin: URL | undefined): Promise<Response> {
  const base = origin ?? new URL(site.url);
  const posts = (await getPosts(locale)).filter((post) => !post.data.draft);
  const home = new URL(localizePath('/', locale), base).href;
  const self = new URL(localizePath('/rss.xml', locale), base).href;

  const items = posts
    .map((post) => {
      const link = new URL(postHref(post), base).href;
      return `    <item>
      <title>${escape(post.data.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escape(post.data.description)}</description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(site.name)} · ${escape(t(locale).feedTitle)}</title>
    <link>${home}</link>
    <description>${escape(about[locale].description)}</description>
    <language>${locale}</language>
    <atom:link href="${self}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
