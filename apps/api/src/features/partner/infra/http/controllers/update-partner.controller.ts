import type { RequestHandler } from 'express';
import { z } from 'zod';

import { partnerItemResponse } from '../../../domain/schemas/create-partner.schema.js';
import { updatePartnerRequest } from '../../../domain/schemas/update-partner.schema.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';
import { validateSchema } from '../../../../../shared/helpers/validate-schema.helper.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

const idParams = z.object({ id: z.string() });

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
    200: {
      description: 'Parceiro atualizado',
      content: { 'application/json': { schema: partnerItemResponse } },
    },
    401: {
      description: 'Não autenticado',
      content: { 'application/json': { schema: errorResponse } },
    },
    404: {
      description: 'Parceiro não encontrado',
      content: { 'application/json': { schema: errorResponse } },
    },
    422: {
      description: 'Dados inválidos',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const updatePartnerController: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, updatePartnerRequest);
  void parsed;
  const formattedResponse = formatResponse({ ok: true });

  return response.status(200).json(formattedResponse);
};
