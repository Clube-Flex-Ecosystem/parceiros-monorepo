import { z } from 'zod';

export const listPlansSchema = z.object({}).strict().meta({
  id: 'ListPlansInput',
  description: 'Entrada para listar planos disponíveis.',
});
