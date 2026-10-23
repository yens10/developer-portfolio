/** Public profile links and identity. Content translations live in src/i18n/content.ts. */
export const site = {
  name: 'Yems',
  brand: 'YEMS',
  email: '', // Add a real public email address to enable email contact actions.
  github: 'https://github.com/yens10',
  linkedin: '', // Optional public LinkedIn URL.
  resume: '', // Optional file stored in public/, e.g. '/resume.pdf'.
} as const;

export type ProjectCategory = 'institutional' | 'product' | 'concept';
export type Project = {
  slug: string;
  order: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  category: ProjectCategory;
  status: string;
  period: string;
  role: string;
  stack: string[];
  tone: 'lime' | 'sky' | 'violet' | 'coral';
  url?: string;
  challenge: string;
  approach: string;
  contribution: string;
  caveat: string;
};

/** Stable IDs shared by both translated routes. */
export const projectSlugs = [
  'workflow-platform',
  'municipal-portal',
  'personal-finance',
  'loan-tracker',
] as const;
