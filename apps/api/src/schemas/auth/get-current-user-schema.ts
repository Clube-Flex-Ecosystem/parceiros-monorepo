import { z } from 'zod';

export const getCurrentUserSchema = z
  .object({
    userId: z.string().trim().min(1),
  })
  .strict()
  .meta({
    id: 'GetCurrentUserInput',
    description: 'Identificador do administrador autenticado.',
  });
