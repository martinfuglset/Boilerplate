'use client';

import { useState } from 'react';
import ProfileCard from './sidebar/ProfileCard';
import NavigationMenu from './sidebar/NavigationMenu';
import SidebarToggle from './sidebar/SidebarToggle';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} bg-gray-100 p-4 space-y-6 transition-all duration-300 flex flex-col h-full relative overflow-hidden`}>
      <ProfileCard isCollapsed={isCollapsed} />
      <NavigationMenu isCollapsed={isCollapsed} />
      <SidebarToggle 
        isCollapsed={isCollapsed} 
        onToggle={() => setIsCollapsed(!isCollapsed)} 
      />
    </div>
  );
}