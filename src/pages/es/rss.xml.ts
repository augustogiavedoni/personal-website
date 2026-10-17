import type { APIRoute } from 'astro';
import { feedResponse } from '../../lib/rss';

export const GET: APIRoute = ({ site }) => feedResponse('es', site);
