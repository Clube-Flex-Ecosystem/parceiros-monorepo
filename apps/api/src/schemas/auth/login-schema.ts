import { z } from 'zod';

export const loginSchema = z
  .object({
    email: z.string().trim().email().max(320),
    password: z.string().min(1).max(72),
  })
  .strict()
  .meta({
    id: 'LoginInput',
    description: 'Dados da credencial administrativa.',
  });
