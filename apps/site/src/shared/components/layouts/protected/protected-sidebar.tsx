import { tv } from '@/shared/lib/tv';

import {
  ProtectedSidebarContent,
  type ProtectedSidebarContentProps,
} from './protected-sidebar-content';

/* Coluna fixa do menu, visível a partir de telas grandes. */
const protectedSidebarVariants = tv({
  base: 'sticky top-4 hidden h-[calc(100dvh-2rem)] w-sidebar shrink-0 lg:flex',
});

const ProtectedSidebar = ({ user }: ProtectedSidebarContentProps) => {
  return (
    <aside className={protectedSidebarVariants()}>
      <ProtectedSidebarContent user={user} />
    </aside>
  );
};

export { ProtectedSidebar };
