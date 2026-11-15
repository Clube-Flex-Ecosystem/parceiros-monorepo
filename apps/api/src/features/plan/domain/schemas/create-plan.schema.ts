import { z } from 'zod';

export const createPlanRequest = z
  .object({
    name: z.string().trim().min(1).max(120),
  })
  .strict();

export const planResponse = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .strict()
  .meta({ example: { id: 'plan-1', name: 'Plano Premium' } });

export const planItemResponse = z.object({ data: planResponse }).strict();

export const planListResponse = z
  .object({
    data: z.array(planResponse),
    meta: z.object({ total: z.number().int() }),
  })
  .strict();
