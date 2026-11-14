import { api } from '@/shared/lib/api-client';
import type { paths } from '@/shared/lib/api-types';

type LoginBody = NonNullable<
  paths['/auth/login']['post']['requestBody']
>['content']['application/json'];

const login = (body: LoginBody) => api.POST('/auth/login', { body });

export { login };
