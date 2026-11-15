import type { Category } from '../../domain/models/category.model.js';
import type { CategoryRepository } from '../../domain/repositories/category.repository.js';

export type ListCategoriesUseCaseOutput = Category[];

export class ListCategoriesUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(): Promise<ListCategoriesUseCaseOutput> {
    return this.categoryRepository.findAll();
  }
}
