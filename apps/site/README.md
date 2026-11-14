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
│   ├── layout.tsx
│   └── page.tsx
├── config/
│   └── env.ts
└── styles/
    └── globals.css
```

## Variáveis de ambiente

| Variável     | Descrição                            |
| ------------ | ------------------------------------ |
| `API_URL`    | URL base da API consumida pelo site. |
| `PUBLIC_URL` | URL pública do site.                 |

## Favicon

O `src/app/layout.tsx` define o favicon com os logos de `public/`, usando `logo.svg` no tema claro e `logo-white.svg` no tema escuro.

## Scripts

Execute a partir da raiz do monorepo:

```sh
pnpm --filter @parceiros/site dev
pnpm --filter @parceiros/site build
pnpm --filter @parceiros/site typecheck
```
