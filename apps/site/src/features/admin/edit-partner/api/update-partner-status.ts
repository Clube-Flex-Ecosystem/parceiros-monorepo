import { api } from '@/shared/lib/api-client';
import type { paths } from '@/shared/lib/api-types';

type UpdatePartnerStatusBody = NonNullable<
  paths['/admin/partners/{id}/status']['patch']['requestBody']
>['content']['application/json'];

const updatePartnerStatus = (id: string, body: UpdatePartnerStatusBody) =>
  api.PATCH('/admin/partners/{id}/status', { params: { path: { id } }, body });

export { updatePartnerStatus };
