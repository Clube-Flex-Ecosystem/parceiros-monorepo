import { z } from 'zod';

export const loginRequest = z
  .object({
    email: z.string().trim().email().max(320),
    password: z.string().min(1).max(72),
  })
  .strict()
  .meta({ example: { email: 'user@example.com', password: 'password123' } });

export const loginResponse = z.object({}).strict().meta({ example: {} });

export const currentUserResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        createdAt: z.iso.datetime(),
        email: z.email(),
        name: z.string(),
        updatedAt: z.iso.datetime(),
      })
      .strict(),
  })
  .strict();
