import { z } from 'zod';

export const partnerIdParamsSchema = z.object({ id: z.string().min(1) }).meta({
  id: 'PartnerIdParams',
  description: 'Parâmetros de rota com o identificador interno do parceiro.',
});
