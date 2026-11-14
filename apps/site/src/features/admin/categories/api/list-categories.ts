import { api } from '@/shared/lib/api-client';

const listCategories = () => api.GET('/admin/categories');

export { listCategories };
