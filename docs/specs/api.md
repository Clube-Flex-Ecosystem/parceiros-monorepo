---
version: '1.0'
name: 'cms-parceiros-clube-flex-api'
description: 'Contratos para sessão administrativa, gestão de parceiros, categorias e planos, e consulta pública.'

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
      body: ['{ data: User }; sessão autenticada.']
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
      body: ['{ data: User }.']
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
    use-case: UC-05
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
    use-case: UC-05
    method: 'POST'
    path: '/admin/categories'
    authorization: 'Administrador autenticado.'
    request:
      params: []
      query: []
      body: ['CategoryInput.']
    response:
      status: '201'
      body: ['{ data: Category }.']
    errors:
      [
        '401: não autenticado.',
        '409: já existe uma categoria com o mesmo nome.',
        '422: dados inválidos.',
      ]
  - id: API-12
    use-case: UC-05
    method: 'PATCH'
    path: '/admin/categories/{id}'
    authorization: 'Administrador autenticado.'
    request:
      params: ['id da categoria.']
      query: []
      body: ['CategoryInput.']
    response:
      status: '200'
      body: ['{ data: Category }.']
    errors: ['401: não autenticado.', '404: categoria não encontrada.', '422: dados inválidos.']
  - id: API-13
    use-case: UC-05
    method: 'DELETE'
    path: '/admin/categories/{id}'
    authorization: 'Administrador autenticado.'
    request:
      params: ['id da categoria.']
      query: []
      body: []
    response:
      status: '204'
      body: []
    errors:
      [
        '401: não autenticado.',
        '404: categoria não encontrada.',
        '409: categoria associada a parceiros.',
      ]
  - id: API-14
    use-case: UC-06
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
  - id: API-15
    use-case: UC-06
    method: 'POST'
    path: '/admin/plans'
    authorization: 'Administrador autenticado.'
    request:
      params: []
      query: []
      body: ['PlanInput.']
    response:
      status: '201'
      body: ['{ data: Plan }.']
    errors:
      [
        '401: não autenticado.',
        '409: já existe um plano com o mesmo nome.',
        '422: dados inválidos.',
      ]
  - id: API-16
    use-case: UC-06
    method: 'PATCH'
    path: '/admin/plans/{id}'
    authorization: 'Administrador autenticado.'
    request:
      params: ['id do plano.']
      query: []
      body: ['PlanInput.']
    response:
      status: '200'
      body: ['{ data: Plan }.']
    errors: ['401: não autenticado.', '404: plano não encontrado.', '422: dados inválidos.']
  - id: API-17
    use-case: UC-06
    method: 'DELETE'
    path: '/admin/plans/{id}'
    authorization: 'Administrador autenticado.'
    request:
      params: ['id do plano.']
      query: []
      body: []
    response:
      status: '204'
      body: []
    errors:
      [
        '401: não autenticado.',
        '404: plano não encontrado.',
        '409: plano associado a descontos de parceiros.',
      ]
---

# API — CMS de parceiros Clube Flex

## Convenções

- **Prefixo:** não há prefixo global de API.
- **Autenticação:** as rotas em `/admin` exigem uma sessão administrativa válida.
- **Sucesso com item:** `{ "data": { ... } }`.
- **Sucesso com lista:** `{ "data": [ ... ], "meta": { "total": 0 } }`.
- **Formato de erros:** `{ "code": "CODIGO_DO_ERRO", "message": "Descrição legível do erro" }`.

## Endpoints

| ID     | Método   | Rota                          | Finalidade                                      |
| ------ | -------- | ----------------------------- | ----------------------------------------------- |
| API-01 | `POST`   | `/auth/login`                 | Inicia a sessão administrativa.                 |
| API-02 | `GET`    | `/auth/me`                    | Retorna o administrador autenticado.            |
| API-03 | `GET`    | `/admin/partners`             | Lista parceiros para o CMS.                     |
| API-04 | `POST`   | `/admin/partners`             | Cria um parceiro.                               |
| API-05 | `GET`    | `/admin/partners/{id}`        | Retorna um parceiro para edição.                |
| API-06 | `PATCH`  | `/admin/partners/{id}`        | Atualiza os dados de um parceiro.               |
| API-07 | `PATCH`  | `/admin/partners/{id}/status` | Altera o estado do parceiro.                    |
| API-08 | `GET`    | `/partners`                   | Lista parceiros publicados.                     |
| API-09 | `GET`    | `/partners/{slug}`            | Retorna o detalhe público de um parceiro.       |
| API-10 | `GET`    | `/admin/categories`           | Lista categorias disponíveis para o formulário. |
| API-11 | `POST`   | `/admin/categories`           | Cria uma categoria.                             |
| API-12 | `PATCH`  | `/admin/categories/{id}`      | Atualiza uma categoria.                         |
| API-13 | `DELETE` | `/admin/categories/{id}`      | Remove uma categoria sem parceiros associados.  |
| API-14 | `GET`    | `/admin/plans`                | Lista planos disponíveis para o formulário.     |
| API-15 | `POST`   | `/admin/plans`                | Cria um plano.                                  |
| API-16 | `PATCH`  | `/admin/plans/{id}`           | Atualiza um plano.                              |
| API-17 | `DELETE` | `/admin/plans/{id}`           | Remove um plano sem descontos associados.       |

