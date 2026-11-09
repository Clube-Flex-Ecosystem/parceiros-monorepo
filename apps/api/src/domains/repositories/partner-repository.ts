import type { Partner, PartnerStatus } from '../models/partner.js';
import type { CreateData, UpdateData } from './repository.js';

export type PartnerFilter = {
  status?: PartnerStatus;
};

export interface PartnerRepository {
  findById(id: string): Promise<Partner | null>;
  findBySlug(slug: string): Promise<Partner | null>;
  findAll(filter?: PartnerFilter): Promise<Partner[]>;
  create(data: CreateData<Partner>): Promise<Partner>;
  update(id: string, data: UpdateData<Partner>): Promise<Partner>;
  updateStatus(id: string, status: PartnerStatus): Promise<Partner>;
}
