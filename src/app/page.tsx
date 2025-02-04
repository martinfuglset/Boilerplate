'use client';

import Link from 'next/link';
import Header from '@/components/ui/Header';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Header variant="h1" className="text-gray-900">Hjem</Header>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/innboks" className="block">
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Innboks</h2>
            <p className="text-3xl font-semibold text-gray-700 font-mono">0</p>
            <p className="text-sm text-gray-500 mt-2">Nye meldinger</p>
          </div>
        </Link>
        <Link href="/prosjekter" className="block">
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Prosjekter</h2>
            <p className="text-3xl font-semibold text-gray-700 font-mono">0</p>
            <p className="text-sm text-gray-500 mt-2">Aktive prosjekter</p>
          </div>
        </Link>
        <Link href="/bibliotek" className="block">
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Bibliotek</h2>
            <p className="text-3xl font-semibold text-gray-700 font-mono">0</p>
            <p className="text-sm text-gray-500 mt-2">Dokumenter</p>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/aktuelt" className="block">
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Aktuelt</h2>
            <p className="text-sm text-gray-600">Siste oppdateringer</p>
            <p className="text-sm text-blue-600 mt-4">Se alle oppdateringer →</p>
          </div>
        </Link>
        <Link href="/admin" className="block">
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Admin</h2>
            <p className="text-sm text-gray-600">Systemstatus</p>
            <p className="text-sm text-green-600 mt-4">Alle systemer operative</p>
          </div>
        </Link>
        <Link href="/motenotater" className="block">
          <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Møtenotater</h2>
            <p className="text-sm text-gray-600">Siste møter</p>
            <p className="text-sm text-blue-600 mt-4">Se alle notater →</p>
          </div>
        </Link>
      </div>
    </div>
  );
}