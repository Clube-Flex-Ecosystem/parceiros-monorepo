import type { Category } from '../models/category.js';
import type { CreateData, UpdateData } from './repository.js';

export interface CategoryRepository {
  findById(id: string): Promise<Category | null>;
  findAll(): Promise<Category[]>;
  create(data: CreateData<Category>): Promise<Category>;
  update(id: string, data: UpdateData<Category>): Promise<Category>;
  delete(id: string): Promise<void>;
}
