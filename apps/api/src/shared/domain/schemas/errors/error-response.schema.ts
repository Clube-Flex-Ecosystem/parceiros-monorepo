import { z } from 'zod';

export const errorResponse = z
  .object({
    code: z.string(),
    message: z.string(),
  })
  .strict()
  .meta({ example: { code: 'VALIDATION_ERROR', message: 'Dados inválidos.' } });
