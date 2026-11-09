export type ContactType = 'phone' | 'whatsapp';

export type Contact = {
  id: string;
  type: ContactType;
  value: string;
  label: string | null;
  partnerId: string | null;
  unitId: string | null;
  createdAt: Date;
  updatedAt: Date;
};
