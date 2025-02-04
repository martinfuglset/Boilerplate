'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ProfileCardProps {
  isCollapsed: boolean;
}

export default function ProfileCard({ isCollapsed }: ProfileCardProps) {
  return (
    <Link href="/settings" className="block w-full">
      <div className={`flex items-center w-full cursor-pointer transition-all hover:bg-gray-200 p-2 rounded-lg group ${isCollapsed ? 'justify-center' : ''}`}>
        <div className={`flex items-center ${isCollapsed ? 'w-full justify-center' : 'flex-grow'}`}>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex-shrink-0 group-hover:ring-2 ring-gray-400 transition-all"></div>
          {!isCollapsed && (
            <div className="ml-3 text-gray-900 truncate max-w-[120px]">
              Ola Nordmann
            </div>
          )}
        </div>
        {!isCollapsed && <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors" />}
      </div>
    </Link>
  );
}