### Sessão administrativa

`POST /auth/login` recebe a credencial administrativa. Em caso de sucesso, retorna `User` e inicia uma sessão administrativa.

`GET /auth/me` retorna `User` da sessão atual. Nunca expõe dados de credencial. Sem sessão válida, retorna `401`.

### ConfiguraÃ§Ã£o da sessÃ£o

A sessÃ£o administrativa Ã© mantida por cookie HTTP. O cookie Ã© `HttpOnly`, usa polÃ­tica `SameSite=Lax`, aceita domÃ­nio configurÃ¡vel e expira apÃ³s o perÃ­odo definido para a aplicaÃ§Ã£o, com sete dias como padrÃ£o.

### Parceiros administrativos

Todas as rotas em `/admin/partners` exigem sessão autenticada. As respostas usam `AdminPartner`, que inclui o identificador interno e o estado atual.

`PATCH /admin/partners/{id}/status` recebe exclusivamente:

```json
{ "status": "published" }
```

Os valores permitidos são `draft`, `published` e `inactive`. A alteração para `published` valida os dados obrigatórios; uma falha retorna `422`.

### Parceiros públicos

As rotas em `/partners` não exigem sessão e só retornam parceiros `published`. O detalhe usa o `slug` público, nunca o identificador interno.

### Categorias do CMS

`GET /admin/categories` lista as categorias disponíveis para o formulário administrativo. `POST /admin/categories` cria uma categoria quando não existe outra com o mesmo nome e retorna `409` em caso de duplicidade. `PATCH /admin/categories/{id}` atualiza seu nome. `DELETE /admin/categories/{id}` só remove categorias sem parceiros associados e retorna `409` caso contrário.

`GET /admin/plans` lista os planos persistidos que o formulário administrativo usa para preencher os descontos percentuais. `POST /admin/plans` cria um plano quando não existe outro com o mesmo nome e retorna `409` em caso de duplicidade. `PATCH /admin/plans/{id}` atualiza seu nome. `DELETE /admin/plans/{id}` só remove planos sem descontos de parceiros associados e retorna `409` caso contrário.

## Estruturas compartilhadas

### `User`

```json
{
  "id": "admin-1",
  "name": "Administrador",
  "email": "admin@clubeflex.com.br"
}
```

### `Category`, `CategoryInput` e `Plan`

```json
{ "id": "academias", "name": "Academias" }
```

```json
{ "name": "Academias" }
```

```json
{ "id": "plano-premium", "name": "Plano Premium" }
```

```json
{ "name": "Plano Premium" }
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
  "categoryId": "academias",
  "address": "Praça da Sé, 100 — Sé, São Paulo/SP, 01001-000",
  "contacts": [{ "type": "whatsapp", "label": "Atendimento", "value": "5511999999" }],
  "discounts": [
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

- `name`, `slug`, `description`, `categoryId` e `discounts` são exigidos para publicação.
- `slug` é único e compõe a URL pública do parceiro.
- `address` é opcional e armazena o endereço completo do parceiro. Parceiros exclusivamente online podem deixá-lo vazio.
- `discounts` possui exatamente um item para cada plano disponível.
- `discountPercent` é um número de 0 a 100, com casas decimais permitidas.
- O estado não faz parte de `PartnerInput`.

### `PublicPartner`

```json
{
  "slug": "academia-exemplo",
  "name": "Academia Exemplo",
  "description": "Academia com musculação e aulas coletivas.",
  "category": { "id": "academias", "name": "Academias" },
  "discounts": [
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

`PublicPartner` também inclui, quando cadastrados, endereço, site, contatos, instruções gerais e destaque. O estado administrativo e identificadores internos não são expostos publicamente.
