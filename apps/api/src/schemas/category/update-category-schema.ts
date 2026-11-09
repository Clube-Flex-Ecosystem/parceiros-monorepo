import { z } from 'zod';

import { categoryIdParamsSchema } from './category-id-params-schema.js';
import { categoryInputSchema } from './category-input-schema.js';

export const updateCategorySchema = z
  .object({ params: categoryIdParamsSchema, body: categoryInputSchema })
  .meta({
    id: 'UpdateCategoryInput',
    description: 'Dados para atualizar uma categoria.',
  });
