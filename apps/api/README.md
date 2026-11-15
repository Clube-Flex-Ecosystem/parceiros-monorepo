# API — Parceiros Clube Flex

Esta aplicação concentra as regras de negócio, autenticação, persistência e interfaces HTTP do CMS de parceiros. A interface HTTP usa Express com TypeScript, CORS com credenciais, leitura de cookies, documentação Swagger e tratamento padrão para rotas inexistentes e erros inesperados.

## Estrutura

```text
.env.example
prisma.config.ts
prisma/
├── migrations/
│   └── 20261109000000_init/
├── schema.prisma
└── seed.ts
vitest.config.ts
src/
├── bootstrap.ts
├── shared/
│   ├── domain/
│   │   ├── errors/
│   │   ├── providers/
│   │   ├── repositories/
│   │   └── schemas/
│   ├── helpers/
│   │   ├── cookie-manager.helper.ts
│   │   ├── format-response.helper.ts
│   │   └── validate-schema.helper.ts
│   └── infra/
│       ├── database/
│       │   └── prisma/
│       └── http/
│           ├── app.ts
│           ├── docs/
│           │   ├── document.ts
│           │   └── openapi.ts
│           ├── middlewares/
│           │   ├── authenticated.middleware.ts
│           │   ├── error-handler.middleware.ts
│           │   ├── not-found.middleware.ts
│           │   └── rate-limit.middleware.ts
│           ├── providers/
│           │   ├── bcrypt-hash.provider.ts
│           │   ├── jsonwebtoken-jwt.provider.ts
│           │   └── resend-mail.provider.ts
│           └── routes/
│               └── index.route.ts
├── @types/
│   └── express.d.ts
├── features/
│   ├── auth/
│   │   ├── infra/
│   │   │   ├── http/
│   │   │   │   ├── routes/
│   │   │   │   │   └── auth.route.ts
│   │   │   │   └── controllers/
│   │   │   │       ├── get-current-user.controller.ts
│   │   │   │       ├── login.controller.ts
│   │   │   │       └── logout.controller.ts
│   │   │   └── repositories/
│   │   │       └── prisma/
│   │   │           └── user.repository.ts
│   │   ├── application/
│   │   └── domain/
│   │       ├── models/
│   │       │   └── user.model.ts
│   │       ├── schemas/
│   │       │   └── login.schema.ts
│   │       └── repositories/
│   │           └── user.repository.ts
│   ├── category/
│   │   ├── application/usecases/
│   │   │   ├── create-category.usecase.ts
│   │   │   ├── delete-category.usecase.ts
│   │   │   ├── list-categories.usecase.ts
│   │   │   └── update-category.usecase.ts
│   │   ├── domain/
│   │   │   ├── models/category.model.ts
│   │   │   ├── repositories/category.repository.ts
│   │   │   └── schemas/
│   │   └── infra/
│   │       ├── http/
│   │       │   ├── controllers/
│   │       │   └── routes/category.route.ts
│   │       └── repositories/prisma/category.repository.ts
│   ├── partner/
│   │   ├── domain/
│   │   │   ├── models/
│   │   │   ├── repositories/
│   │   │   └── schemas/
│   │   └── infra/
│   │       ├── http/
│   │       │   ├── controllers/
│   │       │   └── routes/partner.route.ts
│   │       └── repositories/prisma/
│   └── plan/
│       ├── application/usecases/
│       │   ├── create-plan.usecase.ts
│       │   ├── delete-plan.usecase.ts
│       │   ├── list-plans.usecase.ts
│       │   └── update-plan.usecase.ts
│       ├── domain/
│       │   ├── models/plan.model.ts
│       │   ├── repositories/plan.repository.ts
│       │   └── schemas/
│       └── infra/
│           ├── http/
│           │   ├── controllers/
│           │   └── routes/plan.route.ts
│           └── repositories/prisma/plan.repository.ts
```

## Responsabilidade de cada área

