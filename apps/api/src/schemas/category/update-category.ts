import { z } from 'zod';

export const updateCategoryRequest = z
  .object({
    name: z.string().trim().min(1).max(120),
  })
  .strict();
