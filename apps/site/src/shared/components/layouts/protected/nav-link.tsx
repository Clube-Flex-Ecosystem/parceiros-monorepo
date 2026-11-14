'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { tv, type VariantProps } from '@/shared/lib/tv';

import { isNavItemActive, type NavItem } from './protected-navigation';

/*
 * O item ativo ganha a superfície elevada, como uma ficha destacada do menu.
 * O item pai de um submenu só realça o texto e o ícone, deixando o destaque
 * para o filho ativo.
 */
const navLinkVariants = tv({
  base: [
    'flex items-center gap-3 rounded-md border border-transparent px-3 text-sm',
    'transition-colors duration-(--duration-fast) ease-out',
    '[&_svg]:size-icon-sm [&_svg]:shrink-0',
  ],
  variants: {
    level: {
      root: 'h-9',
      parent: 'h-9',
      nested: 'h-8',
    },
    active: {
      true: 'font-medium text-foreground [&_svg]:text-primary',
      false: 'text-muted-foreground hover:bg-surface-muted hover:text-foreground',
    },
  },
  compoundVariants: [
    {
      level: ['root', 'nested'],
      active: true,
      class: 'border-border bg-surface shadow-sm',
    },
  ],
  defaultVariants: {
    level: 'root',
    active: false,
  },
});

type NavLinkProps = {
  item: NavItem;
  level?: VariantProps<typeof navLinkVariants>['level'];
};

const NavLink = ({ item, level = 'root' }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = isNavItemActive(pathname, item);
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      aria-current={isActive && level !== 'parent' ? 'page' : undefined}
      className={navLinkVariants({ level, active: isActive })}
    >
      {Icon && <Icon aria-hidden />}
      <span className="truncate">{item.label}</span>
    </Link>
  );
};

export { NavLink, navLinkVariants };
