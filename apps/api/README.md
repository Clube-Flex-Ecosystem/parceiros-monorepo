# API — Parceiros Clube Flex

Esta aplicação concentra as regras de negócio, autenticação, persistência e interfaces HTTP do CMS de parceiros. A interface HTTP usa Express com TypeScript, CORS com credenciais, leitura de cookies, documentação Swagger e tratamento padrão para rotas inexistentes e erros inesperados.

## Estrutura

```text
.env.example
src/
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
├── routes/
│   ├── auth-routes.ts
│   ├── category-routes.ts
│   ├── index.ts
│   ├── partner-routes.ts
│   └── plan-routes.ts
├── domains/
│   ├── errors/
│   ├── models/
│   └── repositories/
├── helpers/
├── schemas/
│   ├── auth/
│   ├── category/
│   ├── partner/
│   └── plan/
└── providers/
    └── .gitkeep
```

## Responsabilidade de cada área

| Caminho                     | Responsabilidade                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `.env.example`              | Lista as variáveis de ambiente que podem configurar a API.                                                                                  |
| `src/bootstrap.ts`          | Inicializa a aplicação.                                                                                                                     |
| `src/config/env.ts`         | Valida `PORT`, `NODE_ENV`, `COOKIE_DOMAIN` e `COOKIE_EXPIRES_DAYS`.                                                                         |
| `src/config/cookie.ts`      | Centraliza leitura, criação e remoção de cookies HTTP com `HttpOnly`, `SameSite=Lax`, domínio configurável e expiração padrão de sete dias. |
| `src/http/app.ts`           | Configura o Express, CORS com credenciais, leitura de cookies, Swagger e os middlewares globais.                                            |
| `src/controllers/`          | Agrupa as entradas HTTP por módulo funcional; enquanto os casos de uso não existem, devolve `{ ok: true }`.                                 |
| `src/http/docs/`            | Mantém o registry OpenAPI e a geração da documentação Swagger.                                                                              |
| `src/http/middlewares/`     | Contém resposta de rota inexistente e tratamento de erros.                                                                                  |
| `src/routes/`               | Declara as rotas HTTP por módulo e concentra seus prefixos no arquivo `index.ts`.                                                           |
| `src/domains/errors/`       | Define erros de domínio, como `AppError`, com códigos HTTP padronizados.                                                                    |
| `src/domains/models/`       | Define os modelos User, Partner, Category, Contact, PartnerPlanDiscount e Plan.                                                             |
| `src/domains/repositories/` | Define os contratos de acesso para User, Partner e suas entidades associadas.                                                               |
| `src/helpers/`              | Reúne funções auxiliares, como formatação de respostas e validação de entradas.                                                             |
| `src/schemas/`              | Define schemas reutilizáveis, separados por módulo, para as entradas HTTP.                                                                  |
| `src/providers/`            | Reserva o espaço para integrações e provedores compartilhados.                                                                              |

## Referências

- [Visão geral do produto](../../docs/specs/overview.md)
- [Regras de domínio](../../docs/specs/domain.md)
- [Contrato HTTP](../../docs/specs/api.md)