| Caminho                              | Responsabilidade                                                                                                                                                 |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.env.example`                       | Lista as variáveis de ambiente que podem configurar a API.                                                                                                       |
| `prisma.config.ts`                   | Configura o schema, a conexão e o seed usados pelas ferramentas de persistência.                                                                                 |
| `vitest.config.ts`                   | Configura o Vitest com reinicialização dos mocks entre os testes.                                                                                                |
| `prisma/schema.prisma`               | Declara a fonte de dados PostgreSQL, os modelos persistidos e a geração do cliente de acesso aos dados.                                                          |
| `prisma/seed.ts`                     | Cria ou atualiza o administrador inicial, usando a senha definida em `ADMIN_PASSWORD`; executado por `pnpm prisma:seed`.                                         |
| `prisma/migrations/`                 | Mantém o histórico versionado das mudanças no banco de dados.                                                                                                    |
| `src/bootstrap.ts`                   | Inicializa a aplicação.                                                                                                                                          |
| `src/shared/`                        | Reúne componentes compartilhados entre os módulos, separados entre regras de domínio e infraestrutura.                                                           |
| `src/shared/domain/`                 | Mantém erros, schemas, contratos de provider e contratos genéricos compartilhados entre as features.                                                             |
| `src/env.ts`                         | Valida e expõe as variáveis de ambiente da API.                                                                                                                  |
| `src/shared/infra/database/`         | Mantém o singleton do cliente Prisma e o código gerado a partir do schema.                                                                                       |
| `src/shared/infra/http/`             | Mantém a configuração HTTP global, a documentação OpenAPI, os middlewares e o agregador compartilhado de rotas.                                                  |
| `src/@types/`                        | Estende os tipos das bibliotecas usadas pela aplicação.                                                                                                          |
| `src/features/`                      | Organiza a API por funcionalidade; cada feature é dividida em `infra/`, `application/` e `domain/`, com HTTP separado em rotas e controllers dentro de `infra/`. |
| `src/features/auth/domain/`          | Mantém o modelo User, o schema de login e os contratos de acesso ao usuário.                                                                                     |
| `src/features/category/`             | Reúne o domínio, os casos de uso, os controllers, as rotas e o repositório de categorias.                                                                        |
| `src/features/partner/`              | Reúne o domínio, os controllers, as rotas e os repositórios de parceiros, contatos e descontos por plano.                                                        |
| `src/features/plan/`                 | Reúne o domínio, os casos de uso, os controllers, as rotas e o repositório de planos.                                                                            |
| `src/shared/infra/http/app.ts`       | Configura o Express, CORS com credenciais, leitura de cookies, Swagger e os middlewares globais.                                                                 |
| `src/shared/infra/http/docs/`        | Mantém o registry OpenAPI e a geração da documentação Swagger.                                                                                                   |
| `src/shared/infra/http/middlewares/` | Contém autenticação por sessão, limite de requisições, resposta de rota inexistente e tratamento de erros.                                                       |
| `src/shared/infra/providers/`        | Implementa hash de credenciais, tokens JWT e envio de e-mails com os serviços configurados pela aplicação.                                                       |
| `src/shared/helpers/`                | Reúne funções auxiliares, como gerenciamento de cookies, formatação de respostas e validação de entradas.                                                        |

Os controllers das features usam `formatResponse` para padronizar respostas de sucesso no envelope `{ data, meta? }`. Listas incluem `meta.total`, e cada resposta de item expõe somente os campos previstos pelo contrato.
Os schemas de resposta ficam junto ao domínio da feature e são usados também nos registros OpenAPI.
O schema compartilhado de erro fica em `src/shared/domain/schemas/errors/error-response.schema.ts` e é declarado diretamente em cada resposta de erro do OpenAPI.
Todos os contratos e implementações de providers ficam em `src/shared/domain/providers/` e `src/shared/infra/providers/`; as features apenas dependem desses contratos compartilhados.
As variáveis de ambiente ficam em `src/env.ts`, no mesmo nível de `bootstrap.ts`, e o gerenciamento de cookies fica em `src/shared/helpers/cookie-manager.helper.ts`.

## Referências

- [Visão geral do produto](../../docs/specs/overview.md)
- [Regras de domínio](../../docs/specs/domain.md)
- [Contrato HTTP](../../docs/specs/api.md)
