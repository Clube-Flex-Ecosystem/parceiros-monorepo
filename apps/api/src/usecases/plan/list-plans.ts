import type { Plan } from '../../domains/models/plan.js';
import type { PlanRepository } from '../../domains/repositories/plan-repository.js';

export type ListPlansUseCaseOutput = Plan[];

export class ListPlansUseCase {
  constructor(private readonly planRepository: PlanRepository) {}

  async execute(): Promise<ListPlansUseCaseOutput> {
    return this.planRepository.findAll();
  }
}
