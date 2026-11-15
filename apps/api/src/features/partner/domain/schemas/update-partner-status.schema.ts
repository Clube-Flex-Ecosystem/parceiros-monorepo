import { z } from 'zod';

export const updatePartnerStatusRequest = z
  .object({ status: z.enum(['draft', 'published', 'inactive']) })
  .strict();
