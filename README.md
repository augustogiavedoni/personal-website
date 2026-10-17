# augustogiavedoni.com

Personal site: writing, projects and work. Built with [Astro](https://astro.build), deployed to Cloudflare.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then builds to dist/
```

Needs Node 20.3 or newer (`.nvmrc` pins 22).

## Where things live

| Path | What |
| --- | --- |
| `src/data/site.ts` | Name, bio, links, work history, projects, in both languages. Edit copy here. |
| `src/i18n/index.ts` | Interface text in English and Spanish, plus path and date helpers |
| `src/views/` | Each page, written once and rendered in both languages by `src/pages/` and `src/pages/es/` |
| `src/styles/tokens.css` | Colours, fonts and spacing for both themes |
| `src/layouts/Base.astro` | Page shell, metadata and the no-flash theme script |
| `src/pages/` | One file per route |
| `public/` | Files served as-is (photo, favicon) |

## Write a post

1. Draft in `drafts/` (git-ignored, so unfinished work never reaches the public history).
2. When it's ready, move it to `src/content/posts/<url-slug>.md`. The file name becomes the URL: `/writing/<url-slug>/`.
3. Start the file with:

   ```md
   ---
   title: 'Post title'
   description: 'One or two sentences, used in search results and link previews (max 200 characters).'
   date: 2026-10-16
   ---
   ```

   Optional fields: `updated` (a date), `lang` (`en` or `es`, default `en`), `draft: true` (shows in `npm run dev` only), and `translation` (the file name of the same post in the other language, so the two link to each other).

   Spanish posts set `lang: es` and appear under `/es/writing/`. Write them in Rioplatense Spanish (voseo).

4. Check it with `npm run dev`, then commit and push. The build fails if the title, description or date is missing.

`src/content/posts/style-guide.md` is a permanent draft that shows every element a post can use.

## Deploy

Every push to `main` deploys to augustogiavedoni.com through Cloudflare Workers Builds. Other branches and pull requests get their own preview link. Settings live in `wrangler.jsonc`.

## Rules for a public repo

- Secrets go in Cloudflare or GitHub secret settings, never in a file. `.env*` is ignored.
- Drafts live in `drafts/` (ignored) until they're published, because Git history is public.
- Only small, metadata-free image exports go in `public/`. Raw photos are ignored.

## License

Code: MIT. Posts and images: all rights reserved. See [LICENSE](LICENSE).
