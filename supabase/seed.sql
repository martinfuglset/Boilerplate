-- Seed file for initial data

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Clear existing data
TRUNCATE users, projects, documents, meeting_notes, notifications CASCADE;

-- Insert sample users
INSERT INTO users (id, email, full_name, avatar_url, created_at)
VALUES 
  (uuid_generate_v4(), 'ole.hansen@example.com', 'Ole Hansen', 'https://api.dicebear.com/7.x/initials/svg?seed=Ole Hansen', NOW()),
  (uuid_generate_v4(), 'kari.larsen@example.com', 'Kari Larsen', 'https://api.dicebear.com/7.x/initials/svg?seed=Kari Larsen', NOW()),
  (uuid_generate_v4(), 'erik.olsen@example.com', 'Erik Olsen', 'https://api.dicebear.com/7.x/initials/svg?seed=Erik Olsen', NOW());

-- Get user IDs for reference
WITH user_ids AS (
  SELECT id FROM users
)
-- Insert sample projects
INSERT INTO projects (id, title, description, status, owner_id, created_at, updated_at)
SELECT 
  uuid_generate_v4(),
  'Prosjekt Digitalisering',
  'Implementering av nye digitale løsninger',
  'active',
  id,
  NOW(),
  NOW()
FROM users
LIMIT 1;

-- Insert sample documents
INSERT INTO documents (id, title, content, category, author_id, created_at, updated_at)
SELECT 
  uuid_generate_v4(),
  'Dokument: Kvalitetssikring',
  'Kvalitetssikring av eksisterende systemer',
  'rapport',
  id,
  NOW(),
  NOW()
FROM users
LIMIT 1;

-- Insert sample meeting notes
INSERT INTO meeting_notes (id, title, content, meeting_date, participants, author_id, created_at, updated_at)
SELECT 
  uuid_generate_v4(),
  'Møte: Prosjektgjennomgang',
  'Diskusjon av fremdrift og milepæler',
  NOW(),
  ARRAY(SELECT id FROM users LIMIT 2),
  id,
  NOW(),
  NOW()
FROM users
LIMIT 1;

-- Insert sample notifications
INSERT INTO notifications (id, user_id, title, message, type, read, created_at)
SELECT
  uuid_generate_v4(),
  id,
  'Ny oppdatering',
  'Du har fått en ny melding i innboksen din',
  'info',
  false,
  NOW()
FROM users;