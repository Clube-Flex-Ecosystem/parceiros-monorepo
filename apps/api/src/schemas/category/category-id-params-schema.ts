import { z } from 'zod';

export const categoryIdParamsSchema = z
  .object({ id: z.string().min(1) })
  .strict()
  .meta({
    id: 'CategoryIdParams',
    description: 'Parâmetros de rota com o identificador da categoria.',
  });
