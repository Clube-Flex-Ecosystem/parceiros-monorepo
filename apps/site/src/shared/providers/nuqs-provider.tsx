import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { PropsWithChildren } from 'react';

const NuqsProvider = ({ children }: PropsWithChildren) => {
  return <NuqsAdapter>{children}</NuqsAdapter>;
};

export { NuqsProvider };
