---
version: '1.0'
name: 'cms-parceiros-clube-flex-api'
description: 'Contratos para sessão administrativa, gestão de parceiros e consulta pública.'

api:
  base-path: '/'
  authentication: 'Sessão da única conta administrativa.'
  error-format: '{ code: string, message: string }'

endpoints:
  - id: API-01
    use-case: UC-01
    method: 'POST'
    path: '/auth/login'
    authorization: 'Público; valida a credencial administrativa.'
    request:
      params: []
      query: []
      body: ['Credencial administrativa.']
    response:
      status: '200'
      body: ['{ data: AdminUser }; sessão autenticada.']
    errors: ['401: credencial inválida.']
  - id: API-02
    use-case: UC-01
    method: 'GET'
    path: '/auth/me'
    authorization: 'Administrador autenticado por sessão.'
    request:
      params: []
      query: []
      body: []
    response:
      status: '200'
      body: ['{ data: AdminUser }.']
    errors: ['401: sessão ausente ou inválida.']
  - id: API-03
    use-case: UC-02
    method: 'GET'
    path: '/admin/partners'
    authorization: 'Administrador autenticado.'
    request:
      params: []
      query: []
      body: []
    response:
      status: '200'
      body: ['{ data: AdminPartner[], meta: { total } }.']
    errors: ['401: não autenticado.']
  - id: API-04
    use-case: UC-02
    method: 'POST'
    path: '/admin/partners'
    authorization: 'Administrador autenticado.'
    request:
      params: []
      query: []
      body: ['PartnerInput.']
    response:
      status: '201'
      body: ['{ data: AdminPartner }.']
    errors: ['401: não autenticado.', '422: dados inválidos.']
  - id: API-05
    use-case: UC-02
    method: 'GET'
    path: '/admin/partners/{id}'
    authorization: 'Administrador autenticado.'
    request:
      params: ['id do parceiro.']
      query: []
      body: []
    response:
      status: '200'
      body: ['{ data: AdminPartner }.']
    errors: ['401: não autenticado.', '404: parceiro não encontrado.']
  - id: API-06
    use-case: UC-02
    method: 'PATCH'
    path: '/admin/partners/{id}'
    authorization: 'Administrador autenticado.'
    request:
      params: ['id do parceiro.']
      query: []
      body: ['PartnerInput.']
    response:
      status: '200'
      body: ['{ data: AdminPartner }.']
    errors: ['401: não autenticado.', '404: parceiro não encontrado.', '422: dados inválidos.']
  - id: API-07
    use-case: UC-03
    method: 'PATCH'
    path: '/admin/partners/{id}/status'
    authorization: 'Administrador autenticado.'
    request:
      params: ['id do parceiro.']
      query: []
      body: ['{ status: draft | published | inactive }.']
    response:
      status: '200'
      body: ['{ data: AdminPartner }.']
    errors:
      [
        '401: não autenticado.',
        '404: parceiro não encontrado.',
        '422: transição de estado ou publicação inválida.',
      ]
  - id: API-08
    use-case: UC-04
    method: 'GET'
    path: '/partners'
    authorization: 'Público.'
    request:
      params: []
      query: []
      body: []
    response:
      status: '200'
      body: ['{ data: PublicPartner[], meta: { total } }.']
    errors: []
  - id: API-09
    use-case: UC-04
    method: 'GET'
    path: '/partners/{slug}'
    authorization: 'Público.'
    request:
      params: ['slug público do parceiro.']
      query: []
      body: []
    response:
      status: '200'
      body: ['{ data: PublicPartner }.']
    errors: ['404: parceiro não encontrado ou indisponível.']
  - id: API-10
    use-case: UC-02
    method: 'GET'
    path: '/admin/categories'
    authorization: 'Administrador autenticado.'
    request:
      params: []
      query: []
      body: []
    response:
      status: '200'
      body: ['{ data: Category[] }.']
    errors: ['401: não autenticado.']
  - id: API-11
    use-case: UC-02
    method: 'GET'
    path: '/admin/plans'
    authorization: 'Administrador autenticado.'
    request:
      params: []
      query: []
      body: []
    response:
      status: '200'
      body: ['{ data: Plan[] }.']
    errors: ['401: não autenticado.']
---

# API — CMS de parceiros Clube Flex

## Convenções

- **Prefixo:** não há prefixo global de API.
- **Autenticação:** as rotas em `/admin` exigem uma sessão administrativa válida.
- **Sucesso com item:** `{ "data": { ... } }`.
- **Sucesso com lista:** `{ "data": [ ... ], "meta": { "total": 0 } }`.
- **Formato de erros:** `{ "code": "CODIGO_DO_ERRO", "message": "Descrição legível do erro" }`.

## Endpoints

