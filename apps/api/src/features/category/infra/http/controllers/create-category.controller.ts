import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CreateCategoryUseCase } from '../../../application/usecases/create-category.usecase.js';
import {
  categoryItemResponse,
  createCategoryRequest,
} from '../../../domain/schemas/create-category.schema.js';
import { PrismaCategoryRepository } from '../../repositories/prisma/category.repository.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';
import { validateSchema } from '../../../../../shared/helpers/validate-schema.helper.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

const createCategoryUseCase = new CreateCategoryUseCase(new PrismaCategoryRepository());

registry.registerPath({
  method: 'post',
  path: '/admin/categories',
  operationId: 'createCategory',
  tags: ['Categories'],
  summary: 'Criar categoria',
  request: { body: { content: { 'application/json': { schema: createCategoryRequest } } } },
  responses: {
    201: {
      description: 'Categoria criada',
      content: { 'application/json': { schema: categoryItemResponse } },
    },
    401: {
      description: 'Não autenticado',
      content: { 'application/json': { schema: errorResponse } },
    },
    409: {
      description: 'Já existe uma categoria com o mesmo nome',
      content: { 'application/json': { schema: errorResponse } },
    },
    422: {
      description: 'Dados inválidos',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const createCategoryController: RequestHandler = async (request, response) => {
  const parsed = validateSchema(request.body, createCategoryRequest);
  const { id, name } = await createCategoryUseCase.execute(parsed);

  const formattedResponse = formatResponse({ id, name });

  return response.status(StatusCodes.CREATED).json(formattedResponse);
};
