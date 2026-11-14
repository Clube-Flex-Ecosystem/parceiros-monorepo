import { LayoutGrid, Store, Tags, TicketPercent } from 'lucide-react';

import { tv, type VariantProps } from '@/shared/lib/tv';

/*
 * Uma janela do painel administrativo, em vidro translúcido sobre o laranja.
 * As janelas de trás mostram só a estrutura; a da frente mostra o item ativo
 * e um cupom de desconto, a assinatura do design system.
 */
const authShowcaseWindowVariants = tv({
  slots: {
    root: [
      'absolute top-0 left-0 flex h-[620px] w-[760px] flex-col rounded-[28px] p-6',
      'border border-white/15 bg-white/[0.07] backdrop-blur-sm',
      'shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_40px_80px_-20px_rgb(62_15_4/0.55)]',
    ],
    header: 'flex items-center gap-4 border-b border-white/10 pb-5',
    appIcon: [
      'flex size-12 shrink-0 items-center justify-center rounded-xl text-white',
      'bg-linear-to-b from-flex-400 to-flex-600',
      'shadow-[inset_0_1px_0_rgb(255_255_255/0.45),inset_0_-1px_0_rgb(114_36_15/0.4),0_6px_14px_-4px_rgb(62_15_4/0.6)]',
      '[&_svg]:size-6 [&_svg]:drop-shadow-[0_1px_0_rgb(114_36_15/0.5)]',
    ],
    bar: 'block rounded-pill bg-white/15',
    body: 'mt-5 grid grid-cols-[13rem_1fr] gap-6',
    nav: 'flex flex-col gap-2',
    navItem: 'flex h-11 items-center gap-3 rounded-xl px-3 text-white/45 [&_svg]:size-5',
    activeItem: [
      'flex h-11 items-center gap-3 rounded-xl px-3 font-medium text-white [&_svg]:size-5',
      'border border-white/25 bg-white/20 shadow-[inset_0_1px_0_rgb(255_255_255/0.25)]',
    ],
    content: 'flex flex-col gap-4',
    row: 'flex h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4',
    ticket: 'w-60 drop-shadow-[0_18px_28px_rgb(62_15_4/0.45)]',
    ticketBody: 'ticket flex flex-col gap-4 rounded-2xl bg-white p-5 text-ink-900',
    ticketPercent: 'slant font-display text-4xl leading-none font-extrabold text-flex-600',
    ticketPerforation: 'ticket-perforation -mx-5',
  },
  variants: {
    depth: {
      back: { root: 'translate-x-[-170px] translate-y-[110px] opacity-30' },
      middle: { root: 'translate-x-[-85px] translate-y-[55px] opacity-55' },
      front: { root: '' },
    },
  },
  defaultVariants: {
    depth: 'front',
  },
});

type AuthShowcaseWindowProps = VariantProps<typeof authShowcaseWindowVariants>;

const AuthShowcaseWindow = ({ depth = 'front' }: AuthShowcaseWindowProps) => {
  const slots = authShowcaseWindowVariants({ depth });
  const isFront = depth === 'front';

  return (
    <div className={slots.root()}>
      <div className={slots.header()}>
        <span className={slots.appIcon()}>
          <TicketPercent />
        </span>
        <span className={slots.bar({ className: 'h-4 w-44' })} />
        <span className={slots.bar({ className: 'ml-auto h-8 w-14 rounded-xl' })} />
      </div>

      <div className={slots.body()}>
        <nav className={slots.nav()}>
          {isFront ? (
            <span className={slots.activeItem()}>
              <Store />
              Parceiros
            </span>
          ) : (
            <span className={slots.navItem()}>
              <Store />
              <span className={slots.bar({ className: 'h-3 w-24' })} />
            </span>
          )}
          <span className={slots.navItem()}>
            <LayoutGrid />
            <span className={slots.bar({ className: 'h-3 w-28 bg-white/10' })} />
          </span>
          <span className={slots.navItem()}>
            <Tags />
            <span className={slots.bar({ className: 'h-3 w-20 bg-white/10' })} />
          </span>
        </nav>

        <div className={slots.content()}>
          {isFront ? (
            <div className={slots.ticket()}>
              <div className={slots.ticketBody()}>
                <div className="flex items-end justify-between gap-4">
                  <span className={slots.ticketPercent()}>20%</span>
                  <span className="pb-1 text-right text-xs leading-tight font-medium text-ink-500">
                    Plano
                    <br />
                    Premium
                  </span>
                </div>
                <div className={slots.ticketPerforation()} />
                <div className="flex flex-col gap-2">
                  <span className="block h-2.5 w-40 rounded-pill bg-ink-200" />
                  <span className="block h-2.5 w-24 rounded-pill bg-ink-100" />
                </div>
              </div>
            </div>
          ) : (
            <span className={slots.bar({ className: 'h-36 w-full rounded-2xl bg-white/10' })} />
          )}
          <span className={slots.row()}>
            <span className={slots.bar({ className: 'size-6 rounded-md' })} />
            <span className={slots.bar({ className: 'h-3 w-40' })} />
          </span>
          <span className={slots.row()}>
            <span className={slots.bar({ className: 'size-6 rounded-md' })} />
            <span className={slots.bar({ className: 'h-3 w-28' })} />
          </span>
        </div>
      </div>
    </div>
  );
};

export { AuthShowcaseWindow };
