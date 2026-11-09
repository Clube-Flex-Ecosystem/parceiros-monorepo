---
version: '1.0'
name: 'cms-parceiros-clube-flex-domain'
description: 'Atores, entidades e regras centrais do CMS de parceiros Clube Flex.'

actors:
  - id: ACT-01
    name: 'Administrador'
    responsibility: 'Manter os cadastros e controlar a publicação dos parceiros.'
  - id: ACT-02
    name: 'Visitante público'
    responsibility: 'Consultar parceiros publicados e seus detalhes.'

entities:
  - id: ENT-01
    name: 'Parceiro'
    purpose: 'Representa uma empresa ou estabelecimento participante do catálogo.'
    attributes:
      - 'nome, descrição, endereço opcional, instruções gerais, site opcional e identificador público'
      - 'estado: draft, published ou inactive'
      - 'destaque opcional'
    relationships:
      - 'Pertence a uma categoria e pode possuir contatos e descontos por plano.'
  - id: ENT-02
    name: 'Categoria'
    purpose: 'Organiza parceiros no catálogo público.'
    attributes:
      - 'nome'
    relationships:
      - 'É mantida em tabela própria e pode estar associada a vários parceiros; cada parceiro pertence a uma única categoria.'
  - id: ENT-03
    name: 'Contato'
    purpose: 'Representa um canal de contato do parceiro.'
    attributes:
      - 'tipo, número normalizado e identificação opcional'
    relationships:
      - 'Pertence a um parceiro.'
  - id: ENT-04
    name: 'Desconto por plano'
    purpose: 'Representa o desconto percentual, a condição, o cupom e as instruções oferecidos por um parceiro em um plano.'
    attributes:
      - 'plano, percentual de desconto, condição, cupom e instruções'
    relationships:
      - 'É o registro de ligação entre parceiro e plano; há no máximo um desconto por combinação de parceiro e plano.'
  - id: ENT-05
    name: 'Plano'
    purpose: 'Representa uma modalidade do Clube Flex usada para definir o desconto de cada parceiro.'
    attributes:
      - 'identificador e nome'
    relationships:
      - 'É mantido em tabela própria e possui um desconto de cada parceiro publicado.'

business-rules:
  - id: BR-01
    description: 'Somente o administrador autenticado pode criar, editar ou alterar o estado de parceiros.'
  - id: BR-02
    description: 'Somente parceiros no estado published aparecem no catálogo e em páginas públicas de detalhes.'
  - id: BR-03
    description: 'Um parceiro pode ser salvo como draft sem aparecer publicamente.'
  - id: BR-04
    description: 'Um parceiro inactive deixa de ser público, mas permanece disponível para edição e republicação no CMS.'
  - id: BR-05
    description: 'A publicação exige nome, descrição, identificador público, categoria e um percentual de desconto para cada plano disponível; endereço, site, contatos, cupons e instruções adicionais são opcionais.'
  - id: BR-06
    description: 'O salvamento preserva os dados completos do parceiro, incluindo categoria, endereço, contatos, descontos por plano e cupons.'
  - id: BR-07
    description: 'Categoria, planos e percentuais de desconto são informações públicas do parceiro publicado.'
  - id: BR-08
    description: 'Categorias e planos são dados de referência persistidos em tabelas próprias. Cada desconto por plano referencia exatamente um parceiro e um plano, sem duplicidade nessa combinação.'
  - id: BR-09
    description: 'O administrador pode cadastrar, editar e remover categorias que não estejam associadas a parceiros.'
  - id: BR-10
    description: 'O administrador pode cadastrar, editar e remover planos que não estejam associados a descontos de parceiros.'

use-cases:
  - id: UC-01
    actor: ACT-01
    goal: 'Autenticar-se para acessar o CMS.'
    preconditions: ['Possuir a única credencial administrativa válida.']
    main-flow:
      [
        'O administrador informa suas credenciais.',
        'O sistema valida a credencial e libera o painel.',
      ]
    outcome: 'Administrador autenticado no CMS.'
  - id: UC-02
    actor: ACT-01
    goal: 'Cadastrar ou editar um parceiro.'
    preconditions: ['Estar autenticado no CMS.']
    main-flow:
      ['O administrador preenche ou altera os dados.', 'O sistema salva todos os dados informados.']
    outcome: 'Parceiro criado ou atualizado, preservando seu estado.'
  - id: UC-03
    actor: ACT-01
    goal: 'Publicar, desativar ou republicar um parceiro.'
    preconditions: ['Estar autenticado no CMS.', 'O parceiro existir.']
    main-flow:
      ['O administrador escolhe a alteração de estado.', 'O sistema valida e atualiza o estado.']
    outcome: 'Visibilidade pública do parceiro atualizada conforme seu estado.'
  - id: UC-04
    actor: ACT-02
    goal: 'Consultar catálogo e detalhes públicos.'
    preconditions: ['Nenhuma.']
    main-flow:
      [
        'O visitante acessa o catálogo ou uma URL de parceiro.',
        'O sistema mostra somente parceiros publicados.',
      ]
    outcome: 'Visitante visualiza a listagem ou o detalhe de um parceiro disponível.'
  - id: UC-05
    actor: ACT-01
    goal: 'Gerenciar categorias do catálogo.'
    preconditions: ['Estar autenticado no CMS.']
    main-flow:
      [
        'O administrador cadastra, edita ou remove uma categoria.',
        'O sistema preserva categorias associadas a parceiros.',
      ]
    outcome: 'Categorias disponíveis para classificação de parceiros são mantidas.'
  - id: UC-06
    actor: ACT-01
    goal: 'Gerenciar planos do Clube Flex.'
    preconditions: ['Estar autenticado no CMS.']
    main-flow:
      [
        'O administrador cadastra, edita ou remove um plano.',
        'O sistema preserva planos associados a descontos de parceiros.',
      ]
    outcome: 'Planos disponíveis para definir descontos de parceiros são mantidos.'
