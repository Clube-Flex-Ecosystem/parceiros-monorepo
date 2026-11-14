import { tv } from '@/shared/lib/tv';

import { AuthShowcaseIllustration } from './auth-showcase-illustration';
import { AuthShowcaseMessage } from './auth-showcase-message';

/* Painel da marca: laranja profundo, brilho no topo e textura fina de pontos. */
const authShowcasePanelVariants = tv({
  slots: {
    root: [
      'relative hidden min-h-full flex-col justify-end overflow-hidden rounded-2xl p-10 lg:flex xl:p-14',
      'bg-linear-160 from-flex-700 via-flex-800 to-flex-950',
    ],
    glow: [
      'pointer-events-none absolute inset-0',
      'bg-[radial-gradient(60%_50%_at_75%_10%,rgb(247_147_58/0.35),transparent_70%)]',
    ],
    texture: [
      'pointer-events-none absolute inset-0 opacity-60',
      'bg-[radial-gradient(rgb(255_255_255/0.07)_1px,transparent_1px)] bg-size-[14px_14px]',
    ],
  },
});

const AuthShowcasePanel = () => {
  const slots = authShowcasePanelVariants();

  return (
    <aside className={slots.root()}>
      <div aria-hidden className={slots.glow()} />
      <div aria-hidden className={slots.texture()} />
      <AuthShowcaseIllustration />
      <AuthShowcaseMessage />
    </aside>
  );
};

export { AuthShowcasePanel };
