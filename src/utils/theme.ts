import { ThemeConfig } from '../types/ui';

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#005187',
    secondary: '#4a5568',
    accent: '#3182ce',
    background: '#ffffff',
    text: '#1a1a1a',
    border: '#e2e8f0'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem'
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem'
  }
};

export const getThemeValue = (theme: ThemeConfig, path: string): string => {
  return path.split('.').reduce((obj: any, key: string) => obj[key], theme);
};

export const createStyleVariants = <T extends Record<string, string>>(
  variants: T,
  theme: ThemeConfig
): T => {
  const processedVariants: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(variants)) {
    processedVariants[key] = value.replace(/theme\((.*?)\)/g, (_, path) => {
      return getThemeValue(theme, path);
    });
  }
  
  return processedVariants as T;
};