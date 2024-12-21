/*
  # Add read policy for subscribers table

  1. Changes
    - Add SELECT policy for subscribers table to allow public read access
    
  2. Security
    - Adds policy to allow anyone to read subscriber count
    - Maintains existing insert/update/delete policies
*/

CREATE POLICY "Allow public to view total subscribers"
  ON subscribers
  FOR SELECT
  TO public
  USING (true);