'use client';

import { Avatar as AvatarPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';
import { tv, type VariantProps } from '@/shared/lib/tv';

/* O tamanho fica na raiz; a fonte das iniciais acompanha o tamanho por herança. */
const avatarVariants = tv({
  base: [
    'relative flex shrink-0 overflow-hidden rounded-pill select-none',
    'bg-primary-soft text-primary-soft-foreground ring-1 ring-border',
  ],
  variants: {
    size: {
      sm: 'size-8 text-xs',
      md: 'size-9 text-sm',
      lg: 'size-11 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type AvatarProps = ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>;

const Avatar = ({ className, size, ...props }: AvatarProps) => {
  return <AvatarPrimitive.Root className={avatarVariants({ size, className })} {...props} />;
};

const AvatarImage = ({ className, ...props }: ComponentProps<typeof AvatarPrimitive.Image>) => {
  return (
    <AvatarPrimitive.Image
      className={cn('aspect-square size-full object-cover', className)}
      {...props}
    />
  );
};

const AvatarFallback = ({
  className,
  ...props
}: ComponentProps<typeof AvatarPrimitive.Fallback>) => {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        'flex size-full items-center justify-center font-semibold uppercase',
        className,
      )}
      {...props}
    />
  );
};

export { Avatar, AvatarFallback, AvatarImage, avatarVariants };
export type { AvatarProps };
