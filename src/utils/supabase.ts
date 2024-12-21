import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveEmail(email: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('subscribers')
      .insert([{ email, subscribed_at: new Date().toISOString() }]);

    if (error) {
      if (error.code === '23505') { // Unique violation error code
        throw new Error('This email is already subscribed.');
      }
      throw new Error('Failed to save email. Please try again.');
    }
  } catch (error) {
    console.error('Error saving email:', error);
    throw error;
  }
}