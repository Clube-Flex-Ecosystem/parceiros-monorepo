import { rateLimit } from 'express-rate-limit';
import { StatusCodes } from 'http-status-codes';

import { AppError } from '../../domains/errors/app-error.js';

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: () => {
    return new AppError(StatusCodes.TOO_MANY_REQUESTS, 'Too many requests. Try again later.');
  },
});
