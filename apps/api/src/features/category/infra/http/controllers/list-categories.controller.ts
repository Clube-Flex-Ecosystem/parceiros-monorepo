import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ListCategoriesUseCase } from '../../../application/usecases/list-categories.usecase.js';
import { categoryListResponse } from '../../../domain/schemas/create-category.schema.js';
import { PrismaCategoryRepository } from '../../repositories/prisma/category.repository.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

const listCategoriesUseCase = new ListCategoriesUseCase(new PrismaCategoryRepository());

registry.registerPath({
  method: 'get',
  path: '/admin/categories',
  operationId: 'listCategories',
  tags: ['Categories'],
  summary: 'Listar categorias',
  responses: {
    200: {
      description: 'Categorias listadas',
      content: { 'application/json': { schema: categoryListResponse } },
    },
    401: {
      description: 'Não autenticado',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const listCategoriesController: RequestHandler = async (_request, response) => {
  const result = await listCategoriesUseCase.execute();
  const categories = result.map(({ id, name }) => ({ id, name }));
  const formattedResponse = formatResponse(categories, { total: categories.length });

  return response.status(StatusCodes.OK).json(formattedResponse);
};
