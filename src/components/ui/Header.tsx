import { HTMLAttributes, forwardRef } from 'react';
import { HeaderVariant } from '../../types/ui';
import { defaultTheme, createStyleVariants } from '../../utils/theme';

type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4';

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: HeaderVariant;
  weight?: FontWeight;
}

const Header = forwardRef<HTMLHeadingElement, HeaderProps>((
  { className = '', variant = 'h1', weight = 'normal', children, ...props },
  ref
) => {
  const baseStyles = `text-theme(colors.text)`;
  
  const variants = createStyleVariants({
    h1: 'text-4xl lg:text-5xl',
    h2: 'text-3xl lg:text-4xl',
    h3: 'text-2xl lg:text-3xl',
    h4: 'text-xl lg:text-2xl'
  }, defaultTheme);

  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  } as const;

  const Tag = variant as HeadingElement;

  return (
    <Tag
      className={`${baseStyles} ${variants[variant]} ${weights[weight as keyof typeof weights]} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </Tag>
  );
});

Header.displayName = 'Header';

export default Header;