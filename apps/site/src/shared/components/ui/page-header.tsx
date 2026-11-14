import type { ComponentProps, ReactNode } from 'react';

import { tv } from '@/shared/lib/tv';

/*
 * Título das páginas de `(protected)`. A tag fica ao lado do título, a descrição
 * logo abaixo e as ações (`children`) à direita, descendo para baixo do texto em
 * telas pequenas.
 */
const pageHeaderVariants = tv({
  slots: {
    root: 'flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between',
    heading: 'flex min-w-0 flex-col gap-1.5',
    titleRow: 'flex flex-wrap items-center gap-x-3 gap-y-2',
    title: 'text-2xl leading-tight sm:text-3xl',
    description: 'max-w-prose text-sm text-muted-foreground',
    actions: 'flex shrink-0 flex-wrap items-center gap-2',
  },
});

type PageHeaderProps = Omit<ComponentProps<'header'>, 'title'> & {
  title: ReactNode;
  description?: ReactNode;
  tag?: ReactNode;
};

const PageHeader = ({
  title,
  description,
  tag,
  children,
  className,
  ...props
}: PageHeaderProps) => {
  const slots = pageHeaderVariants();

  return (
    <header className={slots.root({ className })} {...props}>
      <div className={slots.heading()}>
        <div className={slots.titleRow()}>
          <h1 className={slots.title()}>{title}</h1>
          {tag}
        </div>
        {description && <p className={slots.description()}>{description}</p>}
      </div>
      {children && <div className={slots.actions()}>{children}</div>}
    </header>
  );
};

export { PageHeader, pageHeaderVariants };
export type { PageHeaderProps };
