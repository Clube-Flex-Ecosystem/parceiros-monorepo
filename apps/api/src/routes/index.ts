import { Router } from 'express';

import { adminPartnerRoutes, partnerRoutes } from './partner-routes.js';
import { categoryRoutes } from './category-routes.js';
import { planRoutes } from './plan-routes.js';
import { userRoutes } from './user-routes.js';

const routes = Router();

routes.use('/auth', userRoutes);
routes.use('/admin/partners', adminPartnerRoutes);
routes.use('/admin/categories', categoryRoutes);
routes.use('/admin/plans', planRoutes);
routes.use('/partners', partnerRoutes);

export { routes };
