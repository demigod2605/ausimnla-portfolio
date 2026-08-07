# ausimnla — portfolio

Static portfolio site. Next.js (App Router, static export) + React + Tailwind
CSS. No database, no API routes — everything is rendered at build time into
plain HTML/CSS/JS, so it can be hosted anywhere (Vercel, GitHub Pages, Netlify).

Design: dark and scientific — deep-void background with a faint
blueprint grid, hairline-bordered panels with corner brackets, cyan/amber/
violet glow accents, monospace data-readout labels, and a scrolling
telemetry-style skills marquee.

## Stack

- **Next.js 14** (App Router, TypeScript, static export via `output: "export"`)
- **React 18**
- **Tailwind CSS**

## 1. Install dependencies

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 3. Build the static site

```bash
npm run build
```

This produces a fully static site in the `out/` directory that you can deploy
to any static host.

## 4. Deploy

**Vercel:**

```bash
npm i -g vercel
vercel login
vercel
```

Vercel auto-detects Next.js and serves the static export — no environment
variables or build settings needed.

**GitHub Pages / Netlify / any static host:**

Deploy the contents of the `out/` directory.

## 5. Customize

- **Content**: `components/Hero.tsx`, `About.tsx`, `Skills.tsx` — swap in
  your real bio, stack, and copy.
- **Projects**: edit the static array in `lib/projects.ts` (title,
  description, tags, `repo_url`, `demo_url`, `sort_order`).
- **Contact**: update the email address in `components/Contact.tsx`.
- **Colors/fonts**: `tailwind.config.ts` and `app/layout.tsx` (fonts).

## Project structure

```
app/
  layout.tsx          root layout, fonts, metadata
  page.tsx             composes all sections
  globals.css          Tailwind + theme styles
components/
  Panel.tsx            reusable bordered panel (signature element)
  Navbar.tsx  Hero.tsx  About.tsx  Education.tsx  Projects.tsx  Skills.tsx  Contact.tsx  Footer.tsx
lib/
  projects.ts          static project data (edit here)
  types.ts             shared TS types
next.config.mjs         Next.js config (static export)
vercel.json              Vercel build/framework config
```
