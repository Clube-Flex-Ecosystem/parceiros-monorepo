import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import { UpdatePlanUseCase } from '../../../application/usecases/update-plan.usecase.js';
import {
  updatePlanRequest,
  updatePlanResponse,
} from '../../../domain/schemas/update-plan.schema.js';
import { PrismaPlanRepository } from '../../repositories/prisma/plan.repository.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';
import { validateSchema } from '../../../../../shared/helpers/validate-schema.helper.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

const updatePlanUseCase = new UpdatePlanUseCase(new PrismaPlanRepository());
const idParams = z.object({ id: z.string() });

registry.registerPath({
  method: 'patch',
  path: '/admin/plans/{id}',
  operationId: 'updatePlan',
  tags: ['Plans'],
  summary: 'Atualizar plan',
  request: {
    params: idParams,
    body: { content: { 'application/json': { schema: updatePlanRequest } } },
  },
  responses: {
    200: {
      description: 'Plan atualizado',
      content: { 'application/json': { schema: updatePlanResponse } },
    },
    401: {
      description: 'Não autenticado',
      content: { 'application/json': { schema: errorResponse } },
    },
    404: {
      description: 'Plan não encontrado',
      content: { 'application/json': { schema: errorResponse } },
    },
    422: {
      description: 'Dados inválidos',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const updatePlanController: RequestHandler<{ id: string }> = async (request, response) => {
  const parsed = validateSchema(request.body, updatePlanRequest);
  const { id, name } = await updatePlanUseCase.execute({
    id: request.params.id,
    name: parsed.name,
  });
  const formattedResponse = formatResponse({ id, name });

  return response.status(StatusCodes.OK).json(formattedResponse);
};
