import { HTMLAttributes, forwardRef } from 'react';
import { TableVariant, Size } from '../../types/ui';
import { defaultTheme, createStyleVariants } from '../../utils/theme';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  variant?: TableVariant;
  size?: Size;
}

const Table = forwardRef<HTMLTableElement, TableProps>((
  { className = '', variant = 'default', size = 'md', children, ...props },
  ref
) => {
  const baseStyles = 'w-full border-collapse text-left';
  
  const variants = createStyleVariants({
    default: `border border-theme(colors.border)`,
    striped: `border border-theme(colors.border) [&_tr:nth-child(even)]:bg-theme(colors.border)`
  }, defaultTheme);

  const sizes = {
    sm: '[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2 text-sm',
    md: '[&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3 text-base',
    lg: '[&_th]:px-6 [&_th]:py-4 [&_td]:px-6 [&_td]:py-4 text-lg'
  };

  return (
    <table
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </table>
  );
});

Table.displayName = 'Table';

export default Table;

export const Thead = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className = '', children, ...props }, ref) => (
    <thead
      className={`bg-theme(colors.border) text-theme(colors.text) font-medium border-b border-theme(colors.border) ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </thead>
  )
);

Thead.displayName = 'Thead';

export const Tbody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className = '', children, ...props }, ref) => (
    <tbody
      className={`text-theme(colors.text) divide-y divide-theme(colors.border) ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </tbody>
  )
);

Tbody.displayName = 'Tbody';