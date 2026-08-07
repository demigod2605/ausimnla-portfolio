-- Run this in the Supabase SQL editor to add your first real project.
-- Update repo_url / demo_url below once you have links (or add them
-- later directly in Table Editor -> projects).

insert into public.projects (title, description, tags, repo_url, demo_url, sort_order) values
  (
    'SPC Training Center',
    'A full-stack workforce training platform with a public site (home, about, courses, contact) and an admin dashboard featuring course management, enrollment tracking, and real-time analytics — completion rates, certification status, and department performance charts.',
    array['Next.js','TypeScript','Tailwind CSS','Supabase'],
    null,
    null,
    1
  );
