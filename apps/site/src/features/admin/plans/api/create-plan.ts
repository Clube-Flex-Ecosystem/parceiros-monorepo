import { api } from '@/shared/lib/api-client';
import type { paths } from '@/shared/lib/api-types';

type CreatePlanBody = NonNullable<
  paths['/admin/plans']['post']['requestBody']
>['content']['application/json'];

const createPlan = (body: CreatePlanBody) => api.POST('/admin/plans', { body });

export { createPlan };
