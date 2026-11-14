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
    │   │   │   ├── auth-form-panel.tsx
    │   │   │   ├── auth-showcase-illustration.tsx
    │   │   │   ├── auth-showcase-message.tsx
    │   │   │   ├── auth-showcase-panel.tsx
    │   │   │   ├── auth-showcase-window.tsx
    │   │   │   └── index.tsx
    │   │   ├── protected/
    │   │   │   ├── index.tsx
    │   │   │   ├── nav-link.tsx
    │   │   │   ├── nav-links.tsx
    │   │   │   ├── protected-breadcrumb.tsx
    │   │   │   ├── protected-header.tsx
    │   │   │   ├── protected-mobile-nav.tsx
    │   │   │   ├── protected-navigation.ts
    │   │   │   ├── protected-sidebar-content.tsx
    │   │   │   ├── protected-sidebar.tsx
    │   │   │   └── user-menu.tsx
    │   │   └── site/
    │   │       └── index.tsx
    │   └── ui/
    │       ├── fields/
    │       │   ├── checkbox-field.tsx
    │       │   ├── field-wrapper.tsx
    │       │   ├── input-field.tsx
    │       │   ├── radio-group-field.tsx
    │       │   ├── select-field.tsx
    │       │   ├── switch-field.tsx
    │       │   ├── textarea-field.tsx
    │       │   └── use-field.ts
    │       └── primitives/
    │           ├── alert-dialog.tsx
    │           ├── avatar.tsx
    │           ├── badge.tsx
    │           ├── breadcrumb.tsx
    │           ├── button.tsx
    │           ├── card.tsx
    │           ├── checkbox.tsx
    │           ├── dialog.tsx
    │           ├── dropdown-menu.tsx
    │           ├── input.tsx
    │           ├── label.tsx
    │           ├── radio-group.tsx
    │           ├── scroll-area.tsx
    │           ├── select.tsx
    │           ├── separator.tsx
    │           ├── sheet.tsx
    │           ├── skeleton.tsx
    │           ├── switch.tsx
    │           ├── tabs.tsx
    │           ├── textarea.tsx
    │           └── tooltip.tsx
    ├── config/
    │   └── env.ts
    ├── lib/
    │   ├── api-client.ts
    │   ├── api-types.d.ts
    │   ├── cn.ts
    │   └── tv.ts
    ├── providers/
    │   ├── nuqs-provider.tsx
    │   ├── query-provider.tsx
    │   └── toast-provider.tsx
    └── styles/
        ├── globals.css
        └── tokens.css
```

As rotas ficam em `src/app/`, com nomes de pastas em inglês, e `src/features/` tem uma pasta para cada rota, agrupada por contexto (`site`, `auth` e `admin`). Cada feature organiza seu código em `api`, `components`, `schemas` e `utils`. A pasta `components` tem `pages`, com o componente da página onde os componentes de `ui` são reunidos, e `ui`, com os componentes exclusivos de cada página. A pasta `api` tem uma função por endpoint, usando o cliente de `src/shared/lib/`. As chamadas de `logout` e `get-current-user` ficam em `auth/login`, e as de parceiros ficam em `new-partner` (criação) e `edit-partner` (edição e estado). O que é compartilhado entre as rotas fica em `src/shared/`: componentes (`components`), com os layouts de cada contexto em `layouts` e os componentes de interface em `ui`, configuração (`config`), cliente e tipos da API (`lib`), providers globais (`providers`) e estilos globais e design tokens (`styles`).

## Variáveis de ambiente

| Variável     | Descrição                                                                  |
| ------------ | -------------------------------------------------------------------------- |
| `API_URL`    | URL base da API consumida pelo site.                                       |
| `PUBLIC_URL` | URL pública do site, usada como base do SEO (URLs canônicas e Open Graph). |

## SEO e favicon

O `src/app/layout.tsx` define título, descrição, URL canônica, Open Graph e Twitter, com `metadataBase` a partir de `PUBLIC_URL`. O favicon é definido com os logos de `public/`, usando `logo.svg` no tema claro e `logo-white.svg` no tema escuro.

## Design system

O design system parte do cupom de benefício: o laranja do logotipo é a única cor de marca, sobre neutros frios, e aponta sempre para ação ou desconto. Os números de desconto usam a tipografia expandida e inclinada do logotipo, o recorte de cupom é a assinatura visual, e o relevo tátil fica restrito a botões e ilustrações.

| Arquivo                         | Responsabilidade                                                                                                                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/shared/styles/tokens.css`  | Define paletas, cores semânticas (claro e escuro), estados do parceiro, fontes, escala tipográfica, espaços, tamanhos, raios, sombras, curvas, durações, camadas, animações, scrollbars e ajustes de WebKit. |
| `src/shared/styles/globals.css` | Importa o Tailwind e os tokens, aplica a base do documento (fundo, texto, títulos, foco, seleção e movimento reduzido) e declara os utilitários do design system.                                            |

