'use client';

import { ChevronsUpDown, ExternalLink, LogOut } from 'lucide-react';

import { Avatar, AvatarFallback } from '@/shared/components/ui/primitives/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/primitives/dropdown-menu';
import { tv } from '@/shared/lib/tv';

/* Ficha do administrador no rodapé do menu, que abre as ações da conta. */
const userMenuVariants = tv({
  slots: {
    trigger: [
      'flex w-full items-center gap-3 rounded-lg border border-border bg-surface p-2 text-left shadow-sm',
      'transition-colors duration-(--duration-fast) ease-out',
      'hover:bg-surface-muted data-[state=open]:bg-surface-muted',
    ],
    identity: 'flex min-w-0 flex-1 flex-col',
    name: 'truncate text-sm leading-tight font-medium text-foreground',
    email: 'truncate text-xs text-muted-foreground',
    chevron: 'size-icon-sm shrink-0 text-muted-foreground',
    content: 'w-(--radix-dropdown-menu-trigger-width) min-w-56',
    header: 'flex items-center gap-3 px-2 py-2 font-normal',
  },
});

type UserMenuUser = {
  name: string;
  email: string;
};

type UserMenuProps = {
  user: UserMenuUser;
  onSignOut?: () => void | Promise<void>;
};

const getInitials = (name: string) => {
  const words = name.trim().split(/\s+/);
  const initials = words.length > 1 ? [words[0], words[words.length - 1]] : words;

  return initials.map((word) => word.charAt(0)).join('');
};

const UserMenu = ({ user, onSignOut }: UserMenuProps) => {
  const slots = userMenuVariants();
  const initials = getInitials(user.name);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={slots.trigger()}>
        <Avatar size="sm">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <span className={slots.identity()}>
          <span className={slots.name()}>{user.name}</span>
          <span className={slots.email()}>{user.email}</span>
        </span>
        <ChevronsUpDown aria-hidden className={slots.chevron()} />
      </DropdownMenuTrigger>

      <DropdownMenuContent side="top" align="start" sideOffset={8} className={slots.content()}>
        <DropdownMenuLabel className={slots.header()}>
          <Avatar>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className={slots.identity()}>
            <span className={slots.name()}>{user.name}</span>
            <span className={slots.email()}>{user.email}</span>
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a href="/" target="_blank" rel="noreferrer">
            <ExternalLink />
            Ver catálogo público
          </a>
        </DropdownMenuItem>
        {onSignOut && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="danger" onSelect={() => void onSignOut()}>
              <LogOut />
              Sair
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { UserMenu };
export type { UserMenuProps, UserMenuUser };
