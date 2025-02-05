'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/ui/Header';
import { Document } from '@/types/supabase';
import { getDocuments } from '@/lib/dataService';

export default function LibraryPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const data = await getDocuments();
        setDocuments(data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Header variant="h1">Sentralt bibliotek</Header>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-8">
          {loading ? (
            <p className="text-secondary">Laster dokumenter...</p>
          ) : documents.length === 0 ? (
            <p className="text-secondary">Ingen dokumenter tilgjengelig</p>
          ) : (
            <div className="space-y-6">
              {documents.map((document) => (
                <div key={document.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <Header variant="h2" className="mb-2">{document.title}</Header>
                  <p className="text-text mb-4">{document.description}</p>
                  <div className="text-sm text-secondary">
                    Type: {document.type} | Sist oppdatert: {new Date(document.updated_at).toLocaleDateString('nb-NO')}
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