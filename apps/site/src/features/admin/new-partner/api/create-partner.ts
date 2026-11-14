import { api } from '@/shared/lib/api-client';
import type { paths } from '@/shared/lib/api-types';

type CreatePartnerBody = NonNullable<
  paths['/admin/partners']['post']['requestBody']
>['content']['application/json'];

const createPartner = (body: CreatePartnerBody) => api.POST('/admin/partners', { body });

export { createPartner };
