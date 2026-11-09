import { z } from 'zod';

export const updatePlanRequest = z
  .object({
    name: z.string().trim().min(1).max(120),
  })
  .strict();
