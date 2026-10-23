export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** English uses the root; Spanish is always prefixed with /es/. */
export function homePath(locale: Locale): string {
  return locale === 'es' ? '/es/' : '/';
}

export function projectPath(locale: Locale, slug: string): string {
  return `${homePath(locale)}projects/${encodeURIComponent(slug)}/`;
}
