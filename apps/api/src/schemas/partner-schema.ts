import { z } from 'zod';

export const partnerInputSchema = z.object({}).passthrough().meta({
  id: 'PartnerInput',
  description: 'Dados de um parceiro para criação ou atualização.',
});

export const listAdminPartnersSchema = z.object({}).strict().meta({
  id: 'ListAdminPartnersInput',
  description: 'Entrada para listar parceiros administrativos.',
});

export const partnerIdParamsSchema = z.object({ id: z.string().min(1) }).meta({
  id: 'PartnerIdParams',
  description: 'Parâmetros de rota com o identificador interno do parceiro.',
});

export const updatePartnerSchema = z
  .object({ params: partnerIdParamsSchema, body: partnerInputSchema })
  .meta({
    id: 'UpdatePartnerInput',
    description: 'Dados para atualizar um parceiro.',
  });

export const partnerStatusSchema = z
  .object({ status: z.enum(['draft', 'published', 'inactive']) })
  .meta({
    id: 'PartnerStatusInput',
    description: 'Novo estado de publicação do parceiro.',
  });

export const updatePartnerStatusSchema = z
  .object({ params: partnerIdParamsSchema, body: partnerStatusSchema })
  .meta({
    id: 'UpdatePartnerStatusInput',
    description: 'Dados para alterar o estado de publicação do parceiro.',
  });

export const listPublicPartnersSchema = z.object({}).strict().meta({
  id: 'ListPublicPartnersInput',
  description: 'Entrada para listar parceiros publicados.',
});

export const partnerSlugParamsSchema = z.object({ slug: z.string().min(1) }).meta({
  id: 'PartnerSlugParams',
  description: 'Parâmetros de rota com o slug público do parceiro.',
});
