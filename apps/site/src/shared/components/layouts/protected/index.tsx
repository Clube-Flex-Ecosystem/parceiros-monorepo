import type { PropsWithChildren } from 'react';

import { tv } from '@/shared/lib/tv';

import { ProtectedHeader } from './protected-header';
import { ProtectedSidebar } from './protected-sidebar';
import type { UserMenuUser } from './user-menu';

/*
 * Menu lateral sobre o fundo da página e o conteúdo em um card elevado, como no
 * layout de autenticação. Abaixo de `lg` o card ocupa a tela toda e o menu vira
 * um painel deslizante aberto pelo header.
 */
const protectedLayoutVariants = tv({
  slots: {
    root: 'flex min-h-dvh bg-background lg:gap-4 lg:p-4',
    main: [
      'flex min-w-0 flex-1 flex-col bg-surface',
      'lg:rounded-2xl lg:border lg:border-border lg:shadow-sm',
    ],
    content: 'flex-1 p-gutter',
  },
});

type ProtectedLayoutProps = PropsWithChildren<{
  user?: UserMenuUser | null;
}>;

const ProtectedLayout = ({ user, children }: ProtectedLayoutProps) => {
  const slots = protectedLayoutVariants();

  return (
    <div className={slots.root()}>
      <ProtectedSidebar user={user} />
      <div className={slots.main()}>
        <ProtectedHeader user={user} />
        <main className={slots.content()}>{children}</main>
      </div>
    </div>
  );
};

export { ProtectedLayout };
export type { ProtectedLayoutProps };
