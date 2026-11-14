import { api } from '@/shared/lib/api-client';

const logout = () => api.POST('/auth/logout');

export { logout };
