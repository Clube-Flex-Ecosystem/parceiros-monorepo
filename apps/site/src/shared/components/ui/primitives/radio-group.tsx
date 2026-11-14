'use client';

import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';

const RadioGroup = ({ className, ...props }: ComponentProps<typeof RadioGroupPrimitive.Root>) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} />;
};

const RadioGroupItem = ({
  className,
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Item>) => {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'peer inline-flex size-4.5 shrink-0 items-center justify-center rounded-pill border border-input bg-surface inset-shadow-well',
        'transition-colors duration-(--duration-fast) ease-out',
        'data-[state=checked]:border-primary',
        'aria-invalid:border-danger',
        'disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="size-2 rounded-pill bg-primary data-[state=checked]:animate-scale-in" />
    </RadioGroupPrimitive.Item>
  );
};

export { RadioGroup, RadioGroupItem };
