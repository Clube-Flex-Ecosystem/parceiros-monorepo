import type { RequestHandler } from 'express';

import { getCurrentUserSchema } from '../schemas/auth/get-current-user-schema.js';
import { loginSchema } from '../schemas/auth/login-schema.js';
import { validateSchema } from '../helpers/validate-schema.js';
import { LoginUseCase } from '../usecases/auth/login.js';
import { cookie } from '../config/cookie.js';
import { StatusCodes } from 'http-status-codes';

const login: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, loginSchema);

  void parsed;

  return response.status(StatusCodes.OK).json({ ok: true });
};

const getMe: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.query, getCurrentUserSchema);

  void parsed;

  return response.status(StatusCodes.OK).json({ ok: true });
};

const logout: RequestHandler = (request, response) => {
  const config = cookie(request, response);
  config.delete('flex-session', { path: '/' });

  return response.status(StatusCodes.NO_CONTENT).send();
};

export const authController = {
  login,
  getMe,
  logout,
};
