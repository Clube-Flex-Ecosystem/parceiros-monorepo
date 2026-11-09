import { prisma } from '../../database/prisma/client.js';
import type { PrismaClient } from '../../database/prisma/generated/client.js';
import type { Plan } from '../../domains/models/plan.js';
import type { PlanRepository } from '../../domains/repositories/plan-repository.js';
import type { CreateData, UpdateData } from '../../domains/repositories/repository.js';

export class PrismaPlanRepository implements PlanRepository {
  constructor(private readonly database: PrismaClient = prisma) {}

  async findById(id: string): Promise<Plan | null> {
    return this.database.plan.findUnique({ where: { id } });
  }

  async findByName(name: string): Promise<Plan | null> {
    return this.database.plan.findUnique({ where: { name } });
  }

  async findAll(): Promise<Plan[]> {
    return this.database.plan.findMany();
  }

  async create(data: CreateData<Plan>): Promise<Plan> {
    return this.database.plan.create({ data });
  }

  async update(id: string, data: UpdateData<Plan>): Promise<Plan> {
    return this.database.plan.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.database.plan.delete({ where: { id } });
  }
}
