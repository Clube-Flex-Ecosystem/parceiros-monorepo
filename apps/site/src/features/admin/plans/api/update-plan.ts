import { api } from '@/shared/lib/api-client';
import type { paths } from '@/shared/lib/api-types';

type UpdatePlanBody = NonNullable<
  paths['/admin/plans/{id}']['patch']['requestBody']
>['content']['application/json'];

const updatePlan = (id: string, body: UpdatePlanBody) =>
  api.PATCH('/admin/plans/{id}', { params: { path: { id } }, body });

export { updatePlan };