---

# Domínio — CMS de parceiros Clube Flex

## Atores

- **ACT-01 — Administrador:** única pessoa autorizada a manter cadastros e controlar a publicação.
- **ACT-02 — Visitante público:** consulta parceiros e detalhes publicados, sem autenticação.

## Entidades e relacionamentos

### ENT-01 — Parceiro

- **Representa:** uma empresa ou estabelecimento participante do catálogo.
- **Atributos essenciais:** nome, descrição, endereço opcional, instruções gerais, site opcional, identificador público, destaque e estado.
- **Relacionamentos:** pertence a uma categoria e pode possuir contatos e descontos por plano.

### ENT-02 — Categoria

- **Representa:** uma classificação para organizar parceiros.
- **Relacionamentos:** pode estar associada a vários parceiros; cada parceiro pertence a uma única categoria.
- **Persistência:** possui tabela própria de categorias.

### ENT-03 — Contato

- **Representa:** telefone ou WhatsApp do parceiro.
- **Relacionamentos:** pertence a um parceiro.

### ENT-04 — Desconto por plano

- **Representa:** o desconto percentual, a condição, o cupom e as instruções aplicáveis a um plano.
- **Relacionamentos:** pertence a um parceiro e a um plano; o percentual pode variar entre planos e só existe um desconto por combinação de parceiro e plano.

### ENT-05 — Plano

- **Representa:** uma modalidade do Clube Flex usada para diferenciar descontos.
- **Atributos essenciais:** identificador e nome.
- **Relacionamentos:** cada parceiro publicado possui um desconto associado a cada plano disponível.
- **Persistência:** possui tabela própria de planos.

## Regras de negócio

- **BR-01:** Apenas o administrador autenticado altera dados ou estados de parceiros.
- **BR-02:** Apenas parceiros `published` são públicos.
- **BR-03:** Parceiros `draft` podem ser editados e não são exibidos publicamente.
- **BR-04:** Parceiros `inactive` deixam de ser públicos, preservando seus dados para edição ou republicação.
- **BR-05:** A publicação exige nome, descrição, identificador público, categoria e um percentual de desconto para cada plano disponível. Endereço, site, contatos, cupons e instruções adicionais são opcionais.
- **BR-06:** O salvamento preserva o conjunto completo de dados associados ao parceiro, incluindo categoria, endereço, contatos e descontos por plano.
- **BR-07:** Categoria, planos e percentuais de desconto são informações públicas do parceiro publicado.
- **BR-08:** Categorias e planos são dados de referência persistidos em tabelas próprias. Cada desconto por plano referencia exatamente um parceiro e um plano, sem duplicidade nessa combinação.
- **BR-09:** O administrador pode cadastrar, editar e remover categorias que não estejam associadas a parceiros.
- **BR-10:** O administrador pode cadastrar, editar e remover planos que não estejam associados a descontos de parceiros.

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

### UC-05 — Gerenciar categorias

- **Ator:** ACT-01
- **Objetivo:** manter as categorias disponíveis para classificar parceiros.
- **Pré-condições:** estar autenticado no CMS.
- **Resultado:** categorias são criadas, editadas ou removidas quando não estão associadas a parceiros.
- **Regras relacionadas:** BR-01, BR-09

### UC-06 — Gerenciar planos

- **Ator:** ACT-01
- **Objetivo:** manter os planos usados para definir descontos de parceiros.
- **Pré-condições:** estar autenticado no CMS.
- **Resultado:** planos são criados, editados ou removidos quando não estão associados a descontos de parceiros.
- **Regras relacionadas:** BR-01, BR-10

## Estados e transições

- `draft` → `published`, após validação dos campos obrigatórios.
- `published` → `inactive`, quando o administrador o desativa.
- `inactive` → `published`, após republicação e validação.
- Parceiros em qualquer estado permanecem editáveis pelo administrador.
