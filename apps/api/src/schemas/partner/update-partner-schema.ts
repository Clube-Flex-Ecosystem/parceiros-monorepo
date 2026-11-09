import { z } from 'zod';

import { partnerIdParamsSchema } from './partner-id-params-schema.js';
import { partnerInputSchema } from './partner-input-schema.js';

export const updatePartnerSchema = z
  .object({ params: partnerIdParamsSchema, body: partnerInputSchema })
  .meta({
    id: 'UpdatePartnerInput',
    description: 'Dados para atualizar um parceiro.',
  });
