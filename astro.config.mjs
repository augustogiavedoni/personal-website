// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://augustogiavedoni.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  markdown: {
    // The design keeps code black and white: no syntax colours.
    syntaxHighlight: false,
  },
});
