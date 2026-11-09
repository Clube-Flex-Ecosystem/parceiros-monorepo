---
version: "1.0"
name: "cms-parceiros-clube-flex-domain"
description: "Atores, entidades e regras centrais do CMS de parceiros Clube Flex."

actors:
  - id: ACT-01
    name: "Administrador"
    responsibility: "Manter os cadastros e controlar a publicação dos parceiros."
  - id: ACT-02
    name: "Visitante público"
    responsibility: "Consultar parceiros publicados e seus detalhes."

entities:
  - id: ENT-01
    name: "Parceiro"
    purpose: "Representa uma empresa ou estabelecimento participante do catálogo."
    attributes:
      - "nome, descrição, instruções gerais, site opcional e identificador público"
      - "estado: draft, published ou inactive"
      - "destaque e cupom geral opcional"
    relationships:
      - "Pertence a uma categoria e pode possuir contatos, unidades e benefícios por plano."
  - id: ENT-02
    name: "Categoria"
    purpose: "Organiza parceiros no catálogo público."
    attributes:
      - "nome"
    relationships:
      - "É mantida em tabela própria e pode estar associada a vários parceiros; cada parceiro pertence a uma única categoria."
  - id: ENT-03
    name: "Contato"
    purpose: "Representa um canal de contato do parceiro ou de uma unidade."
    attributes:
      - "tipo, número normalizado e identificação opcional"
    relationships:
      - "Pertence a um parceiro ou a uma unidade."
  - id: ENT-04
    name: "Unidade"
    purpose: "Representa um local físico de atendimento de um parceiro."
    attributes:
      - "identificação, endereço completo em texto, horário e instruções específicas"
    relationships:
      - "Pertence a um parceiro e pode possuir contatos próprios; parceiros de atendimento online podem não ter unidades."
  - id: ENT-05
    name: "Benefício"
    purpose: "Representa o desconto, condição ou cupom oferecido por um parceiro em um plano."
    attributes:
      - "plano, percentual de desconto, condição, cupom e instruções"
    relationships:
      - "É o registro de ligação entre parceiro e plano; há no máximo um benefício por combinação de parceiro e plano."
  - id: ENT-06
    name: "Plano"
    purpose: "Representa uma modalidade do Clube Flex usada para definir o desconto de cada parceiro."
    attributes:
      - "identificador e nome"
    relationships:
      - "É mantido em tabela própria e possui um benefício de cada parceiro publicado."

business-rules:
  - id: BR-01
    description: "Somente o administrador autenticado pode criar, editar ou alterar o estado de parceiros."
  - id: BR-02
    description: "Somente parceiros no estado published aparecem no catálogo e em páginas públicas de detalhes."
  - id: BR-03
    description: "Um parceiro pode ser salvo como draft sem aparecer publicamente."
  - id: BR-04
    description: "Um parceiro inactive deixa de ser público, mas permanece disponível para edição e republicação no CMS."
  - id: BR-05
    description: "A publicação exige nome, descrição, identificador público, categoria e um percentual de desconto para cada plano disponível; site, contatos, unidades, cupons e instruções adicionais são opcionais."
  - id: BR-06
    description: "O salvamento preserva os dados completos do parceiro, incluindo categoria, contatos, unidades, benefícios por plano e cupons."

use-cases:
  - id: UC-01
    actor: ACT-01
    goal: "Autenticar-se para acessar o CMS."
    preconditions: ["Possuir a única credencial administrativa válida."]
    main-flow: ["O administrador informa suas credenciais.", "O sistema valida a credencial e libera o painel."]
    outcome: "Administrador autenticado no CMS."
  - id: UC-02
    actor: ACT-01
    goal: "Cadastrar ou editar um parceiro."
    preconditions: ["Estar autenticado no CMS."]
    main-flow: ["O administrador preenche ou altera os dados.", "O sistema salva todos os dados informados."]
    outcome: "Parceiro criado ou atualizado, preservando seu estado."
  - id: UC-03
    actor: ACT-01
    goal: "Publicar, desativar ou republicar um parceiro."
    preconditions: ["Estar autenticado no CMS.", "O parceiro existir."]
    main-flow: ["O administrador escolhe a alteração de estado.", "O sistema valida e atualiza o estado."]
    outcome: "Visibilidade pública do parceiro atualizada conforme seu estado."
  - id: UC-04
    actor: ACT-02
    goal: "Consultar catálogo e detalhes públicos."
    preconditions: ["Nenhuma."]
    main-flow: ["O visitante acessa o catálogo ou uma URL de parceiro.", "O sistema mostra somente parceiros publicados."]
    outcome: "Visitante visualiza a listagem ou o detalhe de um parceiro disponível."
