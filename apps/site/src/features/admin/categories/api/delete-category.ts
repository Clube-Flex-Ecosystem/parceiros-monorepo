import { api } from '@/shared/lib/api-client';

const deleteCategory = (id: string) =>
  api.DELETE('/admin/categories/{id}', { params: { path: { id } } });

export { deleteCategory };
