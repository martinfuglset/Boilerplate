'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ContextMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: 'left' | 'right';
  className?: string;
  anchorRef?: React.RefObject<HTMLElement>;
}

export default function ContextMenu({
  isOpen,
  onClose,
  children,
  position = 'left',
  className = '',
  anchorRef
}: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        anchorRef?.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={menuRef}
      className={`fixed mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 p-4 space-y-2 min-w-[200px] ${className} ${
        position === 'right' ? 'right-0' : 'left-0'
      }`}
    >
      {children}
    </div>,
    document.body
  );
}