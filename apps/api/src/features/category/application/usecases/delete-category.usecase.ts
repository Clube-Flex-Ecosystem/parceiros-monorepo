import { StatusCodes } from 'http-status-codes';

import { BaseError } from '../../../../shared/domain/errors/base.error.js';
import type { CategoryRepository } from '../../domain/repositories/category.repository.js';
import type { PartnerRepository } from '../../../partner/domain/repositories/partner.repository.js';

export type DeleteCategoryUseCaseInput = {
  id: string;
};

export class DeleteCategoryUseCase {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly partnerRepository: PartnerRepository,
  ) {}

  async execute(input: DeleteCategoryUseCaseInput): Promise<void> {
    const category = await this.categoryRepository.findById(input.id);

    if (!category) {
      throw new BaseError(StatusCodes.NOT_FOUND, 'Categoria não encontrada.');
    }

    const partners = await this.partnerRepository.findAll({ categoryId: input.id });

    if (partners.length > 0) {
      throw new BaseError(StatusCodes.CONFLICT, 'Categoria associada a parceiros.');
    }

    await this.categoryRepository.delete(input.id);
  }
}
