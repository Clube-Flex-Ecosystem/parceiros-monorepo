import { createEnv } from '@t3-oss/env-core';

import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import { AppError } from '../../domains/errors/app-error.js';

const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    PORT: z.coerce.number().int().min(1).max(65_535).default(3000),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
  onValidationError: () => {
    throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Invalid environment variables.');
  },
});

export { env };
