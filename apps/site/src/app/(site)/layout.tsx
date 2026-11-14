import type { ReactNode } from 'react';

type SiteLayoutProps = {
  children: ReactNode;
};

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return <>{children}</>;
};

export default SiteLayout;
