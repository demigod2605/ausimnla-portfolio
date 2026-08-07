# ausimnla — portfolio

Full-stack portfolio site. Next.js (App Router) + React + Tailwind CSS on the
frontend, Supabase (Postgres + RLS) for projects data and contact-form
submissions.

Design: dark and scientific — deep-void background with a faint
blueprint grid, hairline-bordered panels with corner brackets, cyan/amber/
violet glow accents, monospace data-readout labels, and a scrolling
telemetry-style skills marquee.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **React 18**
- **Tailwind CSS**
- **Supabase** — `projects` table powers the Projects section, `messages`
  table stores contact form submissions

## 1. Install dependencies

This project's dependencies were not installed in the environment that
generated it (no network access there). On your own machine:

```bash
cd ausimnla-portfolio
npm install
```

## 2. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. In the Supabase dashboard, open **SQL Editor** → **New query**, paste the
   contents of `supabase/schema.sql`, and run it. This creates the
   `projects` and `messages` tables with row-level security already
   configured:
   - `projects` — publicly readable (for the portfolio page)
   - `messages` — public can only INSERT (submit the contact form), not
     read; view submissions yourself in **Table Editor**
3. In **Project Settings → API**, copy your **Project URL** and
   **publishable key**.

## 3. Configure environment variables

This zip already has a `.env.local` filled in with your project's real
values. If you ever need to redo it (new project, rotated key):

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

Until these are set, the Projects section falls back to placeholder data and
the contact form will show an error — the site still runs fine for local
UI work.

## 4. Run it locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 5. Deploy to Vercel

**Option A — via GitHub (recommended):**

1. Create a new repo on [GitHub](https://github.com/new) and push this
   project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
   (`.env.local` is already excluded via `.gitignore`, so your key won't be
   committed.)
2. Go to [vercel.com/new](https://vercel.com/new) and import that repo.
   Vercel auto-detects Next.js — no build settings to change.
3. Before the first deploy, expand **Environment Variables** and add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   (same values as your local `.env.local`)
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in about a minute.

**Option B — via the Vercel CLI:**

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts (link to a new project, accept the detected Next.js
settings), then when asked, add the same two env vars — or add them anytime
after in the Vercel dashboard under **Project Settings → Environment
Variables**, then redeploy.

**Custom domain:** once deployed, add one under **Project Settings →
Domains** in the Vercel dashboard.

A `vercel.json` is included with the framework/build settings pre-filled,
so both options above should "just work" with zero extra configuration.

## 6. Add your two uploaded projects to Supabase

Your Projects section already shows "Student Course Portal" and "Contacts &
Users Directory" as fallback data even without Supabase. To make them show
up from your actual database (so you can edit/reorder them later in Table
Editor), run `supabase/add_more_projects.sql` in the Supabase SQL Editor —
same process as before (paste it in, click Run).

If you push those two projects to their own GitHub repos later, update
their `repo_url` (and `demo_url`, if you deploy them separately) directly
in Table Editor → `projects`.

## 7. Customize

- **Content**: `components/Hero.tsx`, `About.tsx`, `Skills.tsx` — swap in
  your real bio, stack, and copy.
- **Projects**: edit rows directly in Supabase (Table Editor → `projects`),
  or re-run part of `supabase/schema.sql` with your own project data.
- **Colors/fonts**: `tailwind.config.ts` (`coral`, `yellow`, `teal`, `cream`,
  `ink`, etc.) and `app/layout.tsx` (fonts).

## Project structure

```
app/
  layout.tsx          root layout, fonts, metadata
  page.tsx             composes all sections
  globals.css          Tailwind + playful-theme styles
  api/contact/route.ts POST handler → inserts into Supabase `messages`
components/
  StickerCard.tsx       reusable bordered/shadowed card (signature element)
  Navbar.tsx  Hero.tsx  About.tsx  Projects.tsx  Skills.tsx  Contact.tsx  Footer.tsx
lib/
  supabaseClient.ts     Supabase client (publishable key, RLS-protected)
  types.ts              shared TS types
supabase/
  schema.sql            tables + RLS policies + optional seed data
vercel.json              Vercel build/framework config
```
