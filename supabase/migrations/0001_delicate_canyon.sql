/*
  # Create subscribers table

  1. New Tables
    - `subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `subscribed_at` (timestamp)
  2. Security
    - Enable RLS on `subscribers` table
    - Add policy for inserting new subscribers
*/

CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now()
);

ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for all users"
  ON subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "No one can update subscribers"
  ON subscribers
  FOR UPDATE
  TO public
  USING (false);

CREATE POLICY "No one can delete subscribers"
  ON subscribers
  FOR DELETE
  TO public
  USING (false);