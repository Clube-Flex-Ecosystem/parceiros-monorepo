import type { RequestHandler } from 'express';

import { deletePlanSchema } from '../schemas/plan/delete-plan-schema.js';
import { planInputSchema } from '../schemas/plan/plan-input-schema.js';
import { listPlansSchema } from '../schemas/plan/list-plans-schema.js';
import { updatePlanSchema } from '../schemas/plan/update-plan-schema.js';
import { validateSchema } from '../helpers/validate-schema.js';

const listPlans: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.query, listPlansSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

const createPlan: RequestHandler = (request, response) => {
  const parsed = validateSchema(request.body, planInputSchema);

  void parsed;

  return response.status(201).json({ ok: true });
};

const updatePlan: RequestHandler = (request, response) => {
  const parsed = validateSchema({ params: request.params, body: request.body }, updatePlanSchema);

  void parsed;

  return response.status(200).json({ ok: true });
};

const deletePlan: RequestHandler = (request, response) => {
  const parsed = validateSchema({ params: request.params }, deletePlanSchema);

  void parsed;

  return response.status(204).send();
};

export const planController = {
  listPlans,
  createPlan,
  updatePlan,
  deletePlan,
};
