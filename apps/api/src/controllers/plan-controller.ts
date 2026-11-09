import type { RequestHandler } from 'express';

import { StatusCodes } from 'http-status-codes';

import { formatResponse } from '../helpers/format-response.js';
import { validateSchema } from '../helpers/validate-schema.js';
import { PrismaPartnerPlanDiscountRepository } from '../repositories/prisma/partner-plan-discount-repository.js';
import { PrismaPlanRepository } from '../repositories/prisma/plan-repository.js';
import { createPlanRequest } from '../schemas/plan/create-plan.js';
import { updatePlanRequest } from '../schemas/plan/update-plan.js';
import { CreatePlanUseCase } from '../usecases/plan/create-plan.js';
import { DeletePlanUseCase } from '../usecases/plan/delete-plan.js';
import { ListPlansUseCase } from '../usecases/plan/list-plans.js';
import { UpdatePlanUseCase } from '../usecases/plan/update-plan.js';

const dependencies = {
  planRepository: new PrismaPlanRepository(),
  partnerPlanDiscountRepository: new PrismaPartnerPlanDiscountRepository(),
};

const planUseCases = {
  createPlan: new CreatePlanUseCase(dependencies.planRepository),
  deletePlan: new DeletePlanUseCase(
    dependencies.planRepository,
    dependencies.partnerPlanDiscountRepository,
  ),
  listPlans: new ListPlansUseCase(dependencies.planRepository),
  updatePlan: new UpdatePlanUseCase(dependencies.planRepository),
};

const listPlans: RequestHandler = async (_request, response) => {
  const result = await planUseCases.listPlans.execute();
  return response.status(StatusCodes.OK).json(formatResponse(result));
};

const createPlan: RequestHandler = async (request, response) => {
  const parsed = validateSchema(request.body, createPlanRequest);
  const result = await planUseCases.createPlan.execute(parsed);

  return response.status(StatusCodes.CREATED).json(formatResponse(result));
};

const updatePlan: RequestHandler<{ id: string }> = async (request, response) => {
  const parsed = validateSchema(request.body, updatePlanRequest);
  const result = await planUseCases.updatePlan.execute({
    id: request.params.id,
    name: parsed.name,
  });

  return response.status(StatusCodes.OK).json(formatResponse(result));
};

const deletePlan: RequestHandler<{ id: string }> = async (request, response) => {
  await planUseCases.deletePlan.execute({ id: request.params.id });
  return response.status(StatusCodes.NO_CONTENT).send();
};

export const planController = {
  listPlans,
  createPlan,
  updatePlan,
  deletePlan,
};
