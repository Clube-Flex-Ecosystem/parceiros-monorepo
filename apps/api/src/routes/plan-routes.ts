import { Router } from 'express';
import { z } from 'zod';

import { planController } from '../controllers/plan-controller.js';
import { registry, errorContent } from '../http/docs/openapi.js';
import { authenticated } from '../http/middlewares/authenticated.js';
import { createPlanRequest } from '../schemas/plan/create-plan.js';
import { updatePlanRequest } from '../schemas/plan/update-plan.js';

export const planRoutes = Router();

const idParams = z.object({ id: z.string() });

planRoutes.use(authenticated);

registry.registerPath({
  method: 'get',
  path: '/admin/plans',
  operationId: 'listPlans',
  tags: ['Plans'],
  summary: 'Listar planos',
  responses: {
    200: { description: 'Planos listados' },
    401: errorContent('Não autenticado'),
  },
});
planRoutes.get('/', planController.listPlans);

registry.registerPath({
  method: 'post',
  path: '/admin/plans',
  operationId: 'createPlan',
  tags: ['Plans'],
  summary: 'Criar plan',
  request: {
    body: { content: { 'application/json': { schema: createPlanRequest } } },
  },
  responses: {
    201: { description: 'Plan criado' },
    401: errorContent('Não autenticado'),
    409: errorContent('Já existe um plano com o mesmo nome'),
    422: errorContent('Dados inválidos'),
  },
});
planRoutes.post('/', planController.createPlan);

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
    200: { description: 'Plan atualizado' },
    401: errorContent('Não autenticado'),
    404: errorContent('Plan não encontrado'),
    422: errorContent('Dados inválidos'),
  },
});
planRoutes.patch('/:id', planController.updatePlan);

registry.registerPath({
  method: 'delete',
  path: '/admin/plans/{id}',
  operationId: 'deletePlan',
  tags: ['Plans'],
  summary: 'Remover plan',
  request: { params: idParams },
  responses: {
    204: { description: 'Plan removido' },
    401: errorContent('Não autenticado'),
    404: errorContent('Plan não encontrado'),
    409: errorContent('Plano associado a descontos de parceiros'),
  },
});
planRoutes.delete('/:id', planController.deletePlan);
