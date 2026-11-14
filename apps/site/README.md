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
├── config/
│   └── env.ts
├── features/
│   ├── admin/
│   │   ├── categories/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   ├── schemas/
│   │   │   └── utils/
│   │   ├── edit-partner/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   ├── schemas/
│   │   │   └── utils/
│   │   ├── home/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   ├── schemas/
│   │   │   └── utils/
│   │   ├── new-partner/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   ├── schemas/
│   │   │   └── utils/
│   │   ├── partners/
│   │   │   ├── api/
│   │   │   ├── components/
│   │   │   ├── schemas/
│   │   │   └── utils/
│   │   └── plans/
│   │       ├── api/
│   │       ├── components/
│   │       ├── schemas/
│   │       └── utils/
│   ├── auth/
│   │   └── login/
│   │       ├── api/
│   │       ├── components/
│   │       ├── schemas/
│   │       └── utils/
│   └── site/
│       ├── home/
│       │   ├── api/
│       │   ├── components/
│       │   ├── schemas/
│       │   └── utils/
│       ├── partner/
│       │   ├── api/
│       │   ├── components/
│       │   ├── schemas/
│       │   └── utils/
│       └── partners/
│           ├── api/
│           ├── components/
│           ├── schemas/
│           └── utils/
└── styles/
    └── globals.css
```

As rotas ficam em `src/app/`, com nomes de pastas em inglês, e `src/features/` tem uma pasta para cada rota, agrupada por contexto (`site`, `auth` e `admin`). Cada feature organiza seu código em `api`, `components`, `schemas` e `utils`.

## Variáveis de ambiente

| Variável     | Descrição                                                                  |
| ------------ | -------------------------------------------------------------------------- |
| `API_URL`    | URL base da API consumida pelo site.                                       |
| `PUBLIC_URL` | URL pública do site, usada como base do SEO (URLs canônicas e Open Graph). |

## SEO e favicon

O `src/app/layout.tsx` define título, descrição, URL canônica, Open Graph e Twitter, com `metadataBase` a partir de `PUBLIC_URL`. O favicon é definido com os logos de `public/`, usando `logo.svg` no tema claro e `logo-white.svg` no tema escuro.

## Scripts

Execute a partir da raiz do monorepo:

```sh
pnpm --filter @parceiros/site dev
pnpm --filter @parceiros/site build
pnpm --filter @parceiros/site typecheck
```
