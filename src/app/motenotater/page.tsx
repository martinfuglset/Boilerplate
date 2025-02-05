'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/ui/Header';
import { MeetingNote } from '@/types/supabase';
import { getMeetingNotes } from '@/lib/dataService';

export default function MeetingNotesPage() {
  const [meetingNotes, setMeetingNotes] = useState<MeetingNote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeetingNotes = async () => {
      try {
        const notes = await getMeetingNotes();
        setMeetingNotes(notes);
      } catch (error) {
        console.error('Error fetching meeting notes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetingNotes();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Header variant="h1">Møtenotater</Header>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-8">
          {loading ? (
            <p className="text-secondary">Laster møtenotater...</p>
          ) : meetingNotes.length === 0 ? (
            <p className="text-secondary">Ingen møtenotater tilgjengelig</p>
          ) : (
            <div className="space-y-6">
              {meetingNotes.map((note) => (
                <div key={note.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <Header variant="h2" className="mb-2">{note.title}</Header>
                  <p className="text-sm text-secondary mb-2">
                    Dato: {new Date(note.meeting_date).toLocaleDateString('nb-NO')}
                  </p>
                  <p className="text-text mb-4">{note.content}</p>
                  <div className="text-sm text-secondary">
                    Deltakere: {note.participants.length} personer
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}