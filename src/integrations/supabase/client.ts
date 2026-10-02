import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eaoymhmrjgiaiawgntmw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhb3ltaG1yamdpYWlhd2dudG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNDA2NzgsImV4cCI6MjA5ODkxNjY3OH0.N21oToh8BHaLJ_M5f9vB9tFNnrEwcXabOlqB5CP_l3g';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Type helpers for database
export type Profile = {
  id: string;
  full_name: string;
  role: 'client' | 'provider';
  category?: string;
  bio?: string;
  is_accepting_projects?: boolean;
  created_at: string;
};

export type Booking = {
  id: string;
  client_id: string;
  provider_id: string;
  booking_date: string;
  booking_time: string;
  message?: string;
  status: 'pending' | 'accepted' | 'declined';
  created_at: string;
};
