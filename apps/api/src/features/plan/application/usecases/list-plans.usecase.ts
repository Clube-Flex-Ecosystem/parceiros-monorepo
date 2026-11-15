import type { Plan } from '../../domain/models/plan.model.js';
import type { PlanRepository } from '../../domain/repositories/plan.repository.js';

export type ListPlansUseCaseOutput = Plan[];

export class ListPlansUseCase {
  constructor(private readonly planRepository: PlanRepository) {}

  async execute(): Promise<ListPlansUseCaseOutput> {
    return this.planRepository.findAll();
  }
}
