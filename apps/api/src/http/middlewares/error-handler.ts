import type { ErrorRequestHandler } from 'express';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

import { AppError } from '../../domains/errors/app-error.js';

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  if (error instanceof AppError) {
    console.error(
      JSON.stringify({
        level: 'error',
        statusCode: error.statusCode,
        code: error.code,
        message: error.message,
      }),
    );

    response.status(error.statusCode).json({
      code: error.code,
      message: error.message,
    });

    return;
  }

  const statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  const code = getReasonPhrase(statusCode);

  console.error(
    JSON.stringify({
      level: 'error',
      statusCode,
      code,
      message: 'Unexpected error.',
    }),
  );

  response.status(statusCode).json({
    code,
    message: code,
  });
};
