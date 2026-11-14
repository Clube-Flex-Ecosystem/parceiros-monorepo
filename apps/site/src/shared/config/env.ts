import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

const env = createEnv({
  server: {
    API_URL: z.url().default('http://localhost:8080'),
    PUBLIC_URL: z.url().default('http://localhost:3000'),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});

export { env };
