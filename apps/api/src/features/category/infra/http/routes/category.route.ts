import { Router } from 'express';

import { createCategoryController } from '../controllers/create-category.controller.js';
import { deleteCategoryController } from '../controllers/delete-category.controller.js';
import { listCategoriesController } from '../controllers/list-categories.controller.js';
import { updateCategoryController } from '../controllers/update-category.controller.js';
import { authenticated } from '../../../../../shared/infra/http/middlewares/authenticated.middleware.js';

export const categoryRoutes = Router();

categoryRoutes.use(authenticated);
categoryRoutes.get('/', listCategoriesController);
categoryRoutes.post('/', createCategoryController);
categoryRoutes.patch('/:id', updateCategoryController);
categoryRoutes.delete('/:id', deleteCategoryController);
