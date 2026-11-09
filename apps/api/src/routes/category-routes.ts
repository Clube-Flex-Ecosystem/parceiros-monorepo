import { Router } from 'express';
import { z } from 'zod';

import { categoryController } from '../controllers/category-controller.js';
import { registry, errorContent } from '../http/docs/openapi.js';
import { authenticated } from '../http/middlewares/authenticated.js';
import { createCategoryRequest } from '../schemas/category/create-category.js';
import { updateCategoryRequest } from '../schemas/category/update-category.js';

export const categoryRoutes = Router();

const idParams = z.object({ id: z.string() });

categoryRoutes.use(authenticated);

registry.registerPath({
  method: 'get',
  path: '/admin/categories',
  operationId: 'listCategories',
  tags: ['Categories'],
  summary: 'Listar categorias',
  responses: {
    200: { description: 'Categorias listadas' },
    401: errorContent('Não autenticado'),
  },
});
categoryRoutes.get('/', categoryController.listCategories);

registry.registerPath({
  method: 'post',
  path: '/admin/categories',
  operationId: 'createCategory',
  tags: ['Categories'],
  summary: 'Criar category',
  request: {
    body: { content: { 'application/json': { schema: createCategoryRequest } } },
  },
  responses: {
    201: { description: 'Category criada' },
    401: errorContent('Não autenticado'),
    409: errorContent('Já existe uma categoria com o mesmo nome'),
    422: errorContent('Dados inválidos'),
  },
});
categoryRoutes.post('/', categoryController.createCategory);

registry.registerPath({
  method: 'patch',
  path: '/admin/categories/{id}',
  operationId: 'updateCategory',
  tags: ['Categories'],
  summary: 'Atualizar category',
  request: {
    params: idParams,
    body: { content: { 'application/json': { schema: updateCategoryRequest } } },
  },
  responses: {
    200: { description: 'Category atualizada' },
    401: errorContent('Não autenticado'),
    404: errorContent('Category não encontrada'),
    422: errorContent('Dados inválidos'),
  },
});
categoryRoutes.patch('/:id', categoryController.updateCategory);

registry.registerPath({
  method: 'delete',
  path: '/admin/categories/{id}',
  operationId: 'deleteCategory',
  tags: ['Categories'],
  summary: 'Remover category',
  request: { params: idParams },
  responses: {
    204: { description: 'Category removida' },
    401: errorContent('Não autenticado'),
    404: errorContent('Category não encontrada'),
    409: errorContent('Categoria associada a parceiros'),
  },
});
categoryRoutes.delete('/:id', categoryController.deleteCategory);
