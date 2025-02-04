'use client';

import Header from '@/components/ui/Header';

export default function InboxPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Header variant="h1">Innboks</Header>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-8">
          {/* Inbox Content */}
          <div>
            <Header variant="h2" className="mb-4">Meldinger</Header>
            <p className="text-gray-600">Ingen nye meldinger</p>
          </div>
        </div>
      </div>
    </div>
  );
}