import { StatusCodes } from 'http-status-codes';

import { AppError } from '../../domains/errors/app-error.js';
import type { Category } from '../../domains/models/category.js';
import type { CategoryRepository } from '../../domains/repositories/category-repository.js';

export type CreateCategoryUseCaseInput = {
  name: string;
};

export type CreateCategoryUseCaseOutput = Category;

export class CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(input: CreateCategoryUseCaseInput): Promise<CreateCategoryUseCaseOutput> {
    const categoryWithName = await this.categoryRepository.findByName(input.name);

    if (categoryWithName) {
      throw new AppError(StatusCodes.CONFLICT, 'Já existe uma categoria com este nome.');
    }

    return this.categoryRepository.create({ name: input.name });
  }
}
