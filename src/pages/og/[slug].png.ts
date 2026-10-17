import type { APIRoute } from 'astro';
import { getPosts, isoDate, type Post } from '../../lib/posts';
import { renderOgImage, pngResponse } from '../../lib/og';

export async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: Post };
  return pngResponse(await renderOgImage(post.data.title, isoDate(post.data.date)));
};