### Fontes

| Papel     | Fonte        | Uso                                                   |
| --------- | ------------ | ----------------------------------------------------- |
| `display` | Archivo      | Títulos e números de desconto, com largura expandida. |
| `sans`    | Onest        | Texto de interface e conteúdo.                        |
| `mono`    | Martian Mono | Cupons, códigos e números tabulares.                  |

As fontes são carregadas em `src/app/layout.tsx` e expostas como `--font-archivo`, `--font-onest` e `--font-martian-mono`.

### Utilitários

| Utilitário                            | Uso                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------- |
| `button-primary` e `button-secondary` | Superfícies táteis de botão, com estados de hover, pressionado e desabilitado.            |
| `ticket` e `ticket-perforation`       | Recorte lateral e linha picotada do cupom. A elevação vem de `drop-shadow-ticket` no pai. |
| `slant`                               | Inclinação do logotipo, para números de desconto.                                         |
| `illustration`                        | Cor e sombra projetada das ilustrações.                                                   |
| `skeleton`                            | Placeholder de carregamento com brilho animado.                                           |
| `scrollbar-none`                      | Oculta a barra de rolagem mantendo a rolagem.                                             |

Os tokens do tema geram utilitários do Tailwind, como `bg-surface`, `text-muted-foreground`, `bg-status-published-soft`, `font-display`, `text-discount`, `h-control-md`, `max-w-content`, `px-gutter`, `rounded-lg`, `shadow-md`, `ease-flex` e `animate-dash-in`. Durações e camadas não têm namespace no Tailwind e são usadas como variáveis, por exemplo `duration-(--duration-fast)` e `z-(--z-modal)`. O tema escuro segue a preferência do sistema.

## Primitivos de interface

Os componentes de `src/shared/components/ui/primitives/` usam os primitivos do Radix UI (pacote `radix-ui`), estilizados com os tokens do design system. Cada arquivo agrupa um primitivo e as suas partes. As variantes são declaradas com `tailwind-variants` e os ícones vêm de `lucide-react`.

| Arquivo                                             | Primitivo                                                                                                              |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `button.tsx`                                        | Botão com variantes `primary`, `secondary`, `outline`, `ghost`, `danger` e `link`, estado de carregamento e `asChild`. |
| `input.tsx` e `textarea.tsx`                        | Campos de texto, com a base de campo compartilhada em `fieldVariants`.                                                 |
| `label.tsx`                                         | Rótulo de campo.                                                                                                       |
| `checkbox.tsx`, `radio-group.tsx` e `switch.tsx`    | Controles de seleção.                                                                                                  |
| `select.tsx`                                        | Lista de seleção.                                                                                                      |
| `dialog.tsx` e `alert-dialog.tsx`                   | Janela modal e janela de confirmação.                                                                                  |
| `sheet.tsx`                                         | Painel lateral sobre o diálogo, com variantes `left` e `right`, usado como menu em telas pequenas.                     |
| `dropdown-menu.tsx` e `tooltip.tsx`                 | Menu de ações e dica de contexto.                                                                                      |
| `tabs.tsx`                                          | Abas.                                                                                                                  |
| `card.tsx`                                          | Card com variantes `default`, `muted` e `ticket` (cupom, com linha picotada).                                          |
| `badge.tsx`                                         | Selo com variantes de feedback e dos estados do parceiro (`draft`, `published` e `inactive`).                          |
| `avatar.tsx`                                        | Avatar com imagem e iniciais de reserva, com variantes de tamanho `sm`, `md` e `lg`.                                   |
| `breadcrumb.tsx`                                    | Trilha de navegação. O Radix não tem esse primitivo, então as partes usam a marcação acessível de `nav`, `ol` e `li`.  |
| `separator.tsx`, `scroll-area.tsx` e `skeleton.tsx` | Divisor, área de rolagem e placeholder de carregamento.                                                                |

Os utilitários de classes ficam em `src/shared/lib/`: `cn.ts` combina classes com `clsx` e `tailwind-merge`, já estendido com os tokens do design system para que conflitos como `text-sm` e `text-discount` sejam resolvidos, e `tv.ts` exporta o `tv` do `tailwind-variants` usando esse mesmo merge.

