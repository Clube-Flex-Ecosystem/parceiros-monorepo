import { prisma } from '../../../../../shared/infra/database/prisma/client.js';
import type { PrismaClient } from '../../../../../shared/infra/database/prisma/generated/client.js';
import type { Category } from '../../../domain/models/category.model.js';
import type { CategoryRepository } from '../../../domain/repositories/category.repository.js';
import type {
  CreateData,
  UpdateData,
} from '../../../../../shared/domain/repositories/repository.js';

export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private readonly database: PrismaClient = prisma) {}

  async findById(id: string): Promise<Category | null> {
    return this.database.category.findUnique({ where: { id } });
  }

  async findByName(name: string): Promise<Category | null> {
    return this.database.category.findUnique({ where: { name } });
  }

  async findAll(): Promise<Category[]> {
    return this.database.category.findMany();
  }

  async create(data: CreateData<Category>): Promise<Category> {
    return this.database.category.create({ data });
  }

  async update(id: string, data: UpdateData<Category>): Promise<Category> {
    return this.database.category.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.database.category.delete({ where: { id } });
  }
}
