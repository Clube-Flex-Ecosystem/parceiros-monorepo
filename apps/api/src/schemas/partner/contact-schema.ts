import { z } from 'zod';

export const contactSchema = z
  .object({
    type: z.enum(['phone', 'whatsapp']),
    value: z.string().trim().min(1),
    label: z.string().trim().min(1).nullable(),
  })
  .strict();
