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
src/
├── @types/
│   └── express.d.ts
├── bootstrap.ts
├── config/
│   ├── cookie.ts
│   └── env.ts
├── controllers/
│   ├── auth-controller.ts
│   ├── category-controller.ts
│   ├── partner-controller.ts
│   └── plan-controller.ts
├── http/
│   ├── app.ts
│   ├── docs/
│   │   ├── document.ts
│   │   └── openapi.ts
│   └── middlewares/
│       └── authenticated.ts
├── routes/
│   ├── auth-routes.ts
│   ├── category-routes.ts
│   ├── index.ts
│   ├── partner-routes.ts
│   └── plan-routes.ts
├── domains/
│   ├── errors/
│   ├── models/
│   ├── providers/
│   └── repositories/
├── helpers/
├── schemas/
│   ├── auth/
│   ├── category/
│   ├── partner/
│   ├── plan/
│   └── shared/
├── usecases/
│   ├── auth/
│   │   ├── get-current-user.ts
│   │   ├── login.ts
│   │   └── logout.ts
│   ├── category/
│   │   ├── create-category.ts
│   │   ├── delete-category.ts
│   │   ├── list-categories.ts
│   │   └── update-category.ts
│   ├── partner/
│   └── plan/
│       ├── create-plan.ts
│       ├── delete-plan.ts
│       ├── list-plans.ts
│       └── update-plan.ts
├── repositories/
│   └── prisma/
│       ├── category-repository.ts
│       ├── contact-repository.ts
│       ├── partner-plan-discount-repository.ts
│       ├── partner-repository.ts
│       ├── plan-repository.ts
│       └── user-repository.ts
├── database/
│   └── prisma/
│       ├── client.ts
│       └── generated/
└── providers/
    ├── bcrypt-hash-provider.ts
    ├── jsonwebtoken-jwt-provider.ts
    └── resend-mail-provider.ts
```

## Responsabilidade de cada área

| Caminho                     | Responsabilidade                                                                                                                                                  |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.env.example`              | Lista as variáveis de ambiente que podem configurar a API.                                                                                                        |
| `prisma.config.ts`          | Configura o schema, a conexão e o seed usados pelas ferramentas de persistência.                                                                                  |
| `prisma/schema.prisma`      | Declara a fonte de dados PostgreSQL, os modelos persistidos e a geração do cliente de acesso aos dados.                                                           |
| `prisma/seed.ts`            | Cria ou atualiza o administrador inicial, usando a senha definida em `ADMIN_PASSWORD`; executado por `pnpm prisma:seed`.                                          |
| `prisma/migrations/`        | Mantém o histórico versionado das mudanças no banco de dados.                                                                                                     |
| `src/bootstrap.ts`          | Inicializa a aplicação.                                                                                                                                           |
| `src/@types/`               | Estende os tipos de bibliotecas usadas pela aplicação.                                                                                                            |
| `src/config/env.ts`         | Valida conexão de dados, credenciais JWT e Resend, além das configurações de execução e cookies.                                                                  |
| `src/config/cookie.ts`      | Centraliza leitura, criação e remoção de cookies HTTP com `HttpOnly`, `SameSite=Lax` e expiração padrão de sete dias.                                             |
| `src/http/app.ts`           | Configura o Express, CORS com credenciais, leitura de cookies, Swagger e os middlewares globais.                                                                  |
| `src/controllers/`          | Agrupa e valida as entradas HTTP por módulo funcional; autenticação, categorias e planos delegam para seus casos de uso, enquanto parceiros permanece provisório. |
| `src/http/docs/`            | Mantém o registry OpenAPI e a geração da documentação Swagger.                                                                                                    |
| `src/http/middlewares/`     | Contém autenticação por sessão, resposta de rota inexistente e tratamento de erros.                                                                               |
| `src/routes/`               | Declara as rotas HTTP por módulo, registra cada uma no OpenAPI e concentra seus prefixos no arquivo `index.ts`.                                                   |
| `src/domains/errors/`       | Define erros de domínio, como `AppError`, com códigos HTTP padronizados.                                                                                          |
| `src/domains/models/`       | Define os modelos User, Partner, Category, Contact, PartnerPlanDiscount e Plan.                                                                                   |
| `src/domains/providers/`    | Define as abstrações de hash de credenciais, tokens JWT e envio de e-mails usadas pelos casos de uso.                                                             |
| `src/domains/repositories/` | Define os contratos de acesso para User, Partner e suas entidades associadas.                                                                                     |
| `src/repositories/prisma/`  | Implementa os contratos de repositório com o cliente Prisma, sem tratamento local de erros de persistência.                                                       |
| `src/helpers/`              | Reúne funções auxiliares, como formatação de respostas e validação de entradas.                                                                                   |
| `src/schemas/`              | Define schemas reutilizáveis, separados por módulo, para as entradas HTTP e o formato universal de erro em `shared/`.                                             |
| `src/usecases/`             | Implementa os fluxos de autenticação, categorias e planos, organizados por módulo e com um arquivo por caso de uso; parceiros fica reservado.                     |
| `src/database/prisma/`      | Mantém o singleton do cliente de acesso ao PostgreSQL e o código gerado a partir do schema.                                                                       |
| `src/providers/`            | Implementa hash de credenciais, tokens JWT e envio de e-mails com os serviços configurados pela aplicação.                                                        |

## Referências

- [Visão geral do produto](../../docs/specs/overview.md)
- [Regras de domínio](../../docs/specs/domain.md)
- [Contrato HTTP](../../docs/specs/api.md)
