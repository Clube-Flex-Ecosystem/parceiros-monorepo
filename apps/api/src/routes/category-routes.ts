import { Router } from 'express';

import { categoryController } from '../controllers/category-controller.js';

export const categoryRoutes = Router();

categoryRoutes.get('/', categoryController.listCategories);
categoryRoutes.post('/', categoryController.createCategory);
categoryRoutes.patch('/:id', categoryController.updateCategory);
categoryRoutes.delete('/:id', categoryController.deleteCategory);
