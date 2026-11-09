import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { AppError } from '../../domains/errors/app-error.js';

export const notFoundHandler: RequestHandler = (_request, _response, next) => {
  next(new AppError(StatusCodes.NOT_FOUND));
};
