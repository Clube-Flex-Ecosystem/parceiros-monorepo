# API — Parceiros Clube Flex

Esta aplicação concentra as regras de negócio, autenticação, persistência e interfaces HTTP do CMS de parceiros. A interface HTTP usa Express com TypeScript, CORS, documentação Swagger e tratamento padrão para rotas inexistentes e erros inesperados.

## Estrutura

```text
.env.example
src/
├── bootstrap.ts
├── http/
│   ├── app.ts
│   ├── controllers/
│   │   ├── benefit-controller.ts
│   │   ├── category-controller.ts
│   │   ├── contact-controller.ts
│   │   ├── partner-controller.ts
│   │   ├── plan-controller.ts
│   │   ├── unit-controller.ts
│   │   └── user-controller.ts
│   ├── docs/
│   ├── middlewares/
│   └── routes/
│       ├── benefit-routes.ts
│       ├── category-routes.ts
│       ├── contact-routes.ts
│       ├── index.ts
│       ├── partner-routes.ts
│       ├── plan-routes.ts
│       ├── unit-routes.ts
│       └── user-routes.ts
├── domains/
│   ├── errors/
│   ├── models/
│   └── repositories/
├── helpers/
├── schemas/
├── usecases/
├── repositories/
├── database/
│   └── prisma/
├── providers/
│   └── env/
└── validations/
    └── zod/
```

## Responsabilidade de cada área

| Caminho                     | Responsabilidade                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `.env.example`              | Lista as variáveis de ambiente que podem configurar a API.                                                         |
| `src/bootstrap.ts`          | Inicializa a aplicação.                                                                                            |
| `src/http/app.ts`           | Configura o Express, CORS, Swagger e os middlewares globais.                                                       |
| `src/http/controllers/`     | Valida as entradas e prepara as respostas das rotas; enquanto os casos de uso não existem, devolve `{ ok: true }`. |
| `src/http/docs/`            | Mantém o registry OpenAPI e a geração da documentação Swagger.                                                     |
| `src/http/middlewares/`     | Contém validações, resposta de rota inexistente, erros e logs estruturados.                                        |
| `src/http/routes/`          | Declara as rotas HTTP e concentra seus prefixos no arquivo `index.ts`.                                             |
| `src/domains/errors/`       | Define erros de domínio, como `AppError`, com códigos HTTP padronizados.                                           |
| `src/domains/models/`       | Define os modelos User, Partner, Category, Contact, Unit, Benefit e Plan.                                          |
| `src/domains/repositories/` | Define os contratos de acesso para User, Partner e suas entidades associadas.                                      |
| `src/helpers/`              | Reúne funções auxiliares, como a formatação de respostas no padrão da API.                                         |
| `src/schemas/`              | Define schemas reutilizáveis com metadados para a documentação das entradas HTTP.                                  |
| `src/usecases/`             | Implementa os fluxos e regras de negócio.                                                                          |
| `src/repositories/`         | Implementa o acesso aos dados definido pelos contratos de domínio.                                                 |
| `src/database/prisma/`      | Mantém os artefatos de persistência do Prisma.                                                                     |
| `src/providers/`            | Integra serviços e recursos externos à aplicação.                                                                  |
| `src/providers/env/`        | Valida `PORT` e `NODE_ENV` com T3 Env.                                                                             |
| `src/validations/`          | Centraliza validações compartilhadas pela aplicação.                                                               |
| `src/validations/zod/`      | Valida dados com schemas reutilizáveis e converte entradas inválidas em `AppError`.                                |

## Referências

- [Visão geral do produto](../../docs/specs/overview.md)
- [Regras de domínio](../../docs/specs/domain.md)
- [Contrato HTTP](../../docs/specs/api.md)
