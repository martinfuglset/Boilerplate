// Common UI component types

// Shared size type used across multiple components
export type Size = 'sm' | 'md' | 'lg';

// Shared variant types
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type TableVariant = 'default' | 'striped';
export type HeaderVariant = 'h1' | 'h2' | 'h3' | 'h4';
export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

// Font weight type
export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

// Base component props interface
export interface BaseProps {
  className?: string;
}

// Theme configuration types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  border: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
  };
}