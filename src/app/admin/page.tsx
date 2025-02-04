'use client';

import Header from '@/components/ui/Header';

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Header variant="h1">Admin</Header>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-8">
          {/* Admin Content */}
          <div>
            <Header variant="h2" className="mb-4">Administrasjon</Header>
            <p className="text-gray-600">Ingen administrative oppgaver</p>
          </div>
        </div>
      </div>
    </div>
  );
}