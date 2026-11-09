import type { RequestHandler } from 'express';

import { listPlansSchema } from '../schemas/plan-schema.js';
import { validateSchema } from '../validations/zod/validate-schema.js';

const listPlans: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.query, listPlansSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

export const planController = {
  listPlans,
};
