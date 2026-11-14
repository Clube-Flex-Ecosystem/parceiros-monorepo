import type { RequestHandler } from 'express';

import { StatusCodes } from 'http-status-codes';

import { cookie } from '../../config/cookie.js';
import { env } from '../../config/env.js';
import { BaseError } from '../../domains/errors/base-error.js';
import { JsonwebtokenJwtProvider } from '../../providers/jsonwebtoken-jwt-provider.js';

const jwtProvider = new JsonwebtokenJwtProvider(env.JWT_SECRET);

export const authenticated: RequestHandler = (request, response, next) => {
  const sessionToken = cookie(request, response).get(env.COOKIE_NAME);

  if (!sessionToken) {
    throw new BaseError(StatusCodes.UNAUTHORIZED, 'Sessão ausente ou inválida.');
  }

  const payload = jwtProvider.verify(sessionToken);

  if (typeof payload.sub !== 'string') {
    throw new BaseError(StatusCodes.UNAUTHORIZED, 'Sessão ausente ou inválida.');
  }

  request.userId = payload.sub;

  next();
};
