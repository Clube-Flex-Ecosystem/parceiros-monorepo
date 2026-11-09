import { prisma } from '../../database/prisma/client.js';
import type { PrismaClient } from '../../database/prisma/generated/client.js';
import type { Category } from '../../domains/models/category.js';
import type { CategoryRepository } from '../../domains/repositories/category-repository.js';
import type { CreateData, UpdateData } from '../../domains/repositories/repository.js';

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
