# API — Parceiros Clube Flex

Esta aplicação concentra as regras de negócio, autenticação, persistência e interfaces HTTP do CMS de parceiros.

## Estrutura

```text
src/
├── bootstrap.ts
├── http/
│   ├── app.ts
│   ├── controllers/
│   ├── docs/
│   ├── middlewares/
│   └── routes/
├── domains/
│   ├── models/
│   └── repositories/
├── usecases/
├── repositories/
├── database/
│   └── prisma/
└── providers/
```

## Responsabilidade de cada área

| Caminho                     | Responsabilidade                                                           |
| --------------------------- | -------------------------------------------------------------------------- |
| `src/bootstrap.ts`          | Inicializa a aplicação.                                                    |
| `src/http/app.ts`           | Configura a aplicação HTTP.                                                |
| `src/http/controllers/`     | Converte requisições HTTP em chamadas de casos de uso e devolve respostas. |
| `src/http/docs/`            | Mantém artefatos de documentação da interface HTTP.                        |
| `src/http/middlewares/`     | Contém validações e controles executados antes dos controladores.          |
| `src/http/routes/`          | Declara as rotas HTTP da aplicação.                                        |
| `src/domains/models/`       | Define os conceitos centrais do domínio.                                   |
| `src/domains/repositories/` | Define os contratos de acesso aos dados do domínio.                        |
| `src/usecases/`             | Implementa os fluxos e regras de negócio.                                  |
| `src/repositories/`         | Implementa o acesso aos dados definido pelos contratos de domínio.         |
| `src/database/prisma/`      | Mantém os artefatos de persistência do Prisma.                             |
| `src/providers/`            | Integra serviços e recursos externos à aplicação.                          |

## Referências

- [Visão geral do produto](../../docs/specs/overview.md)
- [Regras de domínio](../../docs/specs/domain.md)
- [Contrato HTTP](../../docs/specs/api.md)
