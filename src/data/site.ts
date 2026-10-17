// Everything the pages say about you lives here, so copy changes never touch layout code.
import type { Locale } from '../i18n';

type Localized<T = string> = Record<Locale, T>;

export const site = {
  name: 'Augusto Giavedoni',
  initials: 'AG',
  role: 'Mobile Architect',
  city: 'Buenos Aires',
  url: 'https://augustogiavedoni.com',
  photo: { src: '/avatar.jpg', alt: 'Augusto Giavedoni', size: 72 },
} as const;

export const about: Localized<{ description: string; bio: string }> = {
  en: {
    description:
      'Augusto Giavedoni builds mobile apps and is learning cloud and AI systems, writing about it along the way.',
    bio: 'I’ve been building mobile apps for the past five years, and today I lead mobile architecture at Paigo. Now I’m learning cloud and AI systems properly, because that’s where I want my work to go, and I write here about what I learn along the way.',
  },
  es: {
    description:
      'Augusto Giavedoni desarrolla apps móviles y está aprendiendo sistemas cloud e IA, y escribe sobre lo que aprende en el camino.',
    bio: 'Hace cinco años que desarrollo apps móviles, y hoy lidero la arquitectura móvil en Paigo. Ahora estoy aprendiendo sistemas cloud e IA en serio, porque es hacia donde quiero llevar mi trabajo, y acá escribo sobre lo que voy aprendiendo en el camino.',
  },
};

export const links = [
  { label: 'GitHub', handle: 'augustogiavedoni', href: 'https://github.com/augustogiavedoni' },
  { label: 'X', handle: '@agvdni', href: 'https://x.com/agvdni' },
  {
    label: 'LinkedIn',
    handle: 'augusto-patricio-giavedoni',
    href: 'https://www.linkedin.com/in/augusto-patricio-giavedoni',
  },
] as const;

// Newest first. Job titles stay in English in both languages, as on LinkedIn.
export const work = [
  { company: 'Paigo', title: 'Mobile Architect', start: 2026, mark: 'P', current: true },
  { company: 'Creator Exchange', title: 'Head of Engineering', start: 2024, mark: 'CE', current: false },
  { company: 'Very Good Ventures', title: 'Engineer II', start: 2022, mark: 'VGV', current: false },
  { company: 'intive', title: 'Flutter Developer', start: 2021, mark: 'IN', current: false },
] as const;

export const projects: { name: string; href: Localized; tag: Localized; description: Localized }[] = [
  {
    name: 'Telar',
    href: { en: 'https://telar.pro/en', es: 'https://telar.pro/es' },
    tag: { en: 'Pre-launch', es: 'Próximamente' },
    description: {
      en: 'Training management for fitness coaches: routines, sessions and progress in one workspace. Launching soon.',
      es: 'Gestión de entrenamientos para profesores de fitness: rutinas, sesiones y progreso en un solo espacio de trabajo.',
    },
  },
  {
    name: 'gcp-python-api',
    href: {
      en: 'https://github.com/augustogiavedoni/gcp-python-api',
      es: 'https://github.com/augustogiavedoni/gcp-python-api',
    },
    tag: { en: 'Python', es: 'Python' },
    description: {
      en: 'A production-style FastAPI service on Google Cloud, built up step by step: containers, tests, CI/CD, logging and monitoring.',
      es: 'Un servicio FastAPI estilo producción en Google Cloud, construido paso a paso: contenedores, tests, CI/CD, logging y monitoreo.',
    },
  },
  {
    name: 'not',
    href: {
      en: 'https://github.com/augustogiavedoni/not',
      es: 'https://github.com/augustogiavedoni/not',
    },
    tag: { en: 'Dart', es: 'Dart' },
    description: {
      en: 'A Flutter notes and to-do app built to practise Domain-Driven Design, backed by Firebase.',
      es: 'Una app de notas y tareas en Flutter, hecha para practicar Domain-Driven Design, con Firebase como backend.',
    },
  },
];
