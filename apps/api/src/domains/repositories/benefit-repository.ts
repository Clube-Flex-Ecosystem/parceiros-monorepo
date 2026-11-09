import type { Benefit } from '../models/benefit.js';
import type { CreateData, UpdateData } from './repository.js';

export interface BenefitRepository {
  findByPartnerId(partnerId: string): Promise<Benefit[]>;
  create(data: CreateData<Benefit>): Promise<Benefit>;
  update(id: string, data: UpdateData<Benefit>): Promise<Benefit>;
  delete(id: string): Promise<void>;
}
