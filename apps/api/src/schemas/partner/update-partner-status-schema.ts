import { z } from 'zod';

import { partnerIdParamsSchema } from './partner-id-params-schema.js';
import { partnerStatusSchema } from './partner-status-schema.js';

export const updatePartnerStatusSchema = z
  .object({ params: partnerIdParamsSchema, body: partnerStatusSchema })
  .meta({
    id: 'UpdatePartnerStatusInput',
    description: 'Dados para alterar o estado de publicação do parceiro.',
  });
