// Everything the pages say about you lives here, so copy changes never touch layout code.

export const site = {
  name: 'Augusto Giavedoni',
  initials: 'AG',
  role: 'Mobile Architect',
  city: 'Buenos Aires',
  url: 'https://augustogiavedoni.com',
  description:
    'Augusto Giavedoni builds mobile apps and is learning cloud and AI systems, writing about it along the way.',
  bio: 'I’ve been building mobile apps for the past five years, and today I lead mobile architecture at Paigo. Now I’m learning cloud and AI systems properly, because that’s where I want my work to go, and I write here about what I learn along the way.',
  photo: { src: '/avatar.jpg', alt: 'Augusto Giavedoni', size: 72 },
} as const;

export const links = [
  { label: 'GitHub', handle: 'augustogiavedoni', href: 'https://github.com/augustogiavedoni' },
  { label: 'X', handle: '@agvdni', href: 'https://x.com/agvdni' },
  {
    label: 'LinkedIn',
    handle: 'augusto-patricio-giavedoni',
    href: 'https://www.linkedin.com/in/augusto-patricio-giavedoni',
  },
] as const;

// Newest first. `mark` is the monogram shown in place of a logo.
export const work = [
  { company: 'Paigo', title: 'Mobile Architect', start: 2026, mark: 'P', current: true },
  { company: 'Creator Exchange', title: 'Head of Engineering', start: 2024, mark: 'CE', current: false },
  { company: 'Very Good Ventures', title: 'Engineer II', start: 2022, mark: 'VGV', current: false },
  { company: 'intive', title: 'Flutter Developer', start: 2021, mark: 'IN', current: false },
] as const;

export const projects = [
  {
    name: 'Telar',
    tag: 'Pre-launch',
    href: 'https://telar.pro/en',
    description:
      'Training management for fitness coaches: routines, sessions and progress in one workspace. Launching soon.',
  },
  {
    name: 'gcp-python-api',
    tag: 'Python',
    href: 'https://github.com/augustogiavedoni/gcp-python-api',
    description:
      'A production-style FastAPI service on Google Cloud, built up step by step: containers, tests, CI/CD, logging and monitoring.',
  },
  {
    name: 'not',
    tag: 'Dart',
    href: 'https://github.com/augustogiavedoni/not',
    description:
      'A Flutter notes and to-do app built to practise Domain-Driven Design, backed by Firebase.',
  },
] as const;
