import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import { DeleteCategoryUseCase } from '../../../application/usecases/delete-category.usecase.js';
import { PrismaCategoryRepository } from '../../repositories/prisma/category.repository.js';
import { PrismaPartnerRepository } from '../../../../partner/infra/repositories/prisma/partner.repository.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

const deleteCategoryUseCase = new DeleteCategoryUseCase(
  new PrismaCategoryRepository(),
  new PrismaPartnerRepository(),
);
const idParams = z.object({ id: z.string() });

registry.registerPath({
  method: 'delete',
  path: '/admin/categories/{id}',
  operationId: 'deleteCategory',
  tags: ['Categories'],
  summary: 'Remover category',
  request: { params: idParams },
  responses: {
    204: { description: 'Category removida' },
    401: {
      description: 'Não autenticado',
      content: { 'application/json': { schema: errorResponse } },
    },
    404: {
      description: 'Category não encontrada',
      content: { 'application/json': { schema: errorResponse } },
    },
    409: {
      description: 'Categoria associada a parceiros',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const deleteCategoryController: RequestHandler<{ id: string }> = async (
  request,
  response,
) => {
  await deleteCategoryUseCase.execute({ id: request.params.id });
  return response.status(StatusCodes.NO_CONTENT).send();
};
