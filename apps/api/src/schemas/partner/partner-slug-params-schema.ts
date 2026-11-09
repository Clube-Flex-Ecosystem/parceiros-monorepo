import { z } from 'zod';

export const partnerSlugParamsSchema = z.object({ slug: z.string().min(1) }).meta({
  id: 'PartnerSlugParams',
  description: 'Parâmetros de rota com o slug público do parceiro.',
});
