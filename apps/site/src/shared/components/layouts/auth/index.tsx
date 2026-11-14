import type { PropsWithChildren } from 'react';

import { tv } from '@/shared/lib/tv';

import { AuthFormPanel } from './auth-form-panel';
import { AuthShowcasePanel } from './auth-showcase-panel';

const authLayoutVariants = tv({
  base: 'grid min-h-dvh gap-3 bg-background p-3 lg:grid-cols-2 lg:gap-4 lg:p-4',
});

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={authLayoutVariants()}>
      <AuthFormPanel>{children}</AuthFormPanel>
      <AuthShowcasePanel />
    </div>
  );
};

export { AuthLayout };
