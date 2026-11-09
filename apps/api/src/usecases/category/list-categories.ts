import type { Category } from '../../domains/models/category.js';
import type { CategoryRepository } from '../../domains/repositories/category-repository.js';

export type ListCategoriesUseCaseOutput = Category[];

export class ListCategoriesUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(): Promise<ListCategoriesUseCaseOutput> {
    return this.categoryRepository.findAll();
  }
}
