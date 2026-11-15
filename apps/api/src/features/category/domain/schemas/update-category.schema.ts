import { z } from 'zod';

import { categoryItemResponse } from './create-category.schema.js';

export const updateCategoryRequest = z
  .object({
    name: z.string().trim().min(1).max(120),
  })
  .strict();

export const updateCategoryResponse = categoryItemResponse;
