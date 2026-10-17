import { getCollection, type CollectionEntry } from 'astro:content';
import type { PostSummary } from './types';

export type Post = CollectionEntry<'posts'>;

/** Published posts, newest first. Drafts are included only in dev. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postHref(post: Post): string {
  return `/writing/${post.id}/`;
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

export function shortDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', timeZone: 'UTC' });
}
