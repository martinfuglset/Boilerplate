'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Inbox, FolderGit2, Library, Bell, Settings, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Project } from '@/types/supabase';
import { getProjects } from '@/lib/dataService';

interface NavigationMenuProps {
  isCollapsed: boolean;
}

export default function NavigationMenu({ isCollapsed }: NavigationMenuProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (item: string) => {
    setExpandedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

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
      <div className="relative">
        <div className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-primary w-full ${isCollapsed ? 'justify-center' : ''} ${pathname.startsWith('/prosjekter') ? 'bg-gray-200' : ''}`}>
          <Link href="/prosjekter" className="flex items-center flex-grow">
            <FolderGit2 className="h-6 w-6 flex-shrink-0 text-primary" />
            {!isCollapsed && (
              <span className="ml-3 transition-opacity duration-300">Prosjekter</span>
            )}
          </Link>
          {!isCollapsed && (
            <button
              onClick={() => toggleExpand('projects')}
              className="p-1 hover:bg-gray-300 rounded transition-colors"
            >
              {expandedItems.includes('projects') ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
        {!isCollapsed && expandedItems.includes('projects') && (
          <div className="ml-6 mt-1 space-y-1">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/prosjekter/${project.id}`}
                className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-primary w-full ${pathname === project.path ? 'bg-gray-200' : ''}`}
              >
                <span className="text-sm">{project.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
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