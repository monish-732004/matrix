create table if not exists public.recruits (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  reg_number text not null,
  email text not null,
  phone text not null,
  domains text[] not null default '{}',
  skills text[] not null default '{}',
  why_join text,
  why_you text,
  projects text,
  submitted_at timestamptz not null default now()
);

alter table public.recruits enable row level security;

create policy "Anyone can submit a recruitment entry"
  on public.recruits
  for insert
  to anon
  with check (true);
