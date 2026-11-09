import 'dotenv/config';

import { env } from './config/env.js';
import { app } from './http/app.js';

const { PORT: port } = env;

app.listen(port, () => {
  console.info(`API listening on http://localhost:${port}`);
});
