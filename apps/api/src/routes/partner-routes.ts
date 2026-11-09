import { Router } from 'express';
import { z } from 'zod';

import { partnerController } from '../controllers/partner-controller.js';
import { registry, errorContent } from '../http/docs/openapi.js';
import { createPartnerRequest } from '../schemas/partner/create-partner.js';
import { updatePartnerRequest } from '../schemas/partner/update-partner.js';
import { updatePartnerStatusRequest } from '../schemas/partner/update-partner-status.js';

export const partnerRoutes = Router();

const idParams = z.object({ id: z.string() });

registry.registerPath({
  method: 'post',
  path: '/admin/partners',
  operationId: 'createPartner',
  tags: ['Partners'],
  summary: 'Criar parceiro',
  request: {
    body: { content: { 'application/json': { schema: createPartnerRequest } } },
  },
  responses: {
    201: { description: 'Parceiro criado' },
    401: errorContent('Não autenticado'),
    422: errorContent('Dados inválidos'),
  },
});
partnerRoutes.post('/', partnerController.createPartner);

registry.registerPath({
  method: 'patch',
  path: '/admin/partners/{id}',
  operationId: 'updatePartner',
  tags: ['Partners'],
  summary: 'Atualizar parceiro',
  request: {
    params: idParams,
    body: { content: { 'application/json': { schema: updatePartnerRequest } } },
  },
  responses: {
    200: { description: 'Parceiro atualizado' },
    401: errorContent('Não autenticado'),
    404: errorContent('Parceiro não encontrado'),
    422: errorContent('Dados inválidos'),
  },
});
partnerRoutes.patch('/:id', partnerController.updatePartner);

registry.registerPath({
  method: 'patch',
  path: '/admin/partners/{id}/status',
  operationId: 'updatePartnerStatus',
  tags: ['Partners'],
  summary: 'Alterar o estado de publicação do parceiro',
  request: {
    params: idParams,
    body: { content: { 'application/json': { schema: updatePartnerStatusRequest } } },
  },
  responses: {
    200: { description: 'Estado do parceiro atualizado' },
    401: errorContent('Não autenticado'),
    404: errorContent('Parceiro não encontrado'),
    422: errorContent('Transição de estado ou publicação inválida'),
  },
});
partnerRoutes.patch('/:id/status', partnerController.updatePartnerStatus);

partnerRoutes.get('/', partnerController.listPartners);
partnerRoutes.get('/:slug', partnerController.getPartner);
