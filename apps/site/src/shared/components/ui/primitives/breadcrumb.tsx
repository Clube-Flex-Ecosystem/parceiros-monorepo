import { ChevronRight } from 'lucide-react';
import { Slot } from 'radix-ui';
import type { ComponentProps } from 'react';

import { tv } from '@/shared/lib/tv';

/* O Radix não tem breadcrumb; as partes seguem a marcação acessível de nav > ol > li. */
const breadcrumbVariants = tv({
  slots: {
    list: 'flex min-w-0 items-center gap-1.5 text-sm text-muted-foreground',
    item: 'inline-flex min-w-0 items-center gap-1.5',
    link: [
      'truncate rounded-xs transition-colors duration-(--duration-fast) ease-out hover:text-foreground',
      '[&_svg]:size-icon-sm [&_svg]:shrink-0',
    ],
    page: 'truncate font-medium text-foreground',
    separator: 'shrink-0 text-subtle-foreground [&_svg]:size-icon-xs',
  },
});

const slots = breadcrumbVariants();

const Breadcrumb = (props: ComponentProps<'nav'>) => {
  return <nav aria-label="Trilha de navegação" {...props} />;
};

const BreadcrumbList = ({ className, ...props }: ComponentProps<'ol'>) => {
  return <ol className={slots.list({ className })} {...props} />;
};

const BreadcrumbItem = ({ className, ...props }: ComponentProps<'li'>) => {
  return <li className={slots.item({ className })} {...props} />;
};

type BreadcrumbLinkProps = ComponentProps<'a'> & {
  asChild?: boolean;
};

const BreadcrumbLink = ({ className, asChild = false, ...props }: BreadcrumbLinkProps) => {
  const Component = asChild ? Slot.Root : 'a';

  return <Component className={slots.link({ className })} {...props} />;
};

const BreadcrumbPage = ({ className, ...props }: ComponentProps<'span'>) => {
  return <span aria-current="page" className={slots.page({ className })} {...props} />;
};

const BreadcrumbSeparator = ({ className, children, ...props }: ComponentProps<'li'>) => {
  return (
    <li role="presentation" aria-hidden className={slots.separator({ className })} {...props}>
      {children ?? <ChevronRight />}
    </li>
  );
};

export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  breadcrumbVariants,
};
