import { StatusCodes } from 'http-status-codes';

import { AppError } from '../../domains/errors/app-error.js';
import type { Plan } from '../../domains/models/plan.js';
import type { PlanRepository } from '../../domains/repositories/plan-repository.js';

export type CreatePlanUseCaseInput = {
  name: string;
};

export type CreatePlanUseCaseOutput = Plan;

export class CreatePlanUseCase {
  constructor(private readonly planRepository: PlanRepository) {}

  async execute(input: CreatePlanUseCaseInput): Promise<CreatePlanUseCaseOutput> {
    const planWithName = await this.planRepository.findByName(input.name);

    if (planWithName) {
      throw new AppError(StatusCodes.CONFLICT, 'Já existe um plano com este nome.');
    }

    return this.planRepository.create({ name: input.name });
  }
}
