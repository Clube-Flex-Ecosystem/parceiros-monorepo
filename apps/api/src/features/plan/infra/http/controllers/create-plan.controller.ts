import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CreatePlanUseCase } from '../../../application/usecases/create-plan.usecase.js';
import { createPlanRequest, planItemResponse } from '../../../domain/schemas/create-plan.schema.js';
import { PrismaPlanRepository } from '../../repositories/prisma/plan.repository.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';
import { validateSchema } from '../../../../../shared/helpers/validate-schema.helper.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

const createPlanUseCase = new CreatePlanUseCase(new PrismaPlanRepository());

registry.registerPath({
  method: 'post',
  path: '/admin/plans',
  operationId: 'createPlan',
  tags: ['Plans'],
  summary: 'Criar plan',
  request: { body: { content: { 'application/json': { schema: createPlanRequest } } } },
  responses: {
    201: {
      description: 'Plan criado',
      content: { 'application/json': { schema: planItemResponse } },
    },
    401: {
      description: 'Não autenticado',
      content: { 'application/json': { schema: errorResponse } },
    },
    409: {
      description: 'Já existe um plano com o mesmo nome',
      content: { 'application/json': { schema: errorResponse } },
    },
    422: {
      description: 'Dados inválidos',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const createPlanController: RequestHandler = async (request, response) => {
  const parsed = validateSchema(request.body, createPlanRequest);
  const { id, name } = await createPlanUseCase.execute(parsed);
  const formattedResponse = formatResponse({ id, name });

  return response.status(StatusCodes.CREATED).json(formattedResponse);
};
