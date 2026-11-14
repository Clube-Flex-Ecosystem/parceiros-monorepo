'use client';

import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/shared/components/ui/primitives/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/primitives/sheet';

import {
  ProtectedSidebarContent,
  type ProtectedSidebarContentProps,
} from './protected-sidebar-content';

/* Menu lateral em painel deslizante para telas menores que `lg`. */
const ProtectedMobileNav = ({ user }: ProtectedSidebarContentProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  /* Fecha o painel quando a navegação troca de rota. */
  if (openedAt !== pathname) {
    setOpenedAt(pathname);
    setIsOpen(false);
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="lg:hidden">
          <Menu aria-hidden />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" aria-describedby={undefined}>
        <SheetTitle className="sr-only">Menu do painel</SheetTitle>
        <ProtectedSidebarContent user={user} />
      </SheetContent>
    </Sheet>
  );
};

export { ProtectedMobileNav };
