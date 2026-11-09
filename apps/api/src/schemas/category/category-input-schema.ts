import { z } from 'zod';

export const categoryInputSchema = z
  .object({
    name: z.string().trim().min(1).max(120),
  })
  .strict()
  .meta({
    id: 'CategoryInput',
    description: 'Dados para criar ou atualizar uma categoria.',
  });
