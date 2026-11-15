import type { PartnerPlanDiscount } from '../models/partner-plan-discount.model.js';
import type { CreateData, UpdateData } from '../../../../shared/domain/repositories/repository.js';

export interface PartnerPlanDiscountRepository {
  findByPartnerId(partnerId: string): Promise<PartnerPlanDiscount[]>;
  findByPlanId(planId: string): Promise<PartnerPlanDiscount[]>;
  create(data: CreateData<PartnerPlanDiscount>): Promise<PartnerPlanDiscount>;
  update(id: string, data: UpdateData<PartnerPlanDiscount>): Promise<PartnerPlanDiscount>;
  delete(id: string): Promise<void>;
}
