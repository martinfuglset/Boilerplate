'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';

interface NavigationMenuProps {
  isCollapsed: boolean;
}

export default function NavigationMenu({ isCollapsed }: NavigationMenuProps) {
  return (
    <nav className="space-y-2">
      <Link
        href="/"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-gray-700 w-full ${isCollapsed ? 'justify-center' : ''}`}
      >
        <Home className="h-6 w-6 flex-shrink-0" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Home</span>
      </Link>
    </nav>
  );
}