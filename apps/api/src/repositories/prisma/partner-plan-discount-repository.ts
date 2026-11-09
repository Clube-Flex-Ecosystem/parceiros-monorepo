import { prisma } from '../../database/prisma/client.js';
import type { PrismaClient } from '../../database/prisma/generated/client.js';
import type { PartnerPlanDiscount } from '../../domains/models/partner-plan-discount.js';
import type { PartnerPlanDiscountRepository } from '../../domains/repositories/partner-plan-discount-repository.js';
import type { CreateData, UpdateData } from '../../domains/repositories/repository.js';

export class PrismaPartnerPlanDiscountRepository implements PartnerPlanDiscountRepository {
  constructor(private readonly database: PrismaClient = prisma) {}

  async findByPartnerId(partnerId: string): Promise<PartnerPlanDiscount[]> {
    return this.database.partnerPlanDiscount.findMany({ where: { partnerId } });
  }

  async findByPlanId(planId: string): Promise<PartnerPlanDiscount[]> {
    return this.database.partnerPlanDiscount.findMany({ where: { planId } });
  }

  async create(data: CreateData<PartnerPlanDiscount>): Promise<PartnerPlanDiscount> {
    return this.database.partnerPlanDiscount.create({ data });
  }

  async update(id: string, data: UpdateData<PartnerPlanDiscount>): Promise<PartnerPlanDiscount> {
    return this.database.partnerPlanDiscount.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.database.partnerPlanDiscount.delete({ where: { id } });
  }
}
