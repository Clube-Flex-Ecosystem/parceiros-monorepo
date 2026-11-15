import { StatusCodes } from 'http-status-codes';

import { BaseError } from '../../../../shared/domain/errors/base.error.js';
import type { Category } from '../../domain/models/category.model.js';
import type { CategoryRepository } from '../../domain/repositories/category.repository.js';

export type UpdateCategoryUseCaseInput = {
  id: string;
  name: string;
};

export type UpdateCategoryUseCaseOutput = Category;

export class UpdateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(input: UpdateCategoryUseCaseInput): Promise<UpdateCategoryUseCaseOutput> {
    const category = await this.categoryRepository.findById(input.id);

    if (!category) {
      throw new BaseError(StatusCodes.NOT_FOUND, 'Categoria não encontrada.');
    }

    return this.categoryRepository.update(input.id, { name: input.name });
  }
}
