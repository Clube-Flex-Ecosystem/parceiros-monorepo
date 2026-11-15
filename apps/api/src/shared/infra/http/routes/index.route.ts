import { Router } from 'express';

import { categoryRoutes } from '../../../../features/category/infra/http/routes/category.route.js';
import { planRoutes } from '../../../../features/plan/infra/http/routes/plan.route.js';
import { partnerRoutes } from '../../../../features/partner/infra/http/routes/partner.route.js';
import { authRoutes } from '../../../../features/auth/infra/http/routes/auth.route.js';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/admin/categories', categoryRoutes);
routes.use('/admin/plans', planRoutes);
routes.use('/admin/partners', partnerRoutes);

export { routes };
