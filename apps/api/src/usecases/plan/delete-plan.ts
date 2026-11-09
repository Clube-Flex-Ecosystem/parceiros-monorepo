import { StatusCodes } from 'http-status-codes';

import { AppError } from '../../domains/errors/app-error.js';
import type { PartnerPlanDiscountRepository } from '../../domains/repositories/partner-plan-discount-repository.js';
import type { PlanRepository } from '../../domains/repositories/plan-repository.js';

export type DeletePlanUseCaseInput = {
  id: string;
};

export class DeletePlanUseCase {
  constructor(
    private readonly planRepository: PlanRepository,
    private readonly partnerPlanDiscountRepository: PartnerPlanDiscountRepository,
  ) {}

  async execute(input: DeletePlanUseCaseInput): Promise<void> {
    const plan = await this.planRepository.findById(input.id);

    if (!plan) {
      throw new AppError(StatusCodes.NOT_FOUND, 'Plano não encontrado.');
    }

    const discounts = await this.partnerPlanDiscountRepository.findByPlanId(input.id);

    if (discounts.length > 0) {
      throw new AppError(StatusCodes.CONFLICT, 'Plano associado a descontos de parceiros.');
    }

    await this.planRepository.delete(input.id);
  }
}
