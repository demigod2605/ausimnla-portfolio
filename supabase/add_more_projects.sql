-- Run this in the Supabase SQL editor to add your two uploaded class
-- projects to the live `projects` table (your first schema.sql run
-- already seeded 3 placeholder rows — this just adds two more).
--
-- Tip: once you push these projects to your own GitHub, update the
-- repo_url values below (currently null) via Table Editor.

insert into public.projects (title, description, tags, repo_url, demo_url, sort_order) values
  (
    'Student Course Portal',
    'A student profile and course catalog app with add/edit/search functionality for courses, built with React and Vite.',
    array['React','Vite','Tailwind CSS'],
    null,
    null,
    4
  ),
  (
    'Contacts & Users Directory',
    'A multi-page Next.js app with a live users directory (dynamic profile routes), a contacts page, and an about page, built on the App Router.',
    array['Next.js','TypeScript','App Router'],
    null,
    null,
    5
  );
