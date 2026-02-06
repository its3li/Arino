/*
  # Create Arino Website Tables

  ## Overview
  This migration creates the necessary tables for the Arino website including projects portfolio and contact form submissions.

  ## New Tables
  
  ### `projects`
  Portfolio/project showcase table
  - `id` (uuid, primary key) - Unique project identifier
  - `title` (text) - Project title
  - `title_ar` (text) - Arabic project title
  - `description` (text) - Project description
  - `description_ar` (text) - Arabic project description
  - `category` (text) - Project category for filtering
  - `image_url` (text) - Project thumbnail image URL
  - `project_url` (text, nullable) - Link to live project or case study
  - `featured` (boolean) - Whether project is featured
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Record creation timestamp

  ### `contact_submissions`
  Contact form submissions table
  - `id` (uuid, primary key) - Unique submission identifier
  - `name` (text) - Sender name
  - `email` (text) - Sender email
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Submission timestamp
  - `read` (boolean) - Whether submission has been read

  ## Security
  - Enable RLS on both tables
  - Projects: Public read access, authenticated insert/update
  - Contact submissions: Public insert access, authenticated read access
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  title_ar text NOT NULL,
  description text NOT NULL,
  description_ar text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  project_url text,
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);