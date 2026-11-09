import { z } from 'zod';

export const getCurrentUserSchema = z.object({}).strict().meta({
  id: 'GetCurrentUserInput',
  description: 'Entrada para consulta do administrador autenticado.',
});
