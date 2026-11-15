import { env } from '../src/env.js';
import { prisma } from '../src/shared/infra/database/prisma/client.js';
import { BcryptHashProvider } from '../src/shared/infra/providers/bcrypt-hash.provider.js';

const ADMIN_NAME = 'Administrador';
const ADMIN_EMAIL = 'admin@clubeflex.com.br';

const main = async () => {
  const passwordHash = await new BcryptHashProvider().hash(env.ADMIN_PASSWORD);

  await prisma.user.upsert({
    where: { email: ADMIN_EMAIL },
    update: { name: ADMIN_NAME, passwordHash },
    create: { name: ADMIN_NAME, email: ADMIN_EMAIL, passwordHash },
  });
};

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
