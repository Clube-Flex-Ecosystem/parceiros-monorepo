import { z } from 'zod';

import { contactRequest } from './contact.schema.js';
import { partnerPlanDiscountRequest } from './partner-plan-discount.schema.js';

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

export const partnerResponse = z
  .object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    address: z.string().nullable(),
    generalInstructions: z.string().nullable(),
    website: z.url().nullable(),
    slug: z.string(),
    isFeatured: z.boolean(),
    status: z.enum(['draft', 'published', 'inactive']),
    categoryId: z.string(),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
  })
  .strict();

export const partnerItemResponse = z.object({ data: partnerResponse }).strict();

export const partnerListResponse = z
  .object({
    data: z.array(partnerResponse),
    meta: z.object({ total: z.number().int() }),
  })
  .strict();
