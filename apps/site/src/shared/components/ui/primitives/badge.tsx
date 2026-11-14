import type { ComponentProps } from 'react';

import { tv, type VariantProps } from '@/shared/lib/tv';

const badgeVariants = tv({
  base: [
    'inline-flex h-6 w-fit shrink-0 items-center gap-1.5 rounded-pill px-2.5 text-xs font-medium whitespace-nowrap',
    '[&_svg]:size-3 [&_svg]:shrink-0',
  ],
  variants: {
    variant: {
      neutral: 'bg-surface-muted text-muted-foreground',
      primary: 'bg-primary-soft text-primary-soft-foreground',
      success: 'bg-success-soft text-success-soft-foreground',
      warning: 'bg-warning-soft text-warning-soft-foreground',
      danger: 'bg-danger-soft text-danger-soft-foreground',
      info: 'bg-info-soft text-info-soft-foreground',
      /* Estados do parceiro. */
      draft: 'bg-status-draft-soft text-status-draft-foreground',
      published: 'bg-status-published-soft text-status-published-foreground',
      inactive: 'bg-status-inactive-soft text-status-inactive-foreground',
    },
  },
  defaultVariants: {
    variant: 'neutral',
  },
});

type BadgeProps = ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    withDot?: boolean;
  };

const Badge = ({ className, variant, withDot = false, children, ...props }: BadgeProps) => {
  return (
    <span className={badgeVariants({ variant, className })} {...props}>
      {withDot && <span aria-hidden className="size-1.5 rounded-pill bg-current" />}
      {children}
    </span>
  );
};

export { Badge, badgeVariants };
export type { BadgeProps };
