# Yemis Paredez

**Software Developer · Content Creator**

Hi, I'm Yemis. I'm a software developer from Peru, and this repository contains the source code for my personal portfolio.

I enjoy building web applications, working on practical systems, and finding better ways to solve everyday problems with software. This site is a place for me to share my work and the projects I'm developing, without mixing in private code or information that isn't mine to publish.

## My portfolio

You'll find a little about me, the technologies I work with, and selected projects. Each project has its own page, including the context, my role, and its current status. Some of my work is private, so I share the story behind it rather than the full source.

The website is available in **English** (the default) and **Spanish**. I built it with **Astro** and **TypeScript**, with a responsive layout and light/dark themes.

## Find me online

- [GitHub](https://github.com/yens10)
- [LinkedIn](https://www.linkedin.com/in/yemis-paredez)
- [Instagram](https://www.instagram.com/yemis_paredez)
- [TikTok](https://www.tiktok.com/@yemis_paredez)
- [Facebook](https://www.facebook.com/yemiseliseo.paredezquispe)

## Running the site locally

To run this portfolio on your computer, you'll need Node.js 22.22.0 or newer and npm.

```bash
git clone https://github.com/yens10/developer-portfolio.git
cd developer-portfolio
npm ci
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

- `npm run dev` starts the local development server.
- `npm run check` runs Astro and TypeScript checks.
- `npm run build` creates the production site in `dist/`.
- `npm run preview` previews the production build.

The English homepage is at `/`, and the Spanish version is at `/es/`. Project pages are available in both languages too.

## Updating my portfolio

I keep my public profile and social links in `src/data/site.ts`. The English and Spanish text lives in `src/i18n/content.ts`, and the page components are in `src/components/`. Styles are in `src/styles/global.css`.

To publish the website on a static host such as Netlify, I build the project with `npm run build` and deploy the generated `dist/` directory.

---

Thanks for stopping by.

**Yemis Paredez**
