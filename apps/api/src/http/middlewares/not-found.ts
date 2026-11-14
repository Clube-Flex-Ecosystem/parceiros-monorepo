import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

import { BaseError } from '../../domains/errors/base-error.js';

export const notFoundHandler: RequestHandler = (_request, _response, next) => {
  next(new BaseError(StatusCodes.NOT_FOUND));
};
