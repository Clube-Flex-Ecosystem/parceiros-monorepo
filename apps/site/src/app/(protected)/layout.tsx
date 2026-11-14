import { cookies } from 'next/headers';
import type { PropsWithChildren } from 'react';

import { getCurrentUser } from '@/features/auth/login/api/get-current-user';
import { ProtectedLayout } from '@/shared/components/layouts/protected';

const ProtectedRouteLayout = async ({ children }: PropsWithChildren) => {
  const user = {
    email: 'admin@clubeflex.com',
    name: 'Admin',
  };
  
  return <ProtectedLayout user={user}>{children}</ProtectedLayout>;
};

export default ProtectedRouteLayout;
