'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/ui/Header';
import { Notification } from '@/types/supabase';
import { getNotifications } from '@/lib/dataService';
import { supabase } from '@/lib/supabase';

export default function InboxPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Development mode: bypass authentication
        const isDevelopment = process.env.NODE_ENV === 'development';
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user && !isDevelopment) {
          setError('Please sign in to view your notifications');
          return;
        }
        
        // In development, use a mock user ID if not authenticated
        const userId = isDevelopment ? 'dev-user-id' : (user?.id || 'dev-user-id');

        const data = await getNotifications(userId);
        setNotifications(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setError('Failed to load notifications. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      fetchNotifications();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Header variant="h1">Innboks</Header>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Header variant="h1">Innboks</Header>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-8">
          {loading ? (
            <p className="text-secondary">Laster meldinger...</p>
          ) : notifications.length === 0 ? (
            <p className="text-secondary">Ingen nye meldinger</p>
          ) : (
            <div className="space-y-6">
              {notifications.map((notification) => (
                <div key={notification.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <Header variant="h2" className="mb-2">{notification.title}</Header>
                  <p className="text-text mb-4">{notification.message}</p>
                  <div className="text-sm text-secondary">
                    Mottatt: {new Date(notification.created_at).toLocaleDateString('nb-NO')}
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