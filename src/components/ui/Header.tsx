import { HTMLAttributes, forwardRef } from 'react';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4';
type HeaderVariant = 'h1' | 'h2' | 'h3' | 'h4';
type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: HeaderVariant;
  weight?: FontWeight;
}

const Header = forwardRef<HTMLHeadingElement, HeaderProps>((
  { className = '', variant = 'h1', weight = 'normal', children, ...props },
  ref
) => {
  const baseStyles = 'text-gray-900';
  
  const variants = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl'
  };

  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const Tag = variant as HeadingElement;

  return (
    <Tag
      className={`${baseStyles} ${variants[variant]} ${weights[weight]} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </Tag>
  );
});

Header.displayName = 'Header';

export default Header;