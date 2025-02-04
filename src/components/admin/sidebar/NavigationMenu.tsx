'use client';

import Link from 'next/link';
import { Home, Inbox, FolderGit2, Library, Bell, Settings, FileText } from 'lucide-react';

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
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Hjem</span>
      </Link>
      <Link
        href="/innboks"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-gray-700 w-full ${isCollapsed ? 'justify-center' : ''}`}
      >
        <Inbox className="h-6 w-6 flex-shrink-0" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Innboks</span>
      </Link>
      <Link
        href="/prosjekter"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-gray-700 w-full ${isCollapsed ? 'justify-center' : ''}`}
      >
        <FolderGit2 className="h-6 w-6 flex-shrink-0" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Prosjekter</span>
      </Link>
      <Link
        href="/bibliotek"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-gray-700 w-full ${isCollapsed ? 'justify-center' : ''}`}
      >
        <Library className="h-6 w-6 flex-shrink-0" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Sentralt bibliotek</span>
      </Link>
      <Link
        href="/aktuelt"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-gray-700 w-full ${isCollapsed ? 'justify-center' : ''}`}
      >
        <Bell className="h-6 w-6 flex-shrink-0" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Aktuelt</span>
      </Link>
      <Link
        href="/admin"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-gray-700 w-full ${isCollapsed ? 'justify-center' : ''}`}
      >
        <Settings className="h-6 w-6 flex-shrink-0" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Admin</span>
      </Link>
      <Link
        href="/motenotater"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-gray-700 w-full ${isCollapsed ? 'justify-center' : ''}`}
      >
        <FileText className="h-6 w-6 flex-shrink-0" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Møtenotater</span>
      </Link>
    </nav>
  );
}