import { Router } from 'express';

import { categoryController } from '../controllers/category-controller.js';
import { authenticated } from '../http/middlewares/authenticated.js';

export const categoryRoutes = Router();

categoryRoutes.use(authenticated);
categoryRoutes.get('/', categoryController.listCategories);
categoryRoutes.post('/', categoryController.createCategory);
categoryRoutes.patch('/:id', categoryController.updateCategory);
categoryRoutes.delete('/:id', categoryController.deleteCategory);
