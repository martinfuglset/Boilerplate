export type User = {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  created_at: string;
};

export type Project = {
  id: string;
  name: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'on_hold';
  created_at: string;
  updated_at: string;
  owner_id: string;
};

export type Document = {
  id: string;
  title: string;
  content: string;
  category: string;
  description: string;
  type: string;
  created_at: string;
  updated_at: string;
  author_id: string;
};

export type MeetingNote = {
  id: string;
  title: string;
  content: string;
  meeting_date: string;
  participants: string[];
  created_at: string;
  updated_at: string;
  author_id: string;
};

export type Notification = {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  created_at: string;
};