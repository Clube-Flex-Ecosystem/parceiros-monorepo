import { z } from 'zod';

export const loginSchema = z.object({}).passthrough().meta({
  id: 'LoginInput',
  description: 'Dados da credencial administrativa.',
});
