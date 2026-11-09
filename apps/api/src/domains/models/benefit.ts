export type Benefit = {
  id: string;
  discountPercent: number;
  condition: string | null;
  coupon: string | null;
  instructions: string | null;
  partnerId: string;
  planId: string;
  createdAt: Date;
  updatedAt: Date;
};
