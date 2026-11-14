import { tv } from '@/shared/lib/tv';

import { AuthShowcaseWindow } from './auth-showcase-window';

/*
 * Pilha de janelas do painel inclinadas em perspectiva, saindo pela borda
 * direita. A máscara apaga a parte de baixo para abrir espaço para a mensagem.
 */
const authShowcaseIllustrationVariants = tv({
  slots: {
    root: [
      'pointer-events-none absolute inset-0 overflow-hidden',
      'mask-[linear-gradient(to_bottom,black_35%,transparent_68%)]',
    ],
    stack: [
      'absolute top-[9%] left-[22%] h-[620px] w-[760px] origin-top-left',
      '[transform:perspective(2400px)_rotateY(-11deg)_skewY(-4deg)_skewX(8deg)]',
    ],
  },
});

const AuthShowcaseIllustration = () => {
  const slots = authShowcaseIllustrationVariants();

  return (
    <div aria-hidden className={slots.root()}>
      <div className={slots.stack()}>
        <AuthShowcaseWindow depth="back" />
        <AuthShowcaseWindow depth="middle" />
        <AuthShowcaseWindow depth="front" />
      </div>
    </div>
  );
};

export { AuthShowcaseIllustration };
