import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per post in src/content/posts/. The file name becomes the URL.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    lang: z.enum(['en', 'es']).default('en'),
    // Drafts render in `npm run dev` only; production builds leave them out.
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
