export type PartnerStatus = 'draft' | 'published' | 'inactive';

export type Partner = {
  id: string;
  name: string;
  description: string;
  address: string | null;
  generalInstructions: string | null;
  website: string | null;
  slug: string;
  isFeatured: boolean;
  status: PartnerStatus;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
};
