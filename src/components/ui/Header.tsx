import { HTMLAttributes, forwardRef } from 'react';

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const Header = forwardRef<HTMLHeadingElement, HeaderProps>((
  { className = '', variant = 'h1', weight = 'bold', children, ...props },
  ref
) => {
  const baseStyles = 'text-gray-900';
  
  const variants = {
    h1: 'text-4xl lg:text-5xl',
    h2: 'text-3xl lg:text-4xl',
    h3: 'text-2xl lg:text-3xl',
    h4: 'text-xl lg:text-2xl'
  };

  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const Component = variant;

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${weights[weight]} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
});

Header.displayName = 'Header';

export default Header;