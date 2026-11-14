'use client';

import { Tabs as TabsPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';

const Tabs = ({ className, ...props }: ComponentProps<typeof TabsPrimitive.Root>) => {
  return <TabsPrimitive.Root className={cn('flex flex-col gap-4', className)} {...props} />;
};

const TabsList = ({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) => {
  return (
    <TabsPrimitive.List
      className={cn(
        'inline-flex w-fit items-center gap-1 rounded-lg bg-surface-muted p-1 inset-shadow-well',
        className,
      )}
      {...props}
    />
  );
};

const TabsTrigger = ({ className, ...props }: ComponentProps<typeof TabsPrimitive.Trigger>) => {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'inline-flex h-8 items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium whitespace-nowrap text-muted-foreground',
        'transition-colors duration-(--duration-fast) ease-out hover:text-foreground',
        'data-[state=active]:bg-surface data-[state=active]:text-foreground data-[state=active]:shadow-xs',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
};

const TabsContent = ({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>) => {
  return (
    <TabsPrimitive.Content
      className={cn('outline-none data-[state=active]:animate-fade-in', className)}
      {...props}
    />
  );
};

export { Tabs, TabsContent, TabsList, TabsTrigger };
