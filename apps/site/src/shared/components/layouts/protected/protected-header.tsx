import { Separator } from '@/shared/components/ui/primitives/separator';
import { tv } from '@/shared/lib/tv';

import { ProtectedBreadcrumb } from './protected-breadcrumb';
import { ProtectedMobileNav } from './protected-mobile-nav';
import type { ProtectedSidebarContentProps } from './protected-sidebar-content';

/* Barra fixa no topo do conteúdo, com o menu do mobile e a trilha de navegação. */
const protectedHeaderVariants = tv({
  slots: {
    root: [
      'sticky top-0 z-(--z-sticky) flex h-header shrink-0 items-center gap-3 px-gutter',
      'border-b border-border bg-surface/85 backdrop-blur-md lg:rounded-t-2xl',
    ],
    separator: 'data-[orientation=vertical]:h-5 lg:hidden',
  },
});

const ProtectedHeader = ({ user }: ProtectedSidebarContentProps) => {
  const slots = protectedHeaderVariants();

  return (
    <header className={slots.root()}>
      <ProtectedMobileNav user={user} />
      <Separator orientation="vertical" className={slots.separator()} />
      <ProtectedBreadcrumb />
    </header>
  );
};

export { ProtectedHeader };
