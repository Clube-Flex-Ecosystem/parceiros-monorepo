import { api } from '@/shared/lib/api-client';
import type { paths } from '@/shared/lib/api-types';

type UpdateCategoryBody = NonNullable<
  paths['/admin/categories/{id}']['patch']['requestBody']
>['content']['application/json'];

const updateCategory = (id: string, body: UpdateCategoryBody) =>
  api.PATCH('/admin/categories/{id}', { params: { path: { id } }, body });

export { updateCategory };
