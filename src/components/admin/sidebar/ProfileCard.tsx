'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface ProfileCardProps {
  isCollapsed: boolean;
}

export default function ProfileCard({ isCollapsed }: ProfileCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div 
        className={`flex items-center w-full cursor-pointer transition-all hover:bg-gray-200 p-2 rounded-lg group ${isCollapsed ? 'justify-center' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`flex items-center ${isCollapsed ? 'w-full justify-center' : 'flex-grow'}`}>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex-shrink-0 group-hover:ring-2 ring-gray-400 transition-all"></div>
          {!isCollapsed && (
            <div className="ml-3 text-gray-900 font-medium truncate max-w-[120px]">
              Name Nameson
            </div>
          )}
        </div>
        {!isCollapsed && <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors" />}
      </div>

      {isOpen && (
        <div 
          className={`absolute mt-2 bg-gray-900 rounded-lg shadow-lg border border-gray-800 overflow-hidden z-20 ${isCollapsed ? 'left-full ml-2' : 'left-0 right-0'}`}
        >
          <Link
            href="/settings"
            className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors whitespace-nowrap"
            onClick={() => setIsOpen(false)}
          >
            Settings
          </Link>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors whitespace-nowrap"
            onClick={() => {
              setIsOpen(false);
              // Add logout logic here
            }}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}