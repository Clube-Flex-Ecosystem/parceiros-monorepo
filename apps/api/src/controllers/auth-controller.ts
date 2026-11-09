import type { RequestHandler } from 'express';

import { getCurrentUserSchema } from '../schemas/auth/get-current-user-schema.js';
import { loginSchema } from '../schemas/auth/login-schema.js';
import { validateSchema } from '../helpers/validate-schema.js';

const login: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, loginSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

const getMe: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.query, getCurrentUserSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

export const authController = {
  login,
  getMe,
};
