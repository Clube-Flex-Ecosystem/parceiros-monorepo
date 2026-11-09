import { z } from 'zod';

import { planIdParamsSchema } from './plan-id-params-schema.js';

export const deletePlanSchema = z.object({ params: planIdParamsSchema }).meta({
  id: 'DeletePlanInput',
  description: 'Dados para remover um plano.',
});
