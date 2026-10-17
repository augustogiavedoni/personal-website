// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://augustogiavedoni.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    // The CSS is a few KB; inlining it saves a render-blocking round trip on slow phones.
    inlineStylesheets: 'always',
  },
  markdown: {
    // The design keeps code black and white: no syntax colours.
    syntaxHighlight: false,
  },
});
