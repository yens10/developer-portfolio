<div align="center">

# Yemis Paredez

**Software Developer · Content Creator**

I'm Yemis, a developer from Peru. I enjoy building useful web applications, exploring new ideas, and sharing what I learn along the way.

<p>
  <img src="https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/English%20%7C%20Espa%C3%B1ol-2D3748?style=flat-square" alt="English and Spanish" />
</p>

</div>

---

<h2 align="center">Find me online</h2>

<p align="center">
  <a href="https://github.com/yens10" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub profile" /></a>
  <a href="https://www.linkedin.com/in/yemis-paredez" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn profile" /></a>
  <a href="https://www.instagram.com/yemis_paredez" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram profile" /></a>
  <a href="https://www.tiktok.com/@yemis_paredez" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white" alt="TikTok profile" /></a>
  <a href="https://www.facebook.com/yemiseliseo.paredezquispe" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Facebook-0866FF?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook profile" /></a>
</p>

---

## About this portfolio

This repository is the source code for my personal website. I use it to introduce myself and share projects I've worked on or am currently developing. You'll find the problem behind each project, the approach I took, and its current stage.

Some projects involve private or institutional work. I describe my contributions without publishing their source code or confidential information.

The website uses **Astro** and **TypeScript**, works on desktop and mobile, and includes **light/dark themes**. English is the default language; Spanish is available at `/es/`. Project pages are available in both languages.

<details>
<summary><strong>Run the portfolio locally</strong></summary>

<br />

You'll need Node.js **22.22.0 or newer** and npm.

```bash
git clone https://github.com/yens10/developer-portfolio.git
cd developer-portfolio
npm ci
npm run dev
```

Open `http://localhost:4321/` in your browser.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run check` | Check Astro components and TypeScript |
| `npm run build` | Build the static site in `dist/` |
| `npm run preview` | Preview the production build |

</details>

<details>
<summary><strong>How the portfolio is organized</strong></summary>

<br />

- `src/data/site.ts` — my public profile and social links
- `src/i18n/content.ts` — English and Spanish website content
- `src/components/` — reusable page components
- `src/pages/` — pages and localized project routes
- `src/styles/global.css` — responsive styles and themes

The site builds to `dist/` for static hosting, including Netlify.

</details>

---

<p align="center"><sub>Made by Yemis Paredez · Peru</sub></p>
