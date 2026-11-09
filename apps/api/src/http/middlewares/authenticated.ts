import type { RequestHandler } from 'express';

import { StatusCodes } from 'http-status-codes';

import { cookie } from '../../config/cookie.js';
import { env } from '../../config/env.js';
import { AppError } from '../../domains/errors/app-error.js';
import { JsonwebtokenJwtProvider } from '../../providers/jsonwebtoken-jwt-provider.js';

const jwtProvider = new JsonwebtokenJwtProvider(env.JWT_SECRET);

export const authenticated: RequestHandler = (request, response, next) => {
  const sessionToken = cookie(request, response).get(env.COOKIE_NAME);

  if (!sessionToken) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Sessão ausente ou inválida.');
  }

  const payload = jwtProvider.verify(sessionToken);

  if (typeof payload.sub !== 'string') {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Sessão ausente ou inválida.');
  }

  request.userId = payload.sub;

  next();
};
