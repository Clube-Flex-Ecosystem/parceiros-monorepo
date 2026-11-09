import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import { AppError } from '../../domains/errors/app-error.js';

export const validateSchema = <TSchema extends z.ZodType>(
  body: unknown,
  schema: TSchema,
): z.output<TSchema> => {
  const result = schema.safeParse(body);

  if (!result.success) {
    throw new AppError(StatusCodes.UNPROCESSABLE_ENTITY, 'Invalid data.');
  }

  return result.data;
};
