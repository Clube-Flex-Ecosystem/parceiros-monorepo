import type { ComponentProps } from 'react';

import { tv, type VariantProps } from '@/shared/lib/tv';

/* Base compartilhada pelos campos de formulário (input, textarea e select). */
const fieldVariants = tv({
  base: [
    'w-full min-w-0 rounded-md border border-input bg-surface text-sm text-foreground inset-shadow-well',
    'transition-[border-color,box-shadow] duration-(--duration-fast) ease-out',
    'placeholder:text-subtle-foreground',
    'focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/20 focus-visible:outline-none',
    'aria-invalid:border-danger aria-invalid:focus-visible:ring-danger/20',
    'disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-60',
  ],
});

const inputVariants = tv({
  extend: fieldVariants,
  variants: {
    size: {
      sm: 'h-control-sm px-2.5',
      md: 'h-control-md px-3',
      lg: 'h-control-lg px-4 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type InputProps = Omit<ComponentProps<'input'>, 'size'> & VariantProps<typeof inputVariants>;

const Input = ({ className, size, type = 'text', ...props }: InputProps) => {
  return <input type={type} className={inputVariants({ size, className })} {...props} />;
};

export { fieldVariants, Input, inputVariants };
export type { InputProps };
