import { api } from '@/shared/lib/api-client';

const deletePlan = (id: string) => api.DELETE('/admin/plans/{id}', { params: { path: { id } } });

export { deletePlan };
