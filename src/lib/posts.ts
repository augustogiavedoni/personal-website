import { getCollection, type CollectionEntry } from 'astro:content';
import { localizePath, type Locale } from '../i18n';
import type { PostSummary } from './types';

export type Post = CollectionEntry<'posts'>;

/** Posts in one language (or all), newest first. Drafts are included only in dev. */
export async function getPosts(locale?: Locale): Promise<Post[]> {
  const posts = await getCollection(
    'posts',
    ({ data }) => (import.meta.env.DEV || !data.draft) && (!locale || data.lang === locale),
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** `/writing/<slug>/` for English posts, `/es/writing/<slug>/` for Spanish ones. */
export function postHref(post: Post): string {
  return localizePath(`/writing/${post.id}/`, post.data.lang);
}

/** The same post in the other language, if its `translation` field points to one that is published. */
export async function getTranslation(post: Post): Promise<Post | undefined> {
  if (!post.data.translation) return undefined;
  const all = await getPosts();
  return all.find((other) => other.id === post.data.translation && other.data.lang !== post.data.lang);
}

export function toSummary(post: Post): PostSummary {
  return { title: post.data.title, href: postHref(post), date: post.data.date };
}

/** Minutes to read at about 220 words per minute, never less than 1. */
export function readingTime(markdown: string | undefined): number {
  const words = (markdown ?? '')
    .replace(/```[\s\S]*?```/g, ' ') // code blocks are skimmed, not read
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** Dates are stored at UTC midnight, so format them in UTC to avoid off-by-one days. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
