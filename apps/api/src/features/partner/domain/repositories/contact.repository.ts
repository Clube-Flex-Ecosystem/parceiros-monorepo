import type { Contact } from '../models/contact.model.js';
import type { CreateData, UpdateData } from '../../../../shared/domain/repositories/repository.js';

export interface ContactRepository {
  findByPartnerId(partnerId: string): Promise<Contact[]>;
  create(data: CreateData<Contact>): Promise<Contact>;
  update(id: string, data: UpdateData<Contact>): Promise<Contact>;
  delete(id: string): Promise<void>;
}
