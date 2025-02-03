import { ButtonHTMLAttributes, forwardRef } from 'react';
import { ButtonVariant, Size } from '../../types/ui';
import { defaultTheme, createStyleVariants } from '../../utils/theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: Size;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  { className = '', variant = 'primary', size = 'md', children, ...props },
  ref
) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = createStyleVariants({
    primary: `bg-theme(colors.primary) text-theme(colors.background) hover:opacity-90`,
    secondary: `bg-theme(colors.secondary) text-theme(colors.background) hover:opacity-90`,
    outline: `border border-theme(colors.border) bg-transparent hover:bg-theme(colors.border)`
  }, defaultTheme);

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;