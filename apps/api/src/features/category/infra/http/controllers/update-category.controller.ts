import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import { UpdateCategoryUseCase } from '../../../application/usecases/update-category.usecase.js';
import {
  updateCategoryRequest,
  updateCategoryResponse,
} from '../../../domain/schemas/update-category.schema.js';
import { PrismaCategoryRepository } from '../../repositories/prisma/category.repository.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';
import { validateSchema } from '../../../../../shared/helpers/validate-schema.helper.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

const updateCategoryUseCase = new UpdateCategoryUseCase(new PrismaCategoryRepository());
const idParams = z.object({ id: z.string() });

registry.registerPath({
  method: 'patch',
  path: '/admin/categories/{id}',
  operationId: 'updateCategory',
  tags: ['Categories'],
  summary: 'Atualizar category',
  request: {
    params: idParams,
    body: { content: { 'application/json': { schema: updateCategoryRequest } } },
  },
  responses: {
    200: {
      description: 'Category atualizada',
      content: { 'application/json': { schema: updateCategoryResponse } },
    },
    401: {
      description: 'Não autenticado',
      content: { 'application/json': { schema: errorResponse } },
    },
    404: {
      description: 'Category não encontrada',
      content: { 'application/json': { schema: errorResponse } },
    },
    422: {
      description: 'Dados inválidos',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const updateCategoryController: RequestHandler<{ id: string }> = async (
  request,
  response,
) => {
  const parsed = validateSchema(request.body, updateCategoryRequest);
  const { id, name } = await updateCategoryUseCase.execute({
    id: request.params.id,
    name: parsed.name,
  });
  const formattedResponse = formatResponse({ id, name });

  return response.status(StatusCodes.OK).json(formattedResponse);
};
