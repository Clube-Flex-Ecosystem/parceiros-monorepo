# Site — Parceiros Clube Flex

Esta aplicação é o site do projeto. Ela usa Next.js com App Router, TypeScript, Tailwind CSS e React Compiler. Lint e formatação seguem as configurações globais do monorepo, e a validação de variáveis de ambiente usa `@t3-oss/env-core` e `zod`, instalados na raiz.

## Estrutura

```text
.env.example
next.config.ts
tsconfig.json
public/
├── logo-white.svg
└── logo.svg
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (protected)/
│   │   ├── admin/
│   │   │   ├── categories/
│   │   │   │   └── page.tsx
│   │   │   ├── partners/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── new/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── plans/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (site)/
│   │   ├── partners/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── layout.tsx
├── features/
│   ├── admin/
│   │   ├── categories/
│   │   │   ├── api/
│   │   │   │   ├── create-category.ts
│   │   │   │   ├── delete-category.ts
│   │   │   │   ├── list-categories.ts
│   │   │   │   └── update-category.ts
│   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── ui/
│   │   │   ├── schemas/
│   │   │   └── utils/
│   │   ├── edit-partner/
│   │   │   ├── api/
│   │   │   │   ├── update-partner-status.ts
│   │   │   │   └── update-partner.ts
│   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── ui/
│   │   │   ├── schemas/
│   │   │   └── utils/
│   │   ├── home/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── ui/
│   │   │   ├── schemas/
│   │   │   └── utils/
│   │   ├── new-partner/
│   │   │   ├── api/
│   │   │   │   └── create-partner.ts
│   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── ui/
│   │   │   ├── schemas/
│   │   │   └── utils/
│   │   ├── partners/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   │   └── index.tsx
│   │   │   │   └── ui/
│   │   │   ├── schemas/
│   │   │   └── utils/
│   │   └── plans/
│   │       ├── api/
│   │       │   ├── create-plan.ts
│   │       │   ├── delete-plan.ts
│   │       │   ├── list-plans.ts
│   │       │   └── update-plan.ts
│   │       ├── components/
│   │       │   ├── pages/
│   │       │   │   └── index.tsx
│   │       │   └── ui/
│   │       ├── schemas/
│   │       └── utils/
│   ├── auth/
│   │   └── login/
│   │       ├── api/
│   │       │   ├── get-current-user.ts
│   │       │   ├── login.ts
│   │       │   └── logout.ts
│   │       ├── components/
│   │       │   ├── pages/
│   │       │   │   └── index.tsx
│   │       │   └── ui/
│   │       ├── schemas/
│   │       └── utils/
│   └── site/
│       ├── home/
│       │   ├── api/
│       │   ├── components/
│       │   │   ├── pages/
│       │   │   │   └── index.tsx
│       │   │   └── ui/
│       │   ├── schemas/
│       │   └── utils/
│       ├── partner/
│       │   ├── api/
│       │   ├── components/
│       │   │   ├── pages/
│       │   │   │   └── index.tsx
│       │   │   └── ui/
│       │   ├── schemas/
│       │   └── utils/
│       └── partners/
│           ├── api/
│           ├── components/
│           │   ├── pages/
│           │   │   └── index.tsx
│           │   └── ui/
│           ├── schemas/
│           └── utils/
└── shared/
    ├── components/
    │   ├── layouts/
    │   │   ├── auth/
    │   │   │   └── index.tsx
    │   │   ├── protected/
    │   │   │   └── index.tsx
    │   │   └── site/
    │   │       └── index.tsx
    │   └── ui/
    ├── config/
    │   └── env.ts
    ├── lib/
    │   ├── api-client.ts
    │   └── api-types.d.ts
    ├── providers/
    │   ├── nuqs-provider.tsx
    │   ├── query-provider.tsx
    │   └── toast-provider.tsx
    └── styles/
        └── globals.css
```

As rotas ficam em `src/app/`, com nomes de pastas em inglês, e `src/features/` tem uma pasta para cada rota, agrupada por contexto (`site`, `auth` e `admin`). Cada feature organiza seu código em `api`, `components`, `schemas` e `utils`. A pasta `components` tem `pages`, com o componente da página onde os componentes de `ui` são reunidos, e `ui`, com os componentes exclusivos de cada página. A pasta `api` tem uma função por endpoint, usando o cliente de `src/shared/lib/`. As chamadas de `logout` e `get-current-user` ficam em `auth/login`, e as de parceiros ficam em `new-partner` (criação) e `edit-partner` (edição e estado). O que é compartilhado entre as rotas fica em `src/shared/`: componentes (`components`), com os layouts de cada contexto em `layouts` e os componentes de interface em `ui`, configuração (`config`), cliente e tipos da API (`lib`), providers globais (`providers`) e estilos globais (`styles`).

## Variáveis de ambiente

| Variável     | Descrição                                                                  |
| ------------ | -------------------------------------------------------------------------- |
| `API_URL`    | URL base da API consumida pelo site.                                       |
| `PUBLIC_URL` | URL pública do site, usada como base do SEO (URLs canônicas e Open Graph). |

## SEO e favicon

O `src/app/layout.tsx` define título, descrição, URL canônica, Open Graph e Twitter, com `metadataBase` a partir de `PUBLIC_URL`. O favicon é definido com os logos de `public/`, usando `logo.svg` no tema claro e `logo-white.svg` no tema escuro.

## Tipos da API

Os tipos de `src/shared/lib/api-types.d.ts` são gerados a partir do documento OpenAPI exposto pela API em `/docs/openapi.json`, com `openapi-typescript`. O arquivo é gerado e não deve ser editado manualmente. Com a API em execução na porta padrão (`3000`), rode a partir da raiz do monorepo:

```sh
pnpm --filter @parceiros/site generate:types
```

Sempre que os contratos da API mudarem, execute o comando novamente e versione o arquivo atualizado.

## Cliente da API

O `src/shared/lib/api-client.ts` exporta `api`, um cliente criado com `openapi-fetch` sobre o `fetch` nativo e tipado pelo `api-types.d.ts`, com `API_URL` como base. Como usa o `fetch` do Next.js, as opções `next: { revalidate, tags }` e `cache` funcionam normalmente.

```ts
const { data, error } = await api.GET('/admin/categories', {
  cache: 'no-store',
});
```

## Providers

Os providers globais ficam em `src/shared/providers/`, um por arquivo, e são aplicados no `src/app/layout.tsx`.

| Arquivo              | Responsabilidade                                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| `query-provider.tsx` | Fornece o TanStack Query, criando o `QueryClient` com `useState` para mantê-lo estável entre renders. |
| `nuqs-provider.tsx`  | Fornece o adaptador do `nuqs` para estado na URL no App Router.                                       |
| `toast-provider.tsx` | Renderiza o `Toaster` do `sonner` para as notificações.                                               |

## Scripts

Execute a partir da raiz do monorepo:

```sh
pnpm --filter @parceiros/site dev
pnpm --filter @parceiros/site build
pnpm --filter @parceiros/site typecheck
pnpm --filter @parceiros/site generate:types
```
