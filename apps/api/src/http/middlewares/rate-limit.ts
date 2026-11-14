import { rateLimit } from 'express-rate-limit';
import { StatusCodes } from 'http-status-codes';

import { BaseError } from '../../domains/errors/base-error.js';

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: () => {
    return new BaseError(StatusCodes.TOO_MANY_REQUESTS, 'Too many requests. Try again later.');
  },
});
