import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

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
