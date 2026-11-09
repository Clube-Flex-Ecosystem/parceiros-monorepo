import type { Unit } from '../models/unit.js';
import type { CreateData, UpdateData } from './repository.js';

export interface UnitRepository {
  findById(id: string): Promise<Unit | null>;
  findByPartnerId(partnerId: string): Promise<Unit[]>;
  create(data: CreateData<Unit>): Promise<Unit>;
  update(id: string, data: UpdateData<Unit>): Promise<Unit>;
  delete(id: string): Promise<void>;
}
