import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ListPlansUseCase } from '../../../application/usecases/list-plans.usecase.js';
import { planListResponse } from '../../../domain/schemas/create-plan.schema.js';
import { PrismaPlanRepository } from '../../repositories/prisma/plan.repository.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

const listPlansUseCase = new ListPlansUseCase(new PrismaPlanRepository());

registry.registerPath({
  method: 'get',
  path: '/admin/plans',
  operationId: 'listPlans',
  tags: ['Plans'],
  summary: 'Listar planos',
  responses: {
    200: {
      description: 'Planos listados',
      content: { 'application/json': { schema: planListResponse } },
    },
    401: {
      description: 'Não autenticado',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const listPlansController: RequestHandler = async (_request, response) => {
  const result = await listPlansUseCase.execute();
  const plans = result.map(({ id, name }) => ({ id, name }));
  const formattedResponse = formatResponse(plans, { total: plans.length });

  return response.status(StatusCodes.OK).json(formattedResponse);
};
