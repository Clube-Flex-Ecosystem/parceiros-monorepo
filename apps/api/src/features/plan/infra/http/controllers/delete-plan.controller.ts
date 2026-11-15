import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import { DeletePlanUseCase } from '../../../application/usecases/delete-plan.usecase.js';
import { PrismaPlanRepository } from '../../repositories/prisma/plan.repository.js';
import { PrismaPartnerPlanDiscountRepository } from '../../../../partner/infra/repositories/prisma/partner-plan-discount.repository.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

const deletePlanUseCase = new DeletePlanUseCase(
  new PrismaPlanRepository(),
  new PrismaPartnerPlanDiscountRepository(),
);
const idParams = z.object({ id: z.string() });

registry.registerPath({
  method: 'delete',
  path: '/admin/plans/{id}',
  operationId: 'deletePlan',
  tags: ['Plans'],
  summary: 'Remover plan',
  request: { params: idParams },
  responses: {
    204: { description: 'Plan removido' },
    401: {
      description: 'Não autenticado',
      content: { 'application/json': { schema: errorResponse } },
    },
    404: {
      description: 'Plan não encontrado',
      content: { 'application/json': { schema: errorResponse } },
    },
    409: {
      description: 'Plano associado a descontos de parceiros',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const deletePlanController: RequestHandler<{ id: string }> = async (request, response) => {
  await deletePlanUseCase.execute({ id: request.params.id });
  return response.status(StatusCodes.NO_CONTENT).send();
};
