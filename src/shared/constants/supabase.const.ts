import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zwedjyxmkektxyjxeajy.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3ZWRqeXhta2VrdHh5anhlYWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwMDQ3NTUsImV4cCI6MjAzNTU4MDc1NX0.E8vqWuTnqb4a4m-Dc5TM5ykEWO7pzMGzQjvqnvuqKMU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
