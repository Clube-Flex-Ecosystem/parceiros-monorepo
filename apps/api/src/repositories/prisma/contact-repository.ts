import { prisma } from '../../database/prisma/client.js';
import type { PrismaClient } from '../../database/prisma/generated/client.js';
import type { Contact } from '../../domains/models/contact.js';
import type { ContactRepository } from '../../domains/repositories/contact-repository.js';
import type { CreateData, UpdateData } from '../../domains/repositories/repository.js';

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
