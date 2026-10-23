# Design and internationalization audit — v1.2.0

## Retained improvements from v1.1.0

- Constrained and centered desktop hero layout with two responsive columns.
- A stacked, single-column hero on smaller devices.
- Responsive typography, balanced spacing, and consistent navigation alignment.
- High-contrast theme adjustments from the previous design audit.

## Changes in this revision

1. English is the default language at `/`; Spanish uses `/es/`.
2. An accessible two-option EN/ES switch is visible in the desktop and mobile navigation.
3. Project case-study URLs retain the same slug when switching language.
4. Both homepages, the four project details per locale, navigation, cards, mockups, footer, meta titles/descriptions, and accessibility labels use localized content.
5. Source folders, component names, variable names, route slug names, and project documentation use English.
6. Filter categories use stable English identifiers and translated display strings.
7. Theme preference remains independent of the language selection.

## Verified statically

- Every project slug has English and Spanish content.
- Home, project, and locale-switch URL functions are consistent.
- TypeScript definitions exist for shared projects and translations.
- Code comments outside the translation data use English.
- The ZIP is checked for integrity before delivery.

## Publication validation

- Dependency installation completed with zero reported npm vulnerabilities.
- `npm run check` passed for 17 files with zero errors, warnings, or hints.
- `npm run build` generated 11 static pages: two homepages, eight project pages, and the fallback error page.
- Generated HTML checks passed for localized document language and metadata, 20 EN/ES switch links, and 238 internal links, assets, and anchors.
- Public source inspection found no credentials or private institutional project implementations.
- The original design, translations, responsive styles, and interaction scripts were preserved.

## Validation limits

- Automated route checks do not replace testing on real mobile devices or with assistive technologies.
- External institutional websites are retained as supplied and are outside this repository's validation scope.
