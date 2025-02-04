'use client';

import Header from '@/components/ui/Header';

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Header variant="h1">Prosjekter</Header>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-8">
          {/* Projects Content */}
          <div>
            <Header variant="h2" className="mb-4">Aktive Prosjekter</Header>
            <p className="text-gray-600">Ingen aktive prosjekter</p>
          </div>
        </div>
      </div>
    </div>
  );
}