import { z } from 'zod';

export const listCategoriesSchema = z.object({}).strict().meta({
  id: 'ListCategoriesInput',
  description: 'Entrada para listar categorias disponíveis.',
});