---

# Domínio — CMS de parceiros Clube Flex

## Atores

- **ACT-01 — Administrador:** única pessoa autorizada a manter cadastros e controlar a publicação.
- **ACT-02 — Visitante público:** consulta parceiros e detalhes publicados, sem autenticação.

## Entidades e relacionamentos

### ENT-01 — Parceiro

- **Representa:** uma empresa ou estabelecimento participante do catálogo.
- **Atributos essenciais:** nome, descrição, instruções gerais, site opcional, identificador público, destaque, cupom geral opcional e estado.
- **Relacionamentos:** pertence a uma categoria e pode possuir contatos, unidades e benefícios por plano.

### ENT-02 — Categoria

- **Representa:** uma classificação para organizar parceiros.
- **Relacionamentos:** pode estar associada a vários parceiros; cada parceiro pertence a uma única categoria.
- **Persistência:** possui tabela própria de categorias.

### ENT-03 — Contato

- **Representa:** telefone ou WhatsApp geral do parceiro ou específico de uma unidade.
- **Relacionamentos:** pertence a um parceiro ou unidade.

### ENT-04 — Unidade

- **Representa:** um local físico de atendimento.
- **Observação:** é opcional; parceiros de atendimento exclusivamente online não possuem unidade.
- **Relacionamentos:** pertence a um parceiro e pode ter contatos próprios.

### ENT-05 — Benefício

- **Representa:** desconto, condição ou cupom do parceiro para um plano.
- **Relacionamentos:** é o registro de ligação entre parceiro e plano; o percentual pode variar entre planos e só existe um benefício por combinação de parceiro e plano.

### ENT-06 — Plano

- **Representa:** uma modalidade do Clube Flex usada para diferenciar descontos.
- **Atributos essenciais:** identificador e nome.
- **Relacionamentos:** cada parceiro publicado possui um benefício associado a cada plano disponível.
- **Persistência:** possui tabela própria de planos.

## Regras de negócio

- **BR-01:** Apenas o administrador autenticado altera dados ou estados de parceiros.
- **BR-02:** Apenas parceiros `published` são públicos.
- **BR-03:** Parceiros `draft` podem ser editados e não são exibidos publicamente.
- **BR-04:** Parceiros `inactive` deixam de ser públicos, preservando seus dados para edição ou republicação.
- **BR-05:** A publicação exige nome, descrição, identificador público, categoria e um percentual de desconto para cada plano disponível. Site, contatos, unidades, cupons e instruções adicionais são opcionais.
- **BR-06:** O salvamento preserva o conjunto completo de dados associados ao parceiro, incluindo a categoria e benefícios por plano.
- **BR-07:** Categoria, planos e percentuais de desconto são informações públicas do parceiro publicado.
- **BR-08:** Categorias e planos são dados de referência persistidos em tabelas próprias. Cada benefício referencia exatamente um parceiro e um plano, sem duplicidade nessa combinação.

## Casos de uso

### UC-01 — Autenticar administrador

- **Ator:** ACT-01
- **Objetivo:** acessar o CMS.
- **Pré-condições:** possuir a credencial administrativa válida.
- **Resultado:** administrador autenticado no CMS.
- **Regras relacionadas:** BR-01

### UC-02 — Cadastrar ou editar parceiro

- **Ator:** ACT-01
- **Objetivo:** manter as informações completas de um parceiro.
- **Pré-condições:** estar autenticado no CMS.
- **Resultado:** parceiro criado ou atualizado, preservando o estado aplicável.
- **Regras relacionadas:** BR-01, BR-06

### UC-03 — Alterar estado de parceiro

- **Ator:** ACT-01
- **Objetivo:** publicar, desativar ou republicar um parceiro.
- **Pré-condições:** estar autenticado e o parceiro existir.
- **Resultado:** parceiro passa ao estado solicitado, quando permitido.
- **Regras relacionadas:** BR-01, BR-02, BR-03, BR-04, BR-05

### UC-04 — Consultar catálogo e detalhes públicos

- **Ator:** ACT-02
- **Objetivo:** encontrar e conhecer parceiros disponíveis.
- **Pré-condições:** nenhuma; o parceiro precisa estar publicado para o detalhe.
- **Resultado:** visitante visualiza a listagem ou o detalhe de um parceiro publicado.
- **Regras relacionadas:** BR-02

## Estados e transições

- `draft` → `published`, após validação dos campos obrigatórios.
- `published` → `inactive`, quando o administrador o desativa.
- `inactive` → `published`, após republicação e validação.
- Parceiros em qualquer estado permanecem editáveis pelo administrador.

