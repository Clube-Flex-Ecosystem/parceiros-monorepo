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
│   ├── docs/
│   ├── middlewares/
│   └── routes/
├── domains/
│   ├── errors/
│   ├── models/
│   └── repositories/
├── helpers/
├── usecases/
├── repositories/
├── database/
│   └── prisma/
├── providers/
│   └── env/
└── validations/
```

## Responsabilidade de cada área

| Caminho                     | Responsabilidade                                                              |
| --------------------------- | ----------------------------------------------------------------------------- |
| `.env.example`              | Lista as variáveis de ambiente que podem configurar a API.                    |
| `src/bootstrap.ts`          | Inicializa a aplicação.                                                       |
| `src/http/app.ts`           | Configura o Express, CORS, Swagger e os middlewares globais.                  |
| `src/http/controllers/`     | Converte requisições HTTP em chamadas de casos de uso e devolve respostas.    |
| `src/http/docs/`            | Mantém o registry OpenAPI e a geração da documentação Swagger.                |
| `src/http/middlewares/`     | Contém validações, resposta de rota inexistente, erros e logs estruturados.   |
| `src/http/routes/`          | Declara as rotas HTTP da aplicação.                                           |
| `src/domains/errors/`       | Define erros de domínio, como `AppError`, com códigos HTTP padronizados.      |
| `src/domains/models/`       | Define os modelos User, Partner, Category, Contact, Unit, Benefit e Plan.     |
| `src/domains/repositories/` | Define os contratos de acesso para User, Partner e suas entidades associadas. |
| `src/helpers/`              | Reúne funções auxiliares, como a formatação de respostas no padrão da API.    |
| `src/usecases/`             | Implementa os fluxos e regras de negócio.                                     |
| `src/repositories/`         | Implementa o acesso aos dados definido pelos contratos de domínio.            |
| `src/database/prisma/`      | Mantém os artefatos de persistência do Prisma.                                |
| `src/providers/`            | Integra serviços e recursos externos à aplicação.                             |
| `src/providers/env/`        | Valida `PORT` e `NODE_ENV` com T3 Env.                                        |
| `src/validations/`          | Centraliza validações compartilhadas pela aplicação.                          |

## Referências

- [Visão geral do produto](../../docs/specs/overview.md)
- [Regras de domínio](../../docs/specs/domain.md)
- [Contrato HTTP](../../docs/specs/api.md)
