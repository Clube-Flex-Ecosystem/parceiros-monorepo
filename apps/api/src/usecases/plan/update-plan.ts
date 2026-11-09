import { StatusCodes } from 'http-status-codes';

import { AppError } from '../../domains/errors/app-error.js';
import type { Plan } from '../../domains/models/plan.js';
import type { PlanRepository } from '../../domains/repositories/plan-repository.js';

export type UpdatePlanUseCaseInput = {
  id: string;
  name: string;
};

export type UpdatePlanUseCaseOutput = Plan;

export class UpdatePlanUseCase {
  constructor(private readonly planRepository: PlanRepository) {}

  async execute(input: UpdatePlanUseCaseInput): Promise<UpdatePlanUseCaseOutput> {
    const plan = await this.planRepository.findById(input.id);

    if (!plan) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Plano não encontrado.');
    }

    return this.planRepository.update(input.id, { name: input.name });
  }
}
