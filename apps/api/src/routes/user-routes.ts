import { Router } from 'express';

import { userController } from '../controllers/user-controller.js';

export const userRoutes = Router();

userRoutes.post('/login', userController.login);
userRoutes.get('/me', userController.getMe);
