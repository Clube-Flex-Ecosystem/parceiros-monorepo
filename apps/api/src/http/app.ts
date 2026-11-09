import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import { createOpenApiDocument } from './docs/document.js';
import { errorHandler } from './middlewares/error-handler.js';
import { notFoundHandler } from './middlewares/not-found.js';
import { routes } from '../routes/index.js';

export const app = express();

app.use(cors());
app.use(express.json());

app.get('/docs/openapi.json', (_request, response) => {
  response.json(createOpenApiDocument());
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(createOpenApiDocument()));

app.use(routes);

app.use(notFoundHandler);
app.use(errorHandler);
