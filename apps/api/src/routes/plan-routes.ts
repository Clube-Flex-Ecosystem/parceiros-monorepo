import { Router } from 'express';

import { planController } from '../controllers/plan-controller.js';
import { authenticated } from '../http/middlewares/authenticated.js';

export const planRoutes = Router();

planRoutes.use(authenticated);
planRoutes.get('/', planController.listPlans);
planRoutes.post('/', planController.createPlan);
planRoutes.patch('/:id', planController.updatePlan);
planRoutes.delete('/:id', planController.deletePlan);
