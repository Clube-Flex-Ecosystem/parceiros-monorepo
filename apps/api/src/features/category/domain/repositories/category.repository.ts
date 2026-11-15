import type { Category } from '../models/category.model.js';
import type { CreateData, UpdateData } from '../../../../shared/domain/repositories/repository.js';

export interface CategoryRepository {
  findById(id: string): Promise<Category | null>;
  findByName(name: string): Promise<Category | null>;
  findAll(): Promise<Category[]>;
  create(data: CreateData<Category>): Promise<Category>;
  update(id: string, data: UpdateData<Category>): Promise<Category>;
  delete(id: string): Promise<void>;
}
