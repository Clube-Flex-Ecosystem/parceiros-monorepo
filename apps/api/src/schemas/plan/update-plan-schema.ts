import { z } from 'zod';

import { planIdParamsSchema } from './plan-id-params-schema.js';
import { planInputSchema } from './plan-input-schema.js';

export const updatePlanSchema = z
  .object({ params: planIdParamsSchema, body: planInputSchema })
  .meta({
    id: 'UpdatePlanInput',
    description: 'Dados para atualizar um plano.',
  });
