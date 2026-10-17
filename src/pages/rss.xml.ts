import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { getPosts, postHref } from '../lib/posts';

// A hand-written RSS 2.0 feed, so the site needs no extra package for it.
const escape = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = async ({ site: origin }) => {
  const base = origin ?? new URL(site.url);
  const posts = (await getPosts()).filter((post) => !post.data.draft);

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
    <title>${escape(site.name)} · Writing</title>
    <link>${base.href}</link>
    <description>${escape(site.description)}</description>
    <language>en</language>
    <atom:link href="${new URL('/rss.xml', base).href}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
