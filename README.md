# Developer Portfolio

Bilingual developer portfolio built with Astro and TypeScript. Responsive design with English and Spanish support.

The portfolio presents Yems's selected work, technical expertise, experience, and contact links. It generates static HTML and preserves the original responsive layout, project illustrations, light/dark themes, and progressive enhancements.

## Requirements

- Node.js 22.22.0 or newer, using a supported even-numbered release
- npm

## Getting started

```sh
git clone https://github.com/yens10/developer-portfolio.git
cd developer-portfolio
npm ci
npm run dev
```

Open `http://localhost:4321/`. On Windows, use `npm.cmd` if PowerShell blocks the npm script; no execution-policy changes are necessary.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Validate Astro components and TypeScript |
| `npm run build` | Generate the production website in `dist/` |
| `npm run preview` | Preview the production build locally |

The committed `package-lock.json` records the dependency versions. Use `npm ci` for reproducible installations.

## Languages and navigation

English is the default language. Selecting Spanish does not redirect subsequent visits to English URLs.

| Route | Content |
| --- | --- |
| `/` | English homepage |
| `/es/` | Spanish homepage |
| `/projects/<slug>/` | English project case study |
| `/es/projects/<slug>/` | Spanish project case study |
| `/404.html` | English fallback error page |

The four project slugs are `workflow-platform`, `municipal-portal`, `personal-finance`, and `loan-tracker`. The EN/ES switch uses ordinary links and preserves the current project slug. Document language, metadata, navigation, and accessibility labels follow the selected locale. Theme preference is stored independently in browser local storage.

## Project structure

```text
developer-portfolio/
  public/                 Static favicon and robots.txt
  src/
    components/           Shared homepage, header, footer, and project views
    data/site.ts          Public profile settings and shared project types
    i18n/config.ts        Locale definitions and URL helpers
    i18n/content.ts       English and Spanish content
    layouts/              Shared document layout and metadata
    pages/                Homepage, project, Spanish, and error routes
    scripts/ui.ts         Theme, menu, filters, scroll, and clipboard behavior
    styles/global.css     Responsive styles and themes
  astro.config.mjs
  package.json
  package-lock.json
  tsconfig.json
```

## Updating content

- Edit `src/data/site.ts` to configure public profile links. Email, LinkedIn, and resume are intentionally empty; their actions appear only when configured. GitHub is the contact fallback.
- Edit both locales in `src/i18n/content.ts` when adding or updating user-facing content. Keep property names, slugs, filenames, comments, and technical documentation in English.
- Add each new project slug to `projectSlugs` in `src/data/site.ts` and provide its content in both languages.
- Place an optional public resume at `public/resume.pdf`, then set `site.resume` to `/resume.pdf`.
- Update `src/styles/global.css` for presentation changes.

## Deployment

Build with `npm run build` and publish `dist/` to a static host. No backend, database, API key, or environment variable is required. Google Fonts is loaded externally, with local font fallbacks.

The existing routes and assets assume hosting at a domain root. A GitHub repository alone does not deploy the website. Hosting under a subdirectory, including GitHub Pages at `/developer-portfolio/`, requires configuring Astro's base path and updating root-relative navigation and assets before deployment.

## Public content and security

Institutional projects are described as portfolio case studies. Their private source code and internal data are not included. Project card illustrations use sample data. External institutional website links are retained from the original portfolio.

Do not commit secrets or private materials. `.gitignore` excludes dependencies, generated output, environment files, common credential files, local npm configuration, logs, and archives. Review any future additions before publishing.
