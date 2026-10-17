import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { renderOgImage, pngResponse } from '../lib/og';

// The default preview for every page that isn't a post.
export const GET: APIRoute = async () =>
  pngResponse(await renderOgImage(site.name, `${site.role} · ${site.city}`));
