import { z } from 'zod';

export const createPlanRequest = z
  .object({
    name: z.string().trim().min(1).max(120),
  })
  .strict();
