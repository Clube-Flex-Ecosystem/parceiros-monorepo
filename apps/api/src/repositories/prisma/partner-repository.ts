import { prisma } from '../../database/prisma/client.js';
import type { PrismaClient } from '../../database/prisma/generated/client.js';
import type { Partner, PartnerStatus } from '../../domains/models/partner.js';
import type {
  PartnerFilter,
  PartnerRepository,
} from '../../domains/repositories/partner-repository.js';
import type { CreateData, UpdateData } from '../../domains/repositories/repository.js';

export class PrismaPartnerRepository implements PartnerRepository {
  constructor(private readonly database: PrismaClient = prisma) {}

  async findById(id: string): Promise<Partner | null> {
    return this.database.partner.findUnique({ where: { id } });
  }

  async findBySlug(slug: string): Promise<Partner | null> {
    return this.database.partner.findUnique({ where: { slug } });
  }

  async findAll(filter?: PartnerFilter): Promise<Partner[]> {
    return this.database.partner.findMany({ where: filter });
  }

  async create(data: CreateData<Partner>): Promise<Partner> {
    return this.database.partner.create({ data });
  }

  async update(id: string, data: UpdateData<Partner>): Promise<Partner> {
    return this.database.partner.update({ where: { id }, data });
  }

  async updateStatus(id: string, status: PartnerStatus): Promise<Partner> {
    return this.database.partner.update({ where: { id }, data: { status } });
  }
}
