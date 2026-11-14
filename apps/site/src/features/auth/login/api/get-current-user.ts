import { api } from '@/shared/lib/api-client';

const getCurrentUser = () => api.GET('/auth/me');

export { getCurrentUser };
