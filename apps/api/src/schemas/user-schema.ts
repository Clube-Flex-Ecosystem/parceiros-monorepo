import { z } from 'zod';

export const loginSchema = z.object({}).passthrough().meta({
  id: 'LoginInput',
  description: 'Dados da credencial administrativa.',
});

export const getCurrentUserSchema = z.object({}).strict().meta({
  id: 'GetCurrentUserInput',
  description: 'Entrada para consulta do administrador autenticado.',
});
