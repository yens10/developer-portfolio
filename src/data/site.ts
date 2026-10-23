/** Public profile links and identity. Content translations live in src/i18n/content.ts. */
export const site = {
  name: 'Yemis Paredez',
  brand: 'YEMIS',
  email: '', // Add a real public email address to enable email contact actions.
  github: 'https://github.com/yens10',
  linkedin: 'https://www.linkedin.com/in/yemis-paredez',
  instagram: 'https://www.instagram.com/yemis_paredez',
  tiktok: 'https://www.tiktok.com/@yemis_paredez',
  facebook: 'https://www.facebook.com/yemiseliseo.paredezquispe',
  resume: '', // Optional file stored in public/, e.g. '/resume.pdf'.
} as const;

export const socialLinks = [
  { name: 'GitHub', href: site.github },
  { name: 'LinkedIn', href: site.linkedin },
  { name: 'Instagram', href: site.instagram },
  { name: 'TikTok', href: site.tiktok },
  { name: 'Facebook', href: site.facebook },
] as const;

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
