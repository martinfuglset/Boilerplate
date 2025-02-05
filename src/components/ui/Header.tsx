import { HTMLAttributes, forwardRef } from 'react';
import { HeaderVariant, FontWeight, theme } from '../../config/theme.config';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4';

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: HeaderVariant;
  weight?: FontWeight;
}

const Header = forwardRef<HTMLHeadingElement, HeaderProps>((
  { className = '', variant = 'h1', weight = 'normal', children, ...props },
  ref
) => {
  const baseStyles = 'text-primary';
  const variants = theme.typography.sizes;
  const weights = theme.typography.fontWeights;

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