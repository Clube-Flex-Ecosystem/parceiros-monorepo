import type { Plan } from '../models/plan.js';
import type { CreateData, UpdateData } from './repository.js';

export interface PlanRepository {
  findById(id: string): Promise<Plan | null>;
  findByName(name: string): Promise<Plan | null>;
  findAll(): Promise<Plan[]>;
  create(data: CreateData<Plan>): Promise<Plan>;
  update(id: string, data: UpdateData<Plan>): Promise<Plan>;
  delete(id: string): Promise<void>;
}
