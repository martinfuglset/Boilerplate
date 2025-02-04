'use client';

import Header from '@/components/ui/Header';

export default function MeetingNotesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Header variant="h1">Møtenotater</Header>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-8">
          {/* Meeting Notes Content */}
          <div>
            <Header variant="h2" className="mb-4">Notater</Header>
            <p className="text-gray-600">Ingen møtenotater tilgjengelig</p>
          </div>
        </div>
      </div>
    </div>
  );
}