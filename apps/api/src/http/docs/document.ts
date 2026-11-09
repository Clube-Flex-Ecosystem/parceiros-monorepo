import { OpenApiGeneratorV31 } from '@asteasolutions/zod-to-openapi';

import { registry } from './openapi.js';

export function createOpenApiDocument() {
  const generator = new OpenApiGeneratorV31(registry.definitions);

  return generator.generateDocument({
    info: {
      title: 'Parceiros Clube Flex API',
      version: '1.0.0',
    },
    openapi: '3.1.0',
  });
}
