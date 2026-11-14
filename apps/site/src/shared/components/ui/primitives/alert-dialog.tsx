'use client';

import { AlertDialog as AlertDialogPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';
import type { VariantProps } from '@/shared/lib/tv';

import { buttonVariants } from './button';
import { dialogContentClassName } from './dialog';

const AlertDialog = (props: ComponentProps<typeof AlertDialogPrimitive.Root>) => {
  return <AlertDialogPrimitive.Root {...props} />;
};

const AlertDialogTrigger = (props: ComponentProps<typeof AlertDialogPrimitive.Trigger>) => {
  return <AlertDialogPrimitive.Trigger {...props} />;
};

const AlertDialogContent = ({
  className,
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Content>) => {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay
        className={cn(
          'fixed inset-0 z-(--z-overlay) bg-ink-950/50 backdrop-blur-[2px]',
          'data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in',
        )}
      />
      <AlertDialogPrimitive.Content
        className={cn(dialogContentClassName, 'max-w-md', className)}
        {...props}
      />
    </AlertDialogPrimitive.Portal>
  );
};

const AlertDialogHeader = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col gap-1.5', className)} {...props} />;
};

const AlertDialogFooter = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  );
};

const AlertDialogTitle = ({
  className,
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Title>) => {
  return (
    <AlertDialogPrimitive.Title
      className={cn('font-display text-xl font-extrabold tracking-tight', className)}
      {...props}
    />
  );
};

const AlertDialogDescription = ({
  className,
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Description>) => {
  return (
    <AlertDialogPrimitive.Description
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
};

type AlertDialogActionProps = ComponentProps<typeof AlertDialogPrimitive.Action> &
  Pick<VariantProps<typeof buttonVariants>, 'variant'>;

const AlertDialogAction = ({ className, variant, ...props }: AlertDialogActionProps) => {
  return (
    <AlertDialogPrimitive.Action className={buttonVariants({ variant, className })} {...props} />
  );
};

const AlertDialogCancel = ({
  className,
  ...props
}: ComponentProps<typeof AlertDialogPrimitive.Cancel>) => {
  return (
    <AlertDialogPrimitive.Cancel
      className={buttonVariants({ variant: 'secondary', className })}
      {...props}
    />
  );
};

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
};