| ID     | Método  | Rota                          | Finalidade                                      |
| ------ | ------- | ----------------------------- | ----------------------------------------------- |
| API-01 | `POST`  | `/auth/login`                 | Inicia a sessão administrativa.                 |
| API-02 | `GET`   | `/auth/me`                    | Retorna o administrador autenticado.            |
| API-03 | `GET`   | `/admin/partners`             | Lista parceiros para o CMS.                     |
| API-04 | `POST`  | `/admin/partners`             | Cria um parceiro.                               |
| API-05 | `GET`   | `/admin/partners/{id}`        | Retorna um parceiro para edição.                |
| API-06 | `PATCH` | `/admin/partners/{id}`        | Atualiza os dados de um parceiro.               |
| API-07 | `PATCH` | `/admin/partners/{id}/status` | Altera o estado do parceiro.                    |
| API-08 | `GET`   | `/partners`                   | Lista parceiros publicados.                     |
| API-09 | `GET`   | `/partners/{slug}`            | Retorna o detalhe público de um parceiro.       |
| API-10 | `GET`   | `/admin/categories`           | Lista categorias disponíveis para o formulário. |
| API-11 | `GET`   | `/admin/plans`                | Lista planos disponíveis para o formulário.     |

### Sessão administrativa

`POST /auth/login` recebe a credencial administrativa. Em caso de sucesso, retorna `AdminUser` e inicia uma sessão administrativa.

`GET /auth/me` retorna `AdminUser` da sessão atual. Nunca expõe dados de credencial. Sem sessão válida, retorna `401`.

### Parceiros administrativos

Todas as rotas em `/admin/partners` exigem sessão autenticada. As respostas usam `AdminPartner`, que inclui o identificador interno e o estado atual.

`PATCH /admin/partners/{id}/status` recebe exclusivamente:

```json
{ "status": "published" }
```

Os valores permitidos são `draft`, `published` e `inactive`. A alteração para `published` valida os dados obrigatórios; uma falha retorna `422`.

### Parceiros públicos

As rotas em `/partners` não exigem sessão e só retornam parceiros `published`. O detalhe usa o `slug` público, nunca o identificador interno.

### Dados de referência do CMS

`GET /admin/categories` e `GET /admin/plans` fornecem os valores persistidos que o formulário administrativo usa para selecionar a categoria e preencher os benefícios por plano. Estas rotas são somente de leitura; a gestão de categorias e planos não integra o fluxo do CMS nesta versão.

## Estruturas compartilhadas

### `AdminUser`

```json
{
  "id": "admin-1",
  "name": "Administrador",
  "email": "admin@clubeflex.com.br"
}
```

### `Category` e `Plan`

```json
{ "id": "academias", "name": "Academias" }
```

```json
{ "id": "plano-premium", "name": "Plano Premium" }
```

Categorias e planos são dados de referência persistidos em tabelas próprias. Seus IDs são usados em `categoryId` e `planId`.

### `PartnerInput`

```json
{
  "name": "Academia Exemplo",
  "slug": "academia-exemplo",
  "description": "Academia com musculação e aulas coletivas.",
  "generalInstructions": "Apresente sua identificação do Clube Flex.",
  "website": "https://exemplo.com.br",
  "isFeatured": false,
  "generalCoupon": null,
  "categoryId": "academias",
  "contacts": [{ "type": "whatsapp", "label": "Atendimento", "value": "5511999999" }],
  "units": [
    {
      "name": "Unidade Centro",
      "address": "Praça da Sé, 100 — Sé, São Paulo",
      "openingHours": "Segunda a sexta, das 6h às 22h",
      "instructions": null,
      "contacts": []
    }
  ],
  "benefits": [
    {
      "planId": "plano-basico",
      "discountPercent": 10,
      "condition": "Válido para novas matrículas.",
      "coupon": null,
      "instructions": null
    }
  ]
}
```

- `name`, `slug`, `description`, `categoryId` e `benefits` são exigidos para publicação.
- `slug` é único e compõe a URL pública do parceiro.
- `units` pode ser uma lista vazia para parceiros exclusivamente online. Cada unidade possui um único campo `address` com o endereço completo em texto.
- `benefits` possui exatamente um item para cada plano disponível.
- `discountPercent` é um número de 0 a 100, com casas decimais permitidas.
- O estado não faz parte de `PartnerInput`.

### `PublicPartner`

```json
{
  "slug": "academia-exemplo",
  "name": "Academia Exemplo",
  "description": "Academia com musculação e aulas coletivas.",
  "category": { "id": "academias", "name": "Academias" },
  "benefits": [
    {
      "plan": { "id": "plano-premium", "name": "Plano Premium" },
      "discountPercent": 20,
      "condition": "Válido para novas matrículas.",
      "coupon": null,
      "instructions": null
    }
  ]
}
```

`PublicPartner` também inclui, quando cadastrados, site, contatos, unidades, instruções gerais, cupom geral e destaque. O estado administrativo e identificadores internos não são expostos publicamente.
