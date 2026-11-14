'use client';

import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';

const DropdownMenu = (props: ComponentProps<typeof DropdownMenuPrimitive.Root>) => {
  return <DropdownMenuPrimitive.Root {...props} />;
};

const DropdownMenuTrigger = (props: ComponentProps<typeof DropdownMenuPrimitive.Trigger>) => {
  return <DropdownMenuPrimitive.Trigger {...props} />;
};

const DropdownMenuGroup = (props: ComponentProps<typeof DropdownMenuPrimitive.Group>) => {
  return <DropdownMenuPrimitive.Group {...props} />;
};

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Content>) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'z-(--z-dropdown) max-h-(--radix-dropdown-menu-content-available-height) min-w-44 overflow-x-hidden overflow-y-auto',
          'origin-(--radix-dropdown-menu-content-transform-origin) rounded-lg border border-border bg-surface-raised p-1 text-foreground shadow-lg',
          'data-[state=closed]:animate-fade-out data-[state=open]:animate-scale-in',
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
};

type DropdownMenuItemProps = ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  variant?: 'default' | 'danger';
};

const DropdownMenuItem = ({ className, variant = 'default', ...props }: DropdownMenuItemProps) => {
  return (
    <DropdownMenuPrimitive.Item
      data-variant={variant}
      className={cn(
        'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none',
        'data-highlighted:bg-surface-muted',
        'data-disabled:pointer-events-none data-disabled:opacity-50',
        '[&_svg]:size-icon-sm [&_svg]:shrink-0 [&_svg]:text-muted-foreground',
        'data-[variant=danger]:text-danger data-[variant=danger]:data-highlighted:bg-danger-soft data-[variant=danger]:[&_svg]:text-danger',
        className,
      )}
      {...props}
    />
  );
};

const DropdownMenuLabel = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Label>) => {
  return (
    <DropdownMenuPrimitive.Label
      className={cn('px-2 py-1.5 text-xs font-medium text-muted-foreground', className)}
      {...props}
    />
  );
};

const DropdownMenuSeparator = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Separator>) => {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  );
};

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
};