## Campos de formulário

Os componentes de `src/shared/components/ui/fields/` são os primitivos prontos para uso em formulários do React Hook Form. Cada campo lê o formulário pelo `useFormContext`, então deve ser renderizado dentro de um `FormProvider`. Ele recebe o `name` do campo e as mesmas propriedades do primitivo correspondente, mais `label` e `helpText`. O erro do formulário substitui o texto de ajuda e é ligado ao controle por `aria-invalid` e `aria-describedby`. Nomes aninhados, como `discounts.0.discountPercent`, funcionam normalmente.

| Arquivo                 | Primitivo    | Integração                                                                                                              |
| ----------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `input-field.tsx`       | `Input`      | `register`                                                                                                              |
| `textarea-field.tsx`    | `Textarea`   | `register`                                                                                                              |
| `select-field.tsx`      | `Select`     | `Controller`, com `options` e `placeholder`                                                                             |
| `checkbox-field.tsx`    | `Checkbox`   | `Controller`, com rótulo ao lado do controle                                                                            |
| `switch-field.tsx`      | `Switch`     | `Controller`, com rótulo ao lado do controle                                                                            |
| `radio-group-field.tsx` | `RadioGroup` | `Controller`, com `options`                                                                                             |
| `field-wrapper.tsx`     | `Label`      | Layout compartilhado com rótulo, asterisco de obrigatório, ajuda e erro, com variantes de orientação e de erro em `tv`. |
| `use-field.ts`          | -            | Hook que lê o erro do campo e monta o id e os atributos de acessibilidade.                                              |

## Layout de autenticação

O `src/shared/components/layouts/auth/` monta as telas de `(auth)` em duas colunas: à esquerda, o card com o conteúdo da página; à direita, a partir de telas grandes, o painel da marca. Em telas menores só o card é exibido. O layout é dividido em partes para facilitar a manutenção.

| Arquivo                          | Responsabilidade                                                                               |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| `index.tsx`                      | Organiza as duas colunas.                                                                      |
| `auth-form-panel.tsx`            | Card da esquerda, com o logotipo, o conteúdo centralizado e a nota de acesso restrito.         |
| `auth-showcase-panel.tsx`        | Painel da direita, com o fundo laranja, o brilho e a textura.                                  |
| `auth-showcase-illustration.tsx` | Pilha de janelas do painel em perspectiva.                                                     |
| `auth-showcase-window.tsx`       | Uma janela da ilustração, com variantes de profundidade; a da frente mostra o menu e um cupom. |
| `auth-showcase-message.tsx`      | Frase sobre o produto no rodapé do painel.                                                     |

## Layout administrativo

O `src/shared/components/layouts/protected/` monta as telas de `(protected)`: à esquerda, a partir de telas grandes, o menu lateral fixo sobre o fundo da página; à direita, o card do conteúdo, com um header fixo que mostra a trilha de navegação. Em telas menores o card ocupa a tela toda e o menu abre em um painel deslizante pelo botão do header. O `src/app/(protected)/layout.tsx` busca o administrador com `getCurrentUser`, repassando o cookie da sessão, e o entrega ao layout; sem usuário, a ficha do administrador não é exibida. O layout é dividido em partes para facilitar a manutenção.

| Arquivo                         | Responsabilidade                                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `index.tsx`                     | Organiza o menu lateral e o card do conteúdo.                                                                             |
| `protected-navigation.ts`       | Fonte única dos grupos do menu, dos rótulos da trilha de navegação e das regras de item ativo.                            |
| `protected-sidebar.tsx`         | Coluna fixa do menu em telas grandes.                                                                                     |
| `protected-mobile-nav.tsx`      | Botão e painel deslizante do menu em telas menores, que fecha ao trocar de rota.                                          |
| `protected-sidebar-content.tsx` | Conteúdo do menu, compartilhado pela coluna e pelo painel: logotipo, grupos de links e ficha do administrador.            |
| `nav-links.tsx`                 | Um grupo do menu, com rótulo, links e submenu.                                                                            |
| `nav-link.tsx`                  | Um link do menu, com variantes de nível (`root`, `parent` e `nested`) e de estado ativo.                                  |
| `protected-header.tsx`          | Header fixo do card, com o botão do menu em telas menores e a trilha de navegação.                                        |
| `protected-breadcrumb.tsx`      | Trilha de navegação da rota atual; em telas pequenas mostra só a página atual.                                            |
| `user-menu.tsx`                 | Ficha do administrador com avatar, nome e e-mail, que abre o menu da conta com o catálogo público e, quando houver, sair. |

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
