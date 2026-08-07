import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "";

// Used in both server components and client components.
// Safe to expose: this is the public/publishable key, restricted by the
// row-level security policies defined in supabase/schema.sql.
export const supabase = createClient(supabaseUrl, supabasePublishableKey);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey);
