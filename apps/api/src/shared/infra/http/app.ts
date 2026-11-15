import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';

import { createOpenApiDocument } from './docs/document.js';
import { errorHandler } from './middlewares/error-handler.middleware.js';
import { notFoundHandler } from './middlewares/not-found.middleware.js';
import { rateLimiter } from './middlewares/rate-limit.middleware.js';
import { routes } from './routes/index.route.js';

export const app = express();
const openApiDocument = createOpenApiDocument();

app.use(cors({ origin: true, credentials: true }));
app.use(rateLimiter);
app.use(cookieParser());
app.use(express.json());

app.get('/docs/openapi.json', (_request, response) => {
  response.json(openApiDocument);
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

app.use(routes);

app.use(notFoundHandler);
app.use(errorHandler);
