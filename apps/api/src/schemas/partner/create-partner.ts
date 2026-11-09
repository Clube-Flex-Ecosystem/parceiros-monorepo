import { z } from 'zod';

import { contactRequest } from './contact.js';
import { partnerPlanDiscountRequest } from './partner-plan-discount.js';

export const createPartnerRequest = z
  .object({
    name: z.string().trim().min(1).optional(),
    slug: z.string().trim().min(1).optional(),
    description: z.string().trim().min(1).optional(),
    address: z.string().trim().min(1).nullable().optional(),
    generalInstructions: z.string().trim().min(1).nullable().optional(),
    website: z.url().nullable().optional(),
    isFeatured: z.boolean().optional(),
    categoryId: z.string().min(1).optional(),
    contacts: z.array(contactRequest).optional(),
    discounts: z.array(partnerPlanDiscountRequest).optional(),
  })
  .strict();
