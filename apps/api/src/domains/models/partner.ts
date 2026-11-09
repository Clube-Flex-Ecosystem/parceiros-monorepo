export type PartnerStatus = 'draft' | 'published' | 'inactive';

export type Partner = {
  id: string;
  name: string;
  description: string;
  generalInstructions: string | null;
  website: string | null;
  slug: string;
  isFeatured: boolean;
  generalCoupon: string | null;
  status: PartnerStatus;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
};
