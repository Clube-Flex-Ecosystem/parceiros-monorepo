import createClient from 'openapi-fetch';

import { env } from '../config/env';

import type { paths } from './api-types';

const api = createClient<paths>({ baseUrl: env.API_URL });

export { api };
