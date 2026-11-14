'use client';

import { LoaderCircle } from 'lucide-react';
import { Slot } from 'radix-ui';
import type { ComponentProps } from 'react';

import { tv, type VariantProps } from '@/shared/lib/tv';

const buttonVariants = tv({
  base: [
    'inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap select-none',
    'transition-colors duration-(--duration-fast) ease-out',
    'disabled:pointer-events-none disabled:opacity-60',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-icon-sm',
  ],
  variants: {
    variant: {
      primary: 'button-primary',
      secondary: 'button-secondary',
      outline: 'border border-border-strong bg-transparent text-foreground hover:bg-surface-muted',
      ghost: 'text-foreground hover:bg-surface-muted',
      danger: 'bg-danger text-white hover:bg-danger/90',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      sm: 'h-control-sm px-3 text-sm',
      md: 'h-control-md px-4 text-sm',
      lg: 'h-control-lg px-6 text-base',
      icon: 'size-control-md',
      'icon-sm': 'size-control-sm',
    },
  },
  compoundVariants: [{ variant: 'link', class: 'h-auto px-0' }],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
  };

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  /* O Slot exige um único filho, então com `asChild` o conteúdo é repassado sem o spinner. */
  if (asChild) {
    return (
      <Slot.Root className={buttonVariants({ variant, size, className })} {...props}>
        {children}
      </Slot.Root>
    );
  }

  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading && <LoaderCircle className="animate-spin" aria-hidden />}
      {children}
    </button>
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
