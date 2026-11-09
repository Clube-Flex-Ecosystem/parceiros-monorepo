import type { RequestHandler } from 'express';

import { getCurrentUserSchema, loginSchema } from '../schemas/user-schema.js';
import { validateSchema } from '../validations/zod/validate-schema.js';

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

export const userController = {
  login,
  getMe,
};
