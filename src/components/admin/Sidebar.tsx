'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Home, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} bg-gray-100 p-4 space-y-6 transition-all duration-300 flex flex-col h-full relative`}>
      <div className="relative w-full">
        <div 
          className="flex items-center justify-between w-full cursor-pointer transition-colors hover:bg-gray-200 p-2 rounded-lg group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex-shrink-0 group-hover:ring-2 ring-gray-400 transition-all"></div>
            {!isCollapsed && (
              <div className="ml-3 text-gray-900 font-medium">Name Nameson</div>
            )}
          </div>
          {!isCollapsed && (
            <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors" />
          )}
        </div>

        {isOpen && (
          <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-10">
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Profile & Settings
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>
          </div>
        )}
      </div>
      <nav className="space-y-2">
        <Link
          href="/"
          className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-gray-700 ${isCollapsed ? 'justify-center' : ''}`}
        >
          <Home className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Home</span>}
        </Link>
      </nav>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute bottom-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
      >
        {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
      </button>
    </div>
  );
}