import { z } from 'zod';

export const partnerPlanDiscountRequest = z
  .object({
    planId: z.string().min(1),
    discountPercent: z.number().min(0).max(100),
    condition: z.string().trim().min(1).nullable(),
    coupon: z.string().trim().min(1).nullable(),
    instructions: z.string().trim().min(1).nullable(),
  })
  .strict();
