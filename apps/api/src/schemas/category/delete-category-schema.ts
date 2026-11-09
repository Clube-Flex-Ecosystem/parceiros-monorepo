import { z } from 'zod';

import { categoryIdParamsSchema } from './category-id-params-schema.js';

export const deleteCategorySchema = z.object({ params: categoryIdParamsSchema }).meta({
  id: 'DeleteCategoryInput',
  description: 'Dados para remover uma categoria.',
});
