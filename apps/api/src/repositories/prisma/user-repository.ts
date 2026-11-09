import { prisma } from '../../database/prisma/client.js';
import type { PrismaClient } from '../../database/prisma/generated/client.js';
import type { User } from '../../domains/models/user.js';
import type { UserRepository } from '../../domains/repositories/user-repository.js';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly database: PrismaClient = prisma) {}

  async findById(id: string): Promise<User | null> {
    return this.database.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.database.user.findUnique({ where: { email } });
  }
}
