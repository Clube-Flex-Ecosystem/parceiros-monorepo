import { createEnv } from '@t3-oss/env-core';

import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';

import { AppError } from '../domains/errors/app-error.js';

const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    PORT: z.coerce.number().int().min(1).max(65_535).default(3000),
    COOKIE_NAME: z.string().trim().min(1).default('flex.session'),
    COOKIE_EXPIRES_DAYS: z.coerce.number().positive().default(7),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
  onValidationError: () => {
    throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Invalid environment variables.');
  },
});

export { env };
