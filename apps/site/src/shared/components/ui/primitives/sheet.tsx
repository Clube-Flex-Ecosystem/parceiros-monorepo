'use client';

import { X } from 'lucide-react';
import { Dialog as SheetPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';
import { tv, type VariantProps } from '@/shared/lib/tv';

import { buttonVariants } from './button';
import { DialogOverlay } from './dialog';

/* Painel lateral sobre o Dialog do Radix, usado como menu em telas pequenas. */
const sheetContentVariants = tv({
  base: [
    'fixed inset-y-0 z-(--z-modal) flex w-sidebar max-w-[85vw] flex-col bg-background p-3 text-foreground shadow-xl outline-none',
    'data-[state=closed]:animate-slide-out data-[state=open]:animate-slide-in',
  ],
  variants: {
    side: {
      left: 'left-0 border-r border-border [--slide-from:-100%]',
      right: 'right-0 border-l border-border [--slide-from:100%]',
    },
  },
  defaultVariants: {
    side: 'left',
  },
});

const Sheet = (props: ComponentProps<typeof SheetPrimitive.Root>) => {
  return <SheetPrimitive.Root {...props} />;
};

const SheetTrigger = (props: ComponentProps<typeof SheetPrimitive.Trigger>) => {
  return <SheetPrimitive.Trigger {...props} />;
};

const SheetClose = (props: ComponentProps<typeof SheetPrimitive.Close>) => {
  return <SheetPrimitive.Close {...props} />;
};

type SheetContentProps = ComponentProps<typeof SheetPrimitive.Content> &
  VariantProps<typeof sheetContentVariants> & {
    showCloseButton?: boolean;
  };

const SheetContent = ({
  className,
  side,
  showCloseButton = true,
  children,
  ...props
}: SheetContentProps) => {
  return (
    <SheetPrimitive.Portal>
      <DialogOverlay />
      <SheetPrimitive.Content className={sheetContentVariants({ side, className })} {...props}>
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon-sm' }),
              'absolute top-3 right-3 text-muted-foreground hover:text-foreground',
            )}
          >
            <X aria-hidden />
            <span className="sr-only">Fechar</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
};

const SheetTitle = ({ className, ...props }: ComponentProps<typeof SheetPrimitive.Title>) => {
  return (
    <SheetPrimitive.Title
      className={cn('font-display text-lg font-extrabold tracking-tight', className)}
      {...props}
    />
  );
};

const SheetDescription = ({
  className,
  ...props
}: ComponentProps<typeof SheetPrimitive.Description>) => {
  return (
    <SheetPrimitive.Description
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
};

export {
  Sheet,
  SheetClose,
  SheetContent,
  sheetContentVariants,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
};
