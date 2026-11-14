'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ScrollArea } from '@/shared/components/ui/primitives/scroll-area';
import { tv } from '@/shared/lib/tv';

import { NavLinks } from './nav-links';
import { protectedNavigation } from './protected-navigation';
import { UserMenu, type UserMenuUser } from './user-menu';

/* Conteúdo do menu lateral, compartilhado pela coluna fixa e pelo painel do mobile. */
const protectedSidebarContentVariants = tv({
  slots: {
    root: 'flex h-full min-h-0 w-full flex-col gap-4',
    brand: 'flex h-control-lg shrink-0 items-center px-3',
    logo: 'h-7 w-auto',
    nav: 'min-h-0 flex-1',
    groups: 'flex flex-col gap-6 pb-2',
    footer: 'shrink-0',
  },
});

type ProtectedSidebarContentProps = {
  user?: UserMenuUser | null;
};

const ProtectedSidebarContent = ({ user }: ProtectedSidebarContentProps) => {
  const slots = protectedSidebarContentVariants();

  return (
    <div className={slots.root()}>
      <Link href="/admin" aria-label="Início do painel" className={slots.brand()}>
        <Image
          src="/logo.svg"
          alt="Clube Flex"
          width={61}
          height={28}
          priority
          className={slots.logo({ className: 'dark:hidden' })}
        />
        <Image
          src="/logo-white.svg"
          alt="Clube Flex"
          width={61}
          height={28}
          priority
          className={slots.logo({ className: 'hidden dark:block' })}
        />
      </Link>

      <ScrollArea className={slots.nav()}>
        <nav aria-label="Menu do painel" className={slots.groups()}>
          {protectedNavigation.map((group) => (
            <NavLinks key={group.label} group={group} />
          ))}
        </nav>
      </ScrollArea>

      {user && (
        <div className={slots.footer()}>
          <UserMenu user={user} />
        </div>
      )}
    </div>
  );
};

export { ProtectedSidebarContent };
export type { ProtectedSidebarContentProps };
