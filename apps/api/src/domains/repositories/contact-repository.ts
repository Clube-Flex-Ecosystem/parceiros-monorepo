import type { Contact } from '../models/contact.js';
import type { CreateData, UpdateData } from './repository.js';

export interface ContactRepository {
  findByPartnerId(partnerId: string): Promise<Contact[]>;
  findByUnitId(unitId: string): Promise<Contact[]>;
  create(data: CreateData<Contact>): Promise<Contact>;
  update(id: string, data: UpdateData<Contact>): Promise<Contact>;
  delete(id: string): Promise<void>;
}
