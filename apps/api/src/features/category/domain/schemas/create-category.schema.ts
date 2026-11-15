import { z } from 'zod';

export const createCategoryRequest = z
  .object({
    name: z.string().trim().min(1).max(120),
  })
  .strict();

export const categoryResponse = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .strict()
  .meta({ example: { id: 'category-1', name: 'Academias' } });

export const categoryItemResponse = z.object({ data: categoryResponse }).strict();

export const categoryListResponse = z
  .object({
    data: z.array(categoryResponse),
    meta: z.object({ total: z.number().int() }),
  })
  .strict();
