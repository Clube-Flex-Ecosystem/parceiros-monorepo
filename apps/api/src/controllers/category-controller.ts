import type { RequestHandler } from 'express';

import { listCategoriesSchema } from '../schemas/category-schema.js';
import { validateSchema } from '../validations/zod/validate-schema.js';

const listCategories: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.query, listCategoriesSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

export const categoryController = {
  listCategories,
};
