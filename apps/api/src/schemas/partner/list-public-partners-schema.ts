import { z } from 'zod';

export const listPublicPartnersSchema = z.object({}).strict().meta({
  id: 'ListPublicPartnersInput',
  description: 'Entrada para listar parceiros publicados.',
});
