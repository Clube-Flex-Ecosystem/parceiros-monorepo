import type { RequestHandler } from 'express';

import { categoryInputSchema } from '../schemas/category/category-input-schema.js';
import { deleteCategorySchema } from '../schemas/category/delete-category-schema.js';
import { listCategoriesSchema } from '../schemas/category/list-categories-schema.js';
import { updateCategorySchema } from '../schemas/category/update-category-schema.js';
import { validateSchema } from '../helpers/validate-schema.js';

const listCategories: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.query, listCategoriesSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

const createCategory: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, categoryInputSchema);

  void parsed;

  return response.status(201).json({ ok: true });
};

const updateCategory: RequestHandler = (request, response) => {
  const parsed = validateSchema(
    { params: request.params, body: request.body },
    updateCategorySchema,
  );

  void parsed;

  return response.status(200).json({ ok: true });
};

const deleteCategory: RequestHandler = (request, response) => {
  const parsed = validateSchema({ params: request.params }, deleteCategorySchema);

  void parsed;

  return response.status(204).send();
};

export const categoryController = {
  listCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
