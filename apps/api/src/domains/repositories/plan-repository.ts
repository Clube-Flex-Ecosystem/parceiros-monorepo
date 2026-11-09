import type { Plan } from '../models/plan.js';

export interface PlanRepository {
  findById(id: string): Promise<Plan | null>;
  findAll(): Promise<Plan[]>;
}
