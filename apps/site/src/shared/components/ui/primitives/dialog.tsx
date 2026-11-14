'use client';

import { X } from 'lucide-react';
import { Dialog as DialogPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';

import { buttonVariants } from './button';

const Dialog = (props: ComponentProps<typeof DialogPrimitive.Root>) => {
  return <DialogPrimitive.Root {...props} />;
};

const DialogTrigger = (props: ComponentProps<typeof DialogPrimitive.Trigger>) => {
  return <DialogPrimitive.Trigger {...props} />;
};

const DialogClose = (props: ComponentProps<typeof DialogPrimitive.Close>) => {
  return <DialogPrimitive.Close {...props} />;
};

const DialogOverlay = ({ className, ...props }: ComponentProps<typeof DialogPrimitive.Overlay>) => {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-(--z-overlay) bg-ink-950/50 backdrop-blur-[2px]',
        'data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in',
        className,
      )}
      {...props}
    />
  );
};

/* Centralizado com `inset-0 m-auto h-fit`, sem transform, para não conflitar com a animação. */
const dialogContentClassName = cn(
  'fixed inset-0 z-(--z-modal) m-auto flex h-fit max-h-[calc(100dvh-2*var(--spacing-gutter))] w-[calc(100%-2*var(--spacing-gutter))] max-w-lg flex-col gap-5',
  'overflow-y-auto rounded-2xl border border-border bg-surface-raised p-6 text-foreground shadow-xl outline-none',
  'data-[state=closed]:animate-fade-out data-[state=open]:animate-scale-in',
);

type DialogContentProps = ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
};

const DialogContent = ({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) => {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content className={cn(dialogContentClassName, className)} {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon-sm' }),
              'absolute top-4 right-4 text-muted-foreground hover:text-foreground',
            )}
          >
            <X aria-hidden />
            <span className="sr-only">Fechar</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

const DialogHeader = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col gap-1.5 pr-8', className)} {...props} />;
};

const DialogFooter = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  );
};

const DialogTitle = ({ className, ...props }: ComponentProps<typeof DialogPrimitive.Title>) => {
  return (
    <DialogPrimitive.Title
      className={cn('font-display text-xl font-extrabold tracking-tight', className)}
      {...props}
    />
  );
};

const DialogDescription = ({
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive.Description>) => {
  return (
    <DialogPrimitive.Description
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
};

export {
  Dialog,
  DialogClose,
  DialogContent,
  dialogContentClassName,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
};
