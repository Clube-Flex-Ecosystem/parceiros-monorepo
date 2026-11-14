'use client';

import { ScrollArea as ScrollAreaPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';

const ScrollBar = ({
  className,
  orientation = 'vertical',
  ...props
}: ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) => {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      orientation={orientation}
      className={cn(
        'flex touch-none p-0.5 select-none',
        'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-(--scrollbar-size)',
        'data-[orientation=horizontal]:h-(--scrollbar-size) data-[orientation=horizontal]:flex-col',
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-pill bg-(--scrollbar-thumb) transition-colors hover:bg-(--scrollbar-thumb-hover)" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
};

const ScrollArea = ({
  className,
  children,
  ...props
}: ComponentProps<typeof ScrollAreaPrimitive.Root>) => {
  return (
    <ScrollAreaPrimitive.Root className={cn('relative overflow-hidden', className)} {...props}>
      <ScrollAreaPrimitive.Viewport className="size-full rounded-[inherit] outline-none">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};

export { ScrollArea, ScrollBar };
