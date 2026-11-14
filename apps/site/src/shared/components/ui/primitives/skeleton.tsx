import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';

const Skeleton = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div aria-hidden className={cn('skeleton', className)} {...props} />;
};

export { Skeleton };
