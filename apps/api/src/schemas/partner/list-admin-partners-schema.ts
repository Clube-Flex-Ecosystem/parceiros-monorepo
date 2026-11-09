import { z } from 'zod';

export const listAdminPartnersSchema = z.object({}).strict().meta({
  id: 'ListAdminPartnersInput',
  description: 'Entrada para listar parceiros administrativos.',
});
