import { z } from 'zod';

export const createCategoryRequest = z
  .object({
    name: z.string().trim().min(1).max(120),
  })
  .strict();
