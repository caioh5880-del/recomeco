create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text,
  patron_saint text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.user_spiritual_stats (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  streak_days integer default 0 not null,
  completed_prayers_count integer default 0 not null,
  victories_in_battle integer default 0 not null,
  completed_trail_days integer[] default '{}' not null,
  completed_today_prayers text[] default '{}' not null,
  challenge_completed_today boolean default false not null,
  is_plus_subscriber boolean default false not null,
  last_activity_date date default current_date not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.user_favorite_prayers (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  prayer_id text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, prayer_id)
);

create table if not exists public.user_battle_logs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  moment_type text not null,
  victory boolean default true not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.user_notification_settings (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  morning_offering_enabled boolean default true not null,
  angelus_enabled boolean default true not null,
  night_examination_enabled boolean default true not null,
  reminder_time_morning text default '07:00' not null,
  reminder_time_angelus text default '12:00' not null,
  reminder_time_night text default '22:00' not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;
alter table public.user_spiritual_stats enable row level security;
alter table public.user_favorite_prayers enable row level security;
alter table public.user_battle_logs enable row level security;
alter table public.user_notification_settings enable row level security;

create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Users can view own spiritual stats" on public.user_spiritual_stats
  for select using (auth.uid() = user_id);

create policy "Users can update own spiritual stats" on public.user_spiritual_stats
  for update using (auth.uid() = user_id);

create policy "Users can insert own spiritual stats" on public.user_spiritual_stats
  for insert with check (auth.uid() = user_id);

create policy "Users can view own favorites" on public.user_favorite_prayers
  for select using (auth.uid() = user_id);

create policy "Users can insert own favorites" on public.user_favorite_prayers
  for insert with check (auth.uid() = user_id);

create policy "Users can delete own favorites" on public.user_favorite_prayers
  for delete using (auth.uid() = user_id);

create policy "Users can view own battle logs" on public.user_battle_logs
  for select using (auth.uid() = user_id);

create policy "Users can insert own battle logs" on public.user_battle_logs
  for insert with check (auth.uid() = user_id);

create policy "Users can view own notifications" on public.user_notification_settings
  for select using (auth.uid() = user_id);

create policy "Users can update own notifications" on public.user_notification_settings
  for update using (auth.uid() = user_id);

create policy "Users can insert own notifications" on public.user_notification_settings
  for insert with check (auth.uid() = user_id);

create or replace function public.delete_user_account()
returns void as $$
begin
  delete from auth.users where id = auth.uid();
end;
$$ language plpgsql security definer;

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', 'Peregrino de Maria'));

  insert into public.user_spiritual_stats (user_id)
  values (new.id);

  insert into public.user_notification_settings (user_id)
  values (new.id);

  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
