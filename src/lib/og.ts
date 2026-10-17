// Renders 1200×630 link-preview images at build time: an element tree → SVG (satori) → PNG (resvg).
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { site } from '../data/site';

const WIDTH = 1200;
const HEIGHT = 630;

// satori reads WOFF (not WOFF2); @fontsource ships both.
const fontDir = (pkg: string) => join(process.cwd(), 'node_modules', '@fontsource', pkg, 'files');
let fonts: Promise<{ name: string; data: Buffer; weight: 400 | 600; style: 'normal' }[]> | undefined;

function loadFonts() {
  fonts ??= Promise.all([
    readFile(join(fontDir('inter'), 'inter-latin-600-normal.woff')).then((data) => ({
      name: 'Inter',
      data,
      weight: 600 as const,
      style: 'normal' as const,
    })),
    readFile(join(fontDir('jetbrains-mono'), 'jetbrains-mono-latin-400-normal.woff')).then(
      (data) => ({ name: 'JetBrains Mono', data, weight: 400 as const, style: 'normal' as const }),
    ),
  ]);
  return fonts;
}

type Node = { type: string; props: Record<string, unknown> };
const el = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

/** Black card, white type: the AG mark, the title, then name and domain along the bottom. */
export async function renderOgImage(title: string, eyebrow?: string): Promise<Uint8Array> {
  const mono = { fontFamily: 'JetBrains Mono', fontWeight: 400 };
  const size = title.length > 70 ? 52 : title.length > 40 ? 62 : 72;

  const tree = el(
    'div',
    {
      width: WIDTH,
      height: HEIGHT,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '72px 80px',
      background: '#0a0a0a',
      color: '#f0f0f0',
      fontFamily: 'Inter',
      fontWeight: 600,
    },
    [
      el('div', { ...mono, fontSize: 28, letterSpacing: 2 }, site.initials),
      el('div', { display: 'flex', flexDirection: 'column', gap: 24 }, [
        ...(eyebrow ? [el('div', { ...mono, fontSize: 24, color: '#9c9c9c' }, eyebrow)] : []),
        el('div', { fontSize: size, lineHeight: 1.1, letterSpacing: -2 }, title),
      ]),
      el(
        'div',
        {
          ...mono,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 24,
          color: '#9c9c9c',
          borderTop: '1px solid #2a2a2a',
          paddingTop: 28,
        },
        [el('div', {}, site.name), el('div', {}, new URL(site.url).host)],
      ),
    ],
  );

  const svg = await satori(tree as never, { width: WIDTH, height: HEIGHT, fonts: await loadFonts() });
  return new Uint8Array(new Resvg(svg).render().asPng());
}

/** Copies the PNG into a plain ArrayBuffer, which every Response type accepts. */
export function pngResponse(png: Uint8Array): Response {
  const body = new ArrayBuffer(png.byteLength);
  new Uint8Array(body).set(png);
  return new Response(body, { headers: { 'Content-Type': 'image/png' } });
}
