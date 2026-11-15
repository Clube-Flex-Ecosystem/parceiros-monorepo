import { StatusCodes } from 'http-status-codes';

import { BaseError } from '../../../../shared/domain/errors/base.error.js';
import type { Plan } from '../../domain/models/plan.model.js';
import type { PlanRepository } from '../../domain/repositories/plan.repository.js';

export type CreatePlanUseCaseInput = {
  name: string;
};

export type CreatePlanUseCaseOutput = Plan;

export class CreatePlanUseCase {
  constructor(private readonly planRepository: PlanRepository) {}

  async execute(input: CreatePlanUseCaseInput): Promise<CreatePlanUseCaseOutput> {
    const planWithName = await this.planRepository.findByName(input.name);

    if (planWithName) {
      throw new BaseError(StatusCodes.CONFLICT, 'Já existe um plano com este nome.');
    }

    return this.planRepository.create({ name: input.name });
  }
}
