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
| `src/data/site.ts` | Name, bio, links, work history, projects. Edit copy here. |
| `src/styles/tokens.css` | Colours, fonts and spacing for both themes |
| `src/layouts/Base.astro` | Page shell, metadata and the no-flash theme script |
| `src/pages/` | One file per route |
| `public/` | Files served as-is (photo, favicon) |

## Rules for a public repo

- Secrets go in Cloudflare or GitHub secret settings, never in a file. `.env*` is ignored.
- Drafts live in `drafts/` (ignored) until they're published, because Git history is public.
- Only small, metadata-free image exports go in `public/`. Raw photos are ignored.

## License

Code: MIT. Posts and images: all rights reserved. See [LICENSE](LICENSE).
