import { api } from '@/shared/lib/api-client';
import type { paths } from '@/shared/lib/api-types';

type UpdatePartnerBody = NonNullable<
  paths['/admin/partners/{id}']['patch']['requestBody']
>['content']['application/json'];

const updatePartner = (id: string, body: UpdatePartnerBody) =>
  api.PATCH('/admin/partners/{id}', { params: { path: { id } }, body });

export { updatePartner };
