// Theme configuration types
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type Size = 'sm' | 'md' | 'lg';
export type HeaderVariant = 'h1' | 'h2' | 'h3' | 'h4';
export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

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
  typography: {
    fontWeights: {
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
    };
    sizes: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
    };
  };
}

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

export const theme: ThemeConfig = {
  colors: {
    primary: 'rgb(var(--color-primary))',
    secondary: 'rgb(var(--color-secondary))',
    accent: 'rgb(var(--color-accent))',
    background: 'rgb(var(--color-background))',
    text: 'rgb(var(--color-text))',
    border: 'rgb(var(--color-border))'
  },
  borderRadius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)'
  },
  spacing: {
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)'
  },
  typography: {
    fontWeights: {
      normal: 'var(--font-weight-normal)',
      medium: 'var(--font-weight-medium)',
      semibold: 'var(--font-weight-semibold)',
      bold: 'var(--font-weight-bold)'
    },
    sizes: {
      h1: 'var(--font-size-h1)',
      h2: 'var(--font-size-h2)',
      h3: 'var(--font-size-h3)',
      h4: 'var(--font-size-h4)'
    }
  }
};