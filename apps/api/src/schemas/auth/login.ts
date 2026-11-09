import { z } from 'zod';

export const loginRequest = z
  .object({
    email: z.string().trim().email().max(320),
    password: z.string().min(1).max(72),
  })
  .strict();
