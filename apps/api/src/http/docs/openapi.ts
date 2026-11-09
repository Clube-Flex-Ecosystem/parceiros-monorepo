import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { errorResponse } from '../../schemas/shared/error-response.js';

export const registry = new OpenAPIRegistry();

registry.registerPath({
  method: 'get',
  path: '/docs/openapi.json',
  summary: 'Returns the OpenAPI document.',
  responses: {
    200: {
      description: 'OpenAPI document returned successfully.',
    },
  },
});

export const errorContent = (description: string) => ({
  description,
  content: { 'application/json': { schema: errorResponse } },
});
