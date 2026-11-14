import { api } from '@/shared/lib/api-client';

const listPlans = () => api.GET('/admin/plans');

export { listPlans };
