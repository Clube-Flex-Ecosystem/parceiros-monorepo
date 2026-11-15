import { z } from 'zod';

import { planItemResponse } from './create-plan.schema.js';

export const updatePlanRequest = z
  .object({
    name: z.string().trim().min(1).max(120),
  })
  .strict();

export const updatePlanResponse = planItemResponse;
