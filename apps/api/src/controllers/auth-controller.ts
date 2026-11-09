import type { RequestHandler } from 'express';

import { StatusCodes } from 'http-status-codes';

import { cookie } from '../config/cookie.js';
import { env } from '../config/env.js';
import { formatResponse } from '../helpers/format-response.js';
import { validateSchema } from '../helpers/validate-schema.js';
import { BcryptHashProvider } from '../providers/bcrypt-hash-provider.js';
import { JsonwebtokenJwtProvider } from '../providers/jsonwebtoken-jwt-provider.js';
import { PrismaUserRepository } from '../repositories/prisma/user-repository.js';
import { loginRequest } from '../schemas/auth/login.js';
import { GetCurrentUserUseCase } from '../usecases/auth/get-current-user.js';
import { LoginUseCase } from '../usecases/auth/login.js';

const dependencies = {
  userRepository: new PrismaUserRepository(),
  hashProvider: new BcryptHashProvider(),
  jwtProvider: new JsonwebtokenJwtProvider(),
};

const authUseCases = {
  login: new LoginUseCase(
    dependencies.userRepository,
    dependencies.hashProvider,
    dependencies.jwtProvider,
  ),
  getCurrentUser: new GetCurrentUserUseCase(dependencies.userRepository),
};

const login: RequestHandler = async (request, response) => {
  const parsed = validateSchema(request.body, loginRequest);
  const result = await authUseCases.login.execute(parsed);
  const config = cookie(request, response);

  config.set(env.COOKIE_NAME, result.sessionToken, {
    expires: result.expiresAt,
    path: '/',
  });

  return response.status(StatusCodes.NO_CONTENT).send();
};

const getCurrentUser: RequestHandler = async (request, response) => {
  const result = await authUseCases.getCurrentUser.execute({ userId: request.userId });
  return response.status(StatusCodes.OK).json(formatResponse(result));
};

const logout: RequestHandler = (request, response) => {
  const config = cookie(request, response);
  config.delete(env.COOKIE_NAME, { path: '/' });
  return response.status(StatusCodes.NO_CONTENT).send();
};

export const authController = {
  login,
  getCurrentUser,
  logout,
};
