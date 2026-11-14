'use client';

import { tv } from '@/shared/lib/tv';

import { NavLink } from './nav-link';
import type { NavGroup } from './protected-navigation';

const navLinksVariants = tv({
  slots: {
    root: 'flex flex-col gap-1.5',
    label: 'px-3 font-sans text-xs font-medium tracking-normal text-subtle-foreground',
    list: 'flex flex-col gap-0.5',
    nested: 'mt-0.5 ml-5 flex flex-col gap-0.5 border-l border-border pl-2',
  },
});

type NavLinksProps = {
  group: NavGroup;
};

const NavLinks = ({ group }: NavLinksProps) => {
  const slots = navLinksVariants();

  return (
    <section className={slots.root()}>
      <h2 className={slots.label()}>{group.label}</h2>
      <ul className={slots.list()}>
        {group.items.map((item) => (
          <li key={item.label}>
            <NavLink item={item} level={item.children ? 'parent' : 'root'} />
            {item.children && (
              <ul className={slots.nested()}>
                {item.children.map((child) => (
                  <li key={child.label}>
                    <NavLink item={child} level="nested" />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export { NavLinks };
