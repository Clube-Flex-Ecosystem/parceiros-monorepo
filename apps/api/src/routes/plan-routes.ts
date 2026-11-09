import { Router } from 'express';

import { planController } from '../controllers/plan-controller.js';

export const planRoutes = Router();

planRoutes.get('/', planController.listPlans);
