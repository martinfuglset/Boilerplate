import { supabase } from './supabase';
import { User, Project, Document, MeetingNote, Notification } from '../types/supabase';

export const getUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
};

export const getProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase.from('projects').select('*');
  if (error) throw error;
  return data;
};

export const getDocuments = async (): Promise<Document[]> => {
  const { data, error } = await supabase.from('documents').select('*');
  if (error) throw error;
  return data;
};

export const getMeetingNotes = async (): Promise<MeetingNote[]> => {
  const { data, error } = await supabase.from('meeting_notes').select('*');
  if (error) throw error;
  return data;
};

export const getNotifications = async (userId: string): Promise<Notification[]> => {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId);
  if (error) throw error;
  return data;
};