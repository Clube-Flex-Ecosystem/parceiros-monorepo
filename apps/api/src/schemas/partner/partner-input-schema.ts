import { z } from 'zod';

import { contactSchema } from './contact-schema.js';
import { partnerPlanDiscountSchema } from './partner-plan-discount-schema.js';

export const partnerInputSchema = z
  .object({
    name: z.string().trim().min(1).optional(),
    slug: z.string().trim().min(1).optional(),
    description: z.string().trim().min(1).optional(),
    address: z.string().trim().min(1).nullable().optional(),
    generalInstructions: z.string().trim().min(1).nullable().optional(),
    website: z.url().nullable().optional(),
    isFeatured: z.boolean().optional(),
    categoryId: z.string().min(1).optional(),
    contacts: z.array(contactSchema).optional(),
    discounts: z.array(partnerPlanDiscountSchema).optional(),
  })
  .strict()
  .meta({
    id: 'PartnerInput',
    description: 'Dados de um parceiro para criação ou atualização.',
  });
