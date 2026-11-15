import type { RequestHandler } from 'express';

import {
  createPartnerRequest,
  partnerItemResponse,
} from '../../../domain/schemas/create-partner.schema.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';
import { validateSchema } from '../../../../../shared/helpers/validate-schema.helper.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

registry.registerPath({
  method: 'post',
  path: '/admin/partners',
  operationId: 'createPartner',
  tags: ['Partners'],
  summary: 'Criar parceiro',
  request: { body: { content: { 'application/json': { schema: createPartnerRequest } } } },
  responses: {
    201: {
      description: 'Parceiro criado',
      content: { 'application/json': { schema: partnerItemResponse } },
    },
    401: {
      description: 'Não autenticado',
      content: { 'application/json': { schema: errorResponse } },
    },
    422: {
      description: 'Dados inválidos',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const createPartnerController: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, createPartnerRequest);
  void parsed;
  const formattedResponse = formatResponse({ ok: true });

  return response.status(201).json(formattedResponse);
};
