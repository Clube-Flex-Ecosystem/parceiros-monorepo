import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';

import { fieldVariants } from './input';

const Textarea = ({ className, ...props }: ComponentProps<'textarea'>) => {
  return (
    <textarea
      className={cn(fieldVariants(), 'field-sizing-content min-h-24 resize-y px-3 py-2', className)}
      {...props}
    />
  );
};

export { Textarea };
