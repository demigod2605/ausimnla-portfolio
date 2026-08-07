-- Run this in the Supabase SQL editor (Project -> SQL Editor -> New query)

-- ============ projects ============
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  tags text[] not null default '{}',
  repo_url text,
  demo_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

-- Anyone can read published projects (public portfolio)
create policy "projects are publicly readable"
  on public.projects for select
  using (true);

-- ============ messages (contact form submissions) ============
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.messages enable row level security;

-- The public (anon key) may only INSERT — not read other people's messages
create policy "anyone can submit a contact message"
  on public.messages for insert
  with check (true);

-- No select policy is created for anon, so submissions stay private to you.
-- View messages from the Supabase Table Editor (using your dashboard login),
-- which bypasses RLS.

-- ============ seed data (optional — replace with your real projects) ============
insert into public.projects (title, description, tags, repo_url, demo_url, sort_order) values
  ('Project One', 'A short description of what this project does and the problem it solves.', array['Next.js','TypeScript','Tailwind'], 'https://github.com/ausimnla', null, 1),
  ('Project Two', 'A short description of what this project does and the problem it solves.', array['React','Supabase'], 'https://github.com/ausimnla', null, 2),
  ('Project Three', 'A short description of what this project does and the problem it solves.', array['UI/UX','Figma'], 'https://github.com/ausimnla', null, 3);
