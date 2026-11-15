import type { RequestHandler } from 'express';
import { z } from 'zod';

import { partnerItemResponse } from '../../../domain/schemas/create-partner.schema.js';
import { updatePartnerStatusRequest } from '../../../domain/schemas/update-partner-status.schema.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';
import { validateSchema } from '../../../../../shared/helpers/validate-schema.helper.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

const idParams = z.object({ id: z.string() });

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
    200: {
      description: 'Estado do parceiro atualizado',
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
      description: 'Transição de estado ou publicação inválida',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const updatePartnerStatusController: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, updatePartnerStatusRequest);
  void parsed;
  const formattedResponse = formatResponse({ ok: true });

  return response.status(200).json(formattedResponse);
};
