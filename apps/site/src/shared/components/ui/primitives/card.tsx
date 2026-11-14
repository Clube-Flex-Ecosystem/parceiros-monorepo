import type { ComponentProps } from 'react';

import { cn } from '@/shared/lib/cn';
import { tv, type VariantProps } from '@/shared/lib/tv';

const cardVariants = tv({
  base: 'flex flex-col gap-6 rounded-xl p-6 text-foreground',
  variants: {
    variant: {
      default: 'border border-border bg-surface shadow-sm',
      muted: 'bg-surface-muted',
      /* Cupom: recorte lateral na altura de `--ticket-notch-position` (padrão 50%). */
      ticket: 'ticket bg-surface',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type CardProps = ComponentProps<'div'> & VariantProps<typeof cardVariants>;

const Card = ({ className, variant, ...props }: CardProps) => {
  const card = <div className={cardVariants({ variant, className })} {...props} />;

  /* A máscara do cupom corta box-shadow, então a elevação vem do elemento pai. */
  if (variant === 'ticket') {
    return <div className="drop-shadow-ticket">{card}</div>;
  }

  return card;
};

const CardHeader = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col gap-1.5', className)} {...props} />;
};

const CardTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('font-display text-xl leading-tight font-extrabold tracking-tight', className)}
      {...props}
    />
  );
};

const CardDescription = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div className={cn('text-sm text-muted-foreground', className)} {...props} />;
};

const CardContent = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div className={cn('flex flex-col gap-4', className)} {...props} />;
};

const CardFooter = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div className={cn('flex items-center gap-3', className)} {...props} />;
};

/* Linha picotada que divide as partes de um card cupom. */
const CardPerforation = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div aria-hidden className={cn('-mx-6 ticket-perforation', className)} {...props} />;
};

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPerforation,
  CardTitle,
  cardVariants,
};
export type { CardProps };
