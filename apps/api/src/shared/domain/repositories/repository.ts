export type CreateData<Entity> = Omit<Entity, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateData<Entity> = Partial<CreateData<Entity>>;
