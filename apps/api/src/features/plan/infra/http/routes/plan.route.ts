import { Router } from 'express';

import { createPlanController } from '../controllers/create-plan.controller.js';
import { deletePlanController } from '../controllers/delete-plan.controller.js';
import { listPlansController } from '../controllers/list-plans.controller.js';
import { updatePlanController } from '../controllers/update-plan.controller.js';
import { authenticated } from '../../../../../shared/infra/http/middlewares/authenticated.middleware.js';

export const planRoutes = Router();

planRoutes.use(authenticated);
planRoutes.get('/', listPlansController);
planRoutes.post('/', createPlanController);
planRoutes.patch('/:id', updatePlanController);
planRoutes.delete('/:id', deletePlanController);
