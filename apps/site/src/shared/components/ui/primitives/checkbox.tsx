'use client';

import { Check, Minus } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';

const Checkbox = ({ className, ...props }: ComponentProps<typeof CheckboxPrimitive.Root>) => {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'peer size-4.5 shrink-0 rounded-xs border border-input bg-surface inset-shadow-well',
        'transition-colors duration-(--duration-fast) ease-out',
        'data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        'data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground',
        'aria-invalid:border-danger',
        'disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="group flex items-center justify-center">
        <Check
          className="size-3.5 group-data-[state=indeterminate]:hidden"
          strokeWidth={3}
          aria-hidden
        />
        <Minus
          className="hidden size-3.5 group-data-[state=indeterminate]:block"
          strokeWidth={3}
          aria-hidden
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};

export { Checkbox };
