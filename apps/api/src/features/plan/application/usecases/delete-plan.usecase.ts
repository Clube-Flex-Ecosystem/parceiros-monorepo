import { StatusCodes } from 'http-status-codes';

import { BaseError } from '../../../../shared/domain/errors/base.error.js';
import type { PartnerPlanDiscountRepository } from '../../../partner/domain/repositories/partner-plan-discount.repository.js';
import type { PlanRepository } from '../../domain/repositories/plan.repository.js';

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
      throw new BaseError(StatusCodes.NOT_FOUND, 'Plano não encontrado.');
    }

    const discounts = await this.partnerPlanDiscountRepository.findByPlanId(input.id);

    if (discounts.length > 0) {
      throw new BaseError(StatusCodes.CONFLICT, 'Plano associado a descontos de parceiros.');
    }

    await this.planRepository.delete(input.id);
  }
}
