// Interface text in both languages, plus helpers for localized paths, dates and numbers.
// English lives at the root; Spanish lives under /es/. Spanish copy is Rioplatense (voseo).

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export interface Strings {
  languageName: string;
  languageGroup: string;
  writing: string;
  home: string;
  light: string;
  dark: string;
  /** Toggle names start with the visible word, so voice control users can say what they see. */
  lightActive: string;
  darkActive: string;
  latestWriting: string;
  allWriting: string;
  noPosts: string;
  projects: string;
  allRepos: string;
  activity: string;
  contributions: string;
  heatmapLabel: (total: string) => string;
  less: string;
  more: string;
  work: string;
  now: string;
  contact: string;
  writingDescription: string;
  writingLead: string;
  posts: (n: number) => string;
  draft: string;
  draftNotice: string;
  minRead: (n: number) => string;
  replyOnX: string;
  feedTitle: string;
}

export const ui: Record<Locale, Strings> = {
  en: {
    languageName: 'English',
    languageGroup: 'Language',
    writing: 'Writing',
    home: 'Home',
    light: 'Light',
    dark: 'Dark',
    lightActive: 'Light, switch to dark theme',
    darkActive: 'Dark, switch to light theme',
    latestWriting: 'Latest writing',
    allWriting: 'All writing',
    noPosts: 'Nothing published yet. The first post is on its way.',
    projects: 'Projects',
    allRepos: 'All repositories on GitHub',
    activity: 'Activity',
    contributions: 'contributions in the last year',
    heatmapLabel: (total) => `Contribution heatmap for the last year: ${total} contributions`,
    less: 'Less',
    more: 'More',
    work: 'Work',
    now: 'now',
    contact: 'Contact',
    writingDescription: 'Reflections and technical notes by Augusto Giavedoni.',
    writingLead: 'Reflections and technical notes, newest first.',
    posts: (n) => `${n} ${n === 1 ? 'post' : 'posts'}`,
    draft: 'draft',
    draftNotice: 'draft, not published',
    minRead: (n) => `${n} min read`,
    replyOnX: 'Reply on X',
    feedTitle: 'Writing',
  },
  es: {
    languageName: 'Español',
    languageGroup: 'Idioma',
    writing: 'Escritos',
    home: 'Inicio',
    light: 'Claro',
    dark: 'Oscuro',
    lightActive: 'Claro, cambiar a tema oscuro',
    darkActive: 'Oscuro, cambiar a tema claro',
    latestWriting: 'Últimos escritos',
    allWriting: 'Todos los escritos',
    noPosts: 'Todavía no hay publicaciones. La primera está en camino.',
    projects: 'Proyectos',
    allRepos: 'Todos los repositorios en GitHub',
    activity: 'Actividad',
    contributions: 'contribuciones en el último año',
    heatmapLabel: (total) => `Mapa de contribuciones del último año: ${total} contribuciones`,
    less: 'Menos',
    more: 'Más',
    work: 'Experiencia',
    now: 'actual',
    contact: 'Contacto',
    writingDescription: 'Reflexiones y notas técnicas de Augusto Giavedoni.',
    writingLead: 'Reflexiones y notas técnicas, de la más reciente a la más antigua.',
    posts: (n) => `${n} ${n === 1 ? 'artículo' : 'artículos'}`,
    draft: 'borrador',
    draftNotice: 'borrador, no publicado',
    minRead: (n) => `${n} min de lectura`,
    replyOnX: 'Responder en X',
    feedTitle: 'Escritos',
  },
};

export const t = (locale: Locale): Strings => ui[locale];

/** `/writing/` → `/es/writing/` for Spanish; unchanged for English. Takes a path without a locale prefix. */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean === '/' ? '/' : clean}`;
}

/** Splits `/es/writing/` into `{ locale: 'es', path: '/writing/' }`. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const match = pathname.match(/^\/(es)(\/.*)?$/);
  if (match) return { locale: 'es', path: match[2] || '/' };
  return { locale: defaultLocale, path: pathname || '/' };
}

const intlLocale: Record<Locale, string> = { en: 'en-US', es: 'es-AR' };

export const formatNumber = (n: number, locale: Locale) => n.toLocaleString(intlLocale[locale]);

/** "Oct 02" or "02 oct". Dates are stored at UTC midnight, so format in UTC. */
export function formatShortDate(date: Date, locale: Locale): string {
  const month = date
    .toLocaleDateString(intlLocale[locale], { month: 'short', timeZone: 'UTC' })
    .replace('.', '');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return locale === 'es' ? `${day} ${month}` : `${month} ${day}`;
}
