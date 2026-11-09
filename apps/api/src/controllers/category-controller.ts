import type { RequestHandler } from 'express';

import { StatusCodes } from 'http-status-codes';

import { formatResponse } from '../helpers/format-response.js';
import { validateSchema } from '../helpers/validate-schema.js';
import { PrismaCategoryRepository } from '../repositories/prisma/category-repository.js';
import { PrismaPartnerRepository } from '../repositories/prisma/partner-repository.js';
import { createCategoryRequest } from '../schemas/category/create-category.js';
import { updateCategoryRequest } from '../schemas/category/update-category.js';
import { CreateCategoryUseCase } from '../usecases/category/create-category.js';
import { DeleteCategoryUseCase } from '../usecases/category/delete-category.js';
import { ListCategoriesUseCase } from '../usecases/category/list-categories.js';
import { UpdateCategoryUseCase } from '../usecases/category/update-category.js';

const dependencies = {
  categoryRepository: new PrismaCategoryRepository(),
  partnerRepository: new PrismaPartnerRepository(),
};

const categoryUseCases = {
  createCategory: new CreateCategoryUseCase(dependencies.categoryRepository),
  deleteCategory: new DeleteCategoryUseCase(
    dependencies.categoryRepository,
    dependencies.partnerRepository,
  ),
  listCategories: new ListCategoriesUseCase(dependencies.categoryRepository),
  updateCategory: new UpdateCategoryUseCase(dependencies.categoryRepository),
};

const listCategories: RequestHandler = async (request, response) => {
  const result = await categoryUseCases.listCategories.execute();
  return response.status(StatusCodes.OK).json(formatResponse(result));
};

const createCategory: RequestHandler = async (request, response) => {
  const parsed = validateSchema(request.body, createCategoryRequest);
  const result = await categoryUseCases.createCategory.execute(parsed);

  return response.status(StatusCodes.CREATED).json(formatResponse(result));
};

const updateCategory: RequestHandler<{ id: string }> = async (request, response) => {
  const parsed = validateSchema(request.body, updateCategoryRequest);
  const result = await categoryUseCases.updateCategory.execute({
    id: request.params.id,
    name: parsed.name,
  });

  return response.status(StatusCodes.OK).json(formatResponse(result));
};

const deleteCategory: RequestHandler<{ id: string }> = async (request, response) => {
  await categoryUseCases.deleteCategory.execute({ id: request.params.id });
  return response.status(StatusCodes.NO_CONTENT).send();
};

export const categoryController = {
  listCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
