import 'dotenv/config';

import { env } from './env.js';
import { app } from './shared/infra/http/app.js';

const { PORT: port } = env;

app.listen(port, () => {
  console.info(`API listening on http://localhost:${port}`);
});
