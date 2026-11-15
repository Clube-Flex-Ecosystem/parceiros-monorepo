import { Router } from 'express';

import { getCurrentUserController } from '../controllers/get-current-user.controller.js';
import { loginController } from '../controllers/login.controller.js';
import { logoutController } from '../controllers/logout.controller.js';
import { authenticated } from '../../../../../shared/infra/http/middlewares/authenticated.middleware.js';

export const authRoutes = Router();

authRoutes.post('/login', loginController);

authRoutes.post('/logout', authenticated, logoutController);

authRoutes.get('/me', authenticated, getCurrentUserController);
