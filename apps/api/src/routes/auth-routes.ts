import { Router } from 'express';

import { authController } from '../controllers/auth-controller.js';
import { authenticated } from '../http/middlewares/authenticated.js';

export const authRoutes = Router();

authRoutes.post('/login', authController.login);
authRoutes.post('/logout', authenticated, authController.logout);
authRoutes.get('/me', authenticated, authController.getCurrentUser);
