import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { env } from '../../../../../env.js';
import { cookie } from '../../../../../shared/helpers/cookie-manager.helper.js';
import { validateSchema } from '../../../../../shared/helpers/validate-schema.helper.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';
import { BcryptHashProvider } from '../../../../../shared/infra/providers/bcrypt-hash.provider.js';
import { JsonwebtokenJwtProvider } from '../../../../../shared/infra/providers/jsonwebtoken-jwt.provider.js';
import { PrismaUserRepository } from '../../repositories/prisma/user.repository.js';
import { LoginUseCase } from '../../../application/usecases/login.usecase.js';
import { loginRequest } from '../../../domain/schemas/login.schema.js';

const loginUseCase = new LoginUseCase(
  new PrismaUserRepository(),
  new BcryptHashProvider(),
  new JsonwebtokenJwtProvider(),
);

registry.registerPath({
  method: 'post',
  path: '/auth/login',
  operationId: 'login',
  tags: ['Auth'],
  summary: 'Iniciar a sessão administrativa',
  request: {
    body: { content: { 'application/json': { schema: loginRequest } } },
  },
  responses: {
    204: { description: 'Sessão iniciada' },
    401: {
      description: 'Credencial inválida',
      content: { 'application/json': { schema: errorResponse } },
    },
    422: {
      description: 'Dados inválidos',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const loginController: RequestHandler = async (request, response) => {
  const parsed = validateSchema(request.body, loginRequest);
  const result = await loginUseCase.execute(parsed);
  const config = cookie(request, response);

  config.set(env.COOKIE_NAME, result.sessionToken, {
    expires: result.expiresAt,
    path: '/',
  });

  return response.status(StatusCodes.NO_CONTENT).send();
};
