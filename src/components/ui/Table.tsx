import { HTMLAttributes, forwardRef } from 'react';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  variant?: 'default' | 'striped';
  size?: 'sm' | 'md' | 'lg';
}

const Table = forwardRef<HTMLTableElement, TableProps>((
  { className = '', variant = 'default', size = 'md', children, ...props },
  ref
) => {
  const baseStyles = 'w-full border-collapse text-left';
  
  const variants = {
    default: 'border border-gray-200',
    striped: 'border border-gray-200 [&_tr:nth-child(even)]:bg-gray-50'
  };

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

export const Thead = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>((
  { className = '', children, ...props },
  ref
) => (
  <thead
    className={`bg-gray-50 text-gray-700 font-medium border-b border-gray-200 ${className}`}
    ref={ref}
    {...props}
  >
    {children}
  </thead>
));

Thead.displayName = 'Thead';

export const Tbody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>((
  { className = '', children, ...props },
  ref
) => (
  <tbody
    className={`text-gray-900 divide-y divide-gray-200 ${className}`}
    ref={ref}
    {...props}
  >
    {children}
  </tbody>
));

Tbody.displayName = 'Tbody';