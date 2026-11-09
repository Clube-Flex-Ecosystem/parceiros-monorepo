import { Router } from 'express';

import { authRoutes } from './auth-routes.js';
import { categoryRoutes } from './category-routes.js';
import { planRoutes } from './plan-routes.js';
import { partnerRoutes } from './partner-routes.js';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/admin/categories', categoryRoutes);
routes.use('/admin/plans', planRoutes);
routes.use('/admin/partners', partnerRoutes);

export { routes };
