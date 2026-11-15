import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { env } from '../../../../../env.js';
import { cookie } from '../../../../../shared/helpers/cookie-manager.helper.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';

registry.registerPath({
  method: 'post',
  path: '/auth/logout',
  operationId: 'logout',
  tags: ['Auth'],
  summary: 'Encerrar a sessão administrativa',
  responses: {
    204: { description: 'Sessão encerrada' },
    401: {
      description: 'Sessão ausente ou inválida',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const logoutController: RequestHandler = (request, response) => {
  const config = cookie(request, response);
  config.delete(env.COOKIE_NAME, { path: '/' });
  return response.status(StatusCodes.NO_CONTENT).send();
};
