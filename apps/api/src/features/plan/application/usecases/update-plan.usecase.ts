import { StatusCodes } from 'http-status-codes';

import { BaseError } from '../../../../shared/domain/errors/base.error.js';
import type { Plan } from '../../domain/models/plan.model.js';
import type { PlanRepository } from '../../domain/repositories/plan.repository.js';

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
      throw new BaseError(StatusCodes.NOT_FOUND, 'Plano não encontrado.');
    }

    return this.planRepository.update(input.id, { name: input.name });
  }
}
