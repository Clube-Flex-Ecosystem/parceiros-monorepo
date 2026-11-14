import Image from 'next/image';
import type { PropsWithChildren } from 'react';

import { tv } from '@/shared/lib/tv';

const authFormPanelVariants = tv({
  slots: {
    root: 'grid min-h-full grid-rows-[auto_1fr_auto] gap-8 rounded-2xl border border-border bg-surface p-6 sm:p-10',
    header: 'flex items-center',
    logo: 'h-7 w-auto',
    content: 'flex items-center justify-center',
    inner: 'w-full max-w-sm animate-rise-in',
    footer: 'text-center text-xs text-muted-foreground',
  },
});

const AuthFormPanel = ({ children }: PropsWithChildren) => {
  const slots = authFormPanelVariants();

  return (
    <section className={slots.root()}>
      <header className={slots.header()}>
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
      </header>
      <main className={slots.content()}>
        <div className={slots.inner()}>{children}</div>
      </main>
      <footer className={slots.footer()}>Acesso restrito à equipe do Clube Flex.</footer>
    </section>
  );
};

export { AuthFormPanel };
