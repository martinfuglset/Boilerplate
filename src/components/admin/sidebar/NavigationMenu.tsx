'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Inbox, FolderGit2, Library, Bell, Settings, FileText } from 'lucide-react';

interface NavigationMenuProps {
  isCollapsed: boolean;
}

export default function NavigationMenu({ isCollapsed }: NavigationMenuProps) {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      <Link
        href="/"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-primary w-full ${isCollapsed ? 'justify-center' : ''} ${pathname === '/' ? 'bg-gray-200' : ''}`}
      >
        <Home className="h-6 w-6 flex-shrink-0 text-primary" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Hjem</span>
      </Link>
      <Link
        href="/innboks"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-primary w-full ${isCollapsed ? 'justify-center' : ''} ${pathname === '/innboks' ? 'bg-gray-200' : ''}`}
      >
        <Inbox className="h-6 w-6 flex-shrink-0" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Innboks</span>
      </Link>
      <Link
        href="/prosjekter"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-primary w-full ${isCollapsed ? 'justify-center' : ''} ${pathname === '/prosjekter' ? 'bg-gray-200' : ''}`}
      >
        <FolderGit2 className="h-6 w-6 flex-shrink-0 text-primary" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Prosjekter</span>
      </Link>
      <Link
        href="/bibliotek"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-primary w-full ${isCollapsed ? 'justify-center' : ''} ${pathname === '/bibliotek' ? 'bg-gray-200' : ''}`}
      >
        <Library className="h-6 w-6 flex-shrink-0 text-primary" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Sentralt bibliotek</span>
      </Link>
      <Link
        href="/aktuelt"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-primary w-full ${isCollapsed ? 'justify-center' : ''} ${pathname === '/aktuelt' ? 'bg-gray-200' : ''}`}
      >
        <Bell className="h-6 w-6 flex-shrink-0 text-primary" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Aktuelt</span>
      </Link>
      <Link
        href="/admin"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-primary w-full ${isCollapsed ? 'justify-center' : ''} ${pathname === '/admin' ? 'bg-gray-200' : ''}`}
      >
        <Settings className="h-6 w-6 flex-shrink-0 text-primary" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Admin</span>
      </Link>
      <Link
        href="/motenotater"
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-primary w-full ${isCollapsed ? 'justify-center' : ''} ${pathname === '/motenotater' ? 'bg-gray-200' : ''}`}
      >
        <FileText className="h-6 w-6 flex-shrink-0 text-primary" />
        <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'}`}>Møtenotater</span>
      </Link>
    </nav>
  );
}