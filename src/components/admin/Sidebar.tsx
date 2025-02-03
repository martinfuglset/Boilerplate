'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserIcon, TableCellsIcon, SwatchIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname?.startsWith(path);

  return (
    <aside className="w-16 bg-gray-100 border-r border-gray-200 p-2">
      <nav className="space-y-1">
        <Link
          href="/admin/auth"
          className={`group relative flex items-center justify-center p-2 rounded-md ${
            isActive('/admin/auth')
              ? 'bg-gray-200 text-gray-900'
              : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          <UserIcon className="h-6 w-6" />
          <span className="absolute left-full ml-2 w-auto min-w-max rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            Authentication
          </span>
        </Link>
        <Link
          href="/admin/database"
          className={`group relative flex items-center justify-center p-2 rounded-md ${
            isActive('/admin/database')
              ? 'bg-gray-200 text-gray-900'
              : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          <TableCellsIcon className="h-6 w-6" />
          <span className="absolute left-full ml-2 w-auto min-w-max rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            Database
          </span>
        </Link>
        <Link
          href="/admin/design"
          className={`group relative flex items-center justify-center p-2 rounded-md ${
            isActive('/admin/design')
              ? 'bg-gray-200 text-gray-900'
              : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          <SwatchIcon className="h-6 w-6" />
          <span className="absolute left-full ml-2 w-auto min-w-max rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            Design
          </span>
        </Link>
      </nav>
    </aside>
  );
}