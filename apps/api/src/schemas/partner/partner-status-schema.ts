import { z } from 'zod';

export const partnerStatusSchema = z
  .object({ status: z.enum(['draft', 'published', 'inactive']) })
  .meta({
    id: 'PartnerStatusInput',
    description: 'Novo estado de publicação do parceiro.',
  });
