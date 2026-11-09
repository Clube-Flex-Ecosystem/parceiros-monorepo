import type { RequestHandler } from 'express';

import { categoryInputSchema } from '../schemas/category/category-input-schema.js';
import { deleteCategorySchema } from '../schemas/category/delete-category-schema.js';
import { listCategoriesSchema } from '../schemas/category/list-categories-schema.js';
import { updateCategorySchema } from '../schemas/category/update-category-schema.js';
import { validateSchema } from '../helpers/validate-schema.js';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes.js';

const listCategories: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.query, listCategoriesSchema);

  void parsed;

  return response.status(StatusCodes.OK).json({ ok: true });
};

const createCategory: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, categoryInputSchema);

  void parsed;

  return response.status(StatusCodes.CREATED).json({ ok: true });
};

const updateCategory: RequestHandler = (request, response) => {
  const parsed = validateSchema(
    { params: request.params, body: request.body },
    updateCategorySchema,
  );

  void parsed;

  return response.status(StatusCodes.OK).json({ ok: true });
};

const deleteCategory: RequestHandler = (request, response) => {
  const parsed = validateSchema({ params: request.params }, deleteCategorySchema);

  void parsed;

  return response.status(StatusCodes.NO_CONTENT).send();
};

export const categoryController = {
  listCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
