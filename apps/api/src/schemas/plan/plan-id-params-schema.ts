import { z } from 'zod';

export const planIdParamsSchema = z
  .object({ id: z.string().min(1) })
  .strict()
  .meta({
    id: 'PlanIdParams',
    description: 'Parâmetros de rota com o identificador do plano.',
  });
