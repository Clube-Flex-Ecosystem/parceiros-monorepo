import { api } from '@/shared/lib/api-client';
import type { paths } from '@/shared/lib/api-types';

type CreateCategoryBody = NonNullable<
  paths['/admin/categories']['post']['requestBody']
>['content']['application/json'];

const createCategory = (body: CreateCategoryBody) => api.POST('/admin/categories', { body });

export { createCategory };
