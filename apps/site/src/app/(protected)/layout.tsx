import type { ReactNode } from 'react';

type ProtectedLayoutProps = {
  children: ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return <>{children}</>;
};

export default ProtectedLayout;
