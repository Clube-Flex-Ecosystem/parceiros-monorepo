import { prisma } from '../../../../../shared/infra/database/prisma/client.js';
import type { PrismaClient } from '../../../../../shared/infra/database/prisma/generated/client.js';
import type { User } from '../../../domain/models/user.model.js';
import type { UserRepository } from '../../../domain/repositories/user.repository.js';

export class PrismaUserRepository implements UserRepository {
  constructor(private readonly database: PrismaClient = prisma) {}

  async findById(id: string): Promise<User | null> {
    return this.database.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.database.user.findUnique({ where: { email } });
  }
}
