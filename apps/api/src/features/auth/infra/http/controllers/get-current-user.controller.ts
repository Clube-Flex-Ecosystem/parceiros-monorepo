import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { formatResponse } from '../../../../../shared/helpers/format-response.helper.js';
import { errorResponse } from '../../../../../shared/domain/schemas/errors/error-response.schema.js';
import { registry } from '../../../../../shared/infra/http/docs/openapi.js';
import { PrismaUserRepository } from '../../repositories/prisma/user.repository.js';
import { GetCurrentUserUseCase } from '../../../application/usecases/get-current-user.usecase.js';
import { currentUserResponse } from '../../../domain/schemas/login.schema.js';

const getCurrentUserUseCase = new GetCurrentUserUseCase(new PrismaUserRepository());

registry.registerPath({
  method: 'get',
  path: '/auth/me',
  operationId: 'getCurrentUser',
  tags: ['Auth'],
  summary: 'Retornar o administrador autenticado',

  responses: {
    200: {
      description: 'Administrador autenticado',
      content: { 'application/json': { schema: currentUserResponse } },
    },
    401: {
      description: 'Sessão ausente ou inválida',
      content: { 'application/json': { schema: errorResponse } },
    },
  },
});

export const getCurrentUserController: RequestHandler = async (request, response) => {
  const { id, createdAt, email, name, updatedAt } = await getCurrentUserUseCase.execute({
    userId: request.userId,
  });

  const formattedResponse = formatResponse({ id, createdAt, email, name, updatedAt });

  return response.status(StatusCodes.OK).json(formattedResponse);
};
