import { tv } from '@/shared/lib/tv';

const authShowcaseMessageVariants = tv({
  slots: {
    root: 'relative flex max-w-md flex-col gap-5',
    headline: 'font-display text-3xl font-semibold tracking-tight text-balance text-white',
    muted: 'text-white/55',
    caption: 'text-sm text-white/70',
  },
});

const AuthShowcaseMessage = () => {
  const slots = authShowcaseMessageVariants();

  return (
    <div className={slots.root()}>
      <p className={slots.headline()}>
        Seu catálogo de parceiros, sempre em dia.{' '}
        <span className={slots.muted()}>Publique e ajuste os descontos de cada plano.</span>
      </p>
      <p className={slots.caption()}>Painel de parceiros do Clube Flex</p>
    </div>
  );
};

export { AuthShowcaseMessage };
