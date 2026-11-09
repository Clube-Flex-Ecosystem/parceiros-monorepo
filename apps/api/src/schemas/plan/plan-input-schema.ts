import { z } from 'zod';

export const planInputSchema = z
  .object({
    name: z.string().trim().min(1).max(120),
  })
  .strict()
  .meta({
    id: 'PlanInput',
    description: 'Dados para criar ou atualizar um plano.',
  });
