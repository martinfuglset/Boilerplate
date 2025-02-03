'use client';

import { ReactNode, useState } from 'react';
import { TooltipPosition } from '../../types/ui';
import { defaultTheme, createStyleVariants } from '../../utils/theme';

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: TooltipPosition;
}

export default function Tooltip({ children, content, position = 'top' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2'
  };

  const tooltipStyles = createStyleVariants({
    base: `px-2 py-1 text-sm text-theme(colors.background) bg-theme(colors.primary) rounded pointer-events-none whitespace-nowrap`
  }, defaultTheme);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div
          className={`absolute ${positions[position]} z-10 ${tooltipStyles.base}`}
        >
          {content}
        </div>
      )}
      {children}
    </div>
  );
}