import { prisma } from '../../../../../shared/infra/database/prisma/client.js';
import type { PrismaClient } from '../../../../../shared/infra/database/prisma/generated/client.js';
import type { Contact } from '../../../domain/models/contact.model.js';
import type { ContactRepository } from '../../../domain/repositories/contact.repository.js';
import type {
  CreateData,
  UpdateData,
} from '../../../../../shared/domain/repositories/repository.js';

export class PrismaContactRepository implements ContactRepository {
  constructor(private readonly database: PrismaClient = prisma) {}

  async findByPartnerId(partnerId: string): Promise<Contact[]> {
    return this.database.contact.findMany({ where: { partnerId } });
  }

  async create(data: CreateData<Contact>): Promise<Contact> {
    return this.database.contact.create({ data });
  }

  async update(id: string, data: UpdateData<Contact>): Promise<Contact> {
    return this.database.contact.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.database.contact.delete({ where: { id } });
  }
}
