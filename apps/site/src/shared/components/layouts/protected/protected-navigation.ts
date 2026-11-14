import { House, LayoutGrid, Store, TicketPercent, type LucideIcon } from 'lucide-react';

/*
 * Fonte única da navegação do painel: o menu lateral e o breadcrumb leem daqui.
 * Uma rota nova precisa de um item no menu (quando aplicável) e de um rótulo em
 * `protectedBreadcrumbLabels`.
 */
type NavItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
  /* `exact` ativa só na própria rota; `prefix` também nas rotas filhas. */
  match?: 'exact' | 'prefix';
  children?: NavItem[];
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

const protectedNavigation: NavGroup[] = [
  {
    label: 'Geral',
    items: [{ label: 'Início', href: '/admin', icon: House, match: 'exact' }],
  },
  {
    label: 'Catálogo',
    items: [
      {
        label: 'Parceiros',
        href: '/admin/partners',
        icon: Store,
        children: [
          { label: 'Todos os parceiros', href: '/admin/partners', match: 'exact' },
          { label: 'Novo parceiro', href: '/admin/partners/new', match: 'exact' },
        ],
      },
      { label: 'Categorias', href: '/admin/categories', icon: LayoutGrid },
      { label: 'Planos', href: '/admin/plans', icon: TicketPercent },
    ],
  },
];

/* Segmentos dinâmicos são escritos como `[id]`; rotas estáticas têm prioridade. */
const protectedBreadcrumbLabels: Record<string, string> = {
  '/admin': 'Início',
  '/admin/partners': 'Parceiros',
  '/admin/partners/new': 'Novo parceiro',
  '/admin/partners/[id]': 'Editar parceiro',
  '/admin/categories': 'Categorias',
  '/admin/plans': 'Planos',
};

const isNavItemActive = (pathname: string, { href, match = 'prefix' }: NavItem) => {
  if (match === 'exact') {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

const findBreadcrumbLabel = (href: string) => {
  if (protectedBreadcrumbLabels[href]) {
    return protectedBreadcrumbLabels[href];
  }

  const pattern = Object.keys(protectedBreadcrumbLabels).find((key) =>
    new RegExp(`^${key.replace(/\[[^/]+\]/g, '[^/]+')}$`).test(href),
  );

  return pattern ? protectedBreadcrumbLabels[pattern] : undefined;
};

type BreadcrumbCrumb = {
  label: string;
  href: string;
};

const getBreadcrumbTrail = (pathname: string): BreadcrumbCrumb[] => {
  const segments = pathname.split('/').filter(Boolean);

  return segments.flatMap((_, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    const label = findBreadcrumbLabel(href);

    return label ? [{ label, href }] : [];
  });
};

export { getBreadcrumbTrail, isNavItemActive, protectedNavigation };
export type { BreadcrumbCrumb, NavGroup, NavItem };
