import { Router } from 'express';

import { authController } from '../controllers/auth-controller.js';
import { registry, errorContent } from '../http/docs/openapi.js';
import { authenticated } from '../http/middlewares/authenticated.js';
import { loginRequest } from '../schemas/auth/login.js';

export const authRoutes = Router();

registry.registerPath({
  method: 'post',
  path: '/auth/login',
  operationId: 'login',
  tags: ['Auth'],
  summary: 'Iniciar a sessão administrativa',
  request: {
    body: { content: { 'application/json': { schema: loginRequest } } },
  },
  responses: {
    204: { description: 'Sessão iniciada' },
    401: errorContent('Credencial inválida'),
    422: errorContent('Dados inválidos'),
  },
});
authRoutes.post('/login', authController.login);

registry.registerPath({
  method: 'post',
  path: '/auth/logout',
  operationId: 'logout',
  tags: ['Auth'],
  summary: 'Encerrar a sessão administrativa',
  responses: {
    204: { description: 'Sessão encerrada' },
    401: errorContent('Sessão ausente ou inválida'),
  },
});
authRoutes.post('/logout', authenticated, authController.logout);

registry.registerPath({
  method: 'get',
  path: '/auth/me',
  operationId: 'getCurrentUser',
  tags: ['Auth'],
  summary: 'Retornar o administrador autenticado',
  responses: {
    200: { description: 'Administrador autenticado' },
    401: errorContent('Sessão ausente ou inválida'),
  },
});
authRoutes.get('/me', authenticated, authController.getCurrentUser);
