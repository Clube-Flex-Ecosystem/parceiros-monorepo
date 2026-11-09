---
version: '1.0'
name: 'cms-parceiros-clube-flex-overview'
description: 'CMS para manter e publicar o catálogo de parceiros do Clube Flex.'

product:
  name: 'CMS de parceiros Clube Flex'
  audience:
    - 'Administrador do Clube Flex'
    - 'Visitante público'
  problem: 'As informações dos parceiros precisam ser atualizadas e publicadas sem alterações manuais no site.'
  value-proposition: 'Um painel centraliza os dados e os disponibiliza em um catálogo público confiável.'

delivery:
  objective: 'Disponibilizar a manutenção e publicação autônoma de um catálogo de parceiros.'
  primary-actor: 'ACT-01'
  main-flow:
    - 'O administrador cadastra ou edita um parceiro no painel.'
    - 'O administrador salva como rascunho ou publica um cadastro válido.'
    - 'Visitantes encontram parceiros publicados no catálogo e acessam seus detalhes.'
  capabilities:
    - id: RF-01
      description: 'Autenticar a única conta administrativa criada por seed, por sessão stateful e cookie HttpOnly.'
    - id: RF-02
      description: 'Cadastrar, listar e editar parceiros com seus dados completos.'
    - id: RF-03
      description: 'Salvar, publicar, desativar e republicar parceiros.'
    - id: RF-04
      description: 'Exibir um catálogo público apenas com parceiros publicados.'
    - id: RF-05
      description: 'Exibir uma página pública de detalhes para cada parceiro publicado.'
  success-criterion: 'O administrador publica e mantém um parceiro; visitantes consultam sua listagem e seus detalhes sem autenticação.'
---

# Overview — CMS de parceiros Clube Flex

## Visão geral

O CMS de parceiros Clube Flex permite que uma única pessoa administradora mantenha o catálogo de parceiros. O público consulta parceiros publicados em um catálogo responsivo e em páginas individuais de detalhes. O produto não abrange módulos comerciais e operacionais da plataforma completa.

## Problema e proposta de valor

- **Problema:** Informações de parceiros dependem de mudanças manuais no código para serem atualizadas e publicadas.
- **Solução:** Um painel administrativo centraliza o cadastro, a edição e o estado de publicação dos parceiros.
- **Resultado esperado:** O catálogo público permanece atualizado sem expor dados não publicados.

## Público e atores

- **ACT-01 — Administrador:** autentica-se, mantém os cadastros e controla a publicação dos parceiros.
- **ACT-02 — Visitante público:** consulta o catálogo e os detalhes de parceiros publicados sem autenticação.

## Fluxo principal

1. O administrador acessa o painel e cria ou edita um parceiro.
2. O sistema salva o cadastro como rascunho ou o publica quando estiver válido.
3. O visitante encontra o parceiro no catálogo público e acessa sua página de detalhes.

## Capacidades do produto

- **RF-01:** Autenticar a única conta administrativa criada por seed, por sessão stateful e cookie `HttpOnly`.
- **RF-02:** Cadastrar, listar e editar parceiros, com categoria obrigatória, contatos, unidades opcionais, benefícios e percentuais por plano.
- **RF-03:** Salvar como rascunho, publicar, desativar e republicar parceiros.
- **RF-04:** Exibir somente parceiros publicados em um catálogo público responsivo.
- **RF-05:** Exibir uma página de detalhes em URL própria para cada parceiro publicado.

## Critério de validação

O administrador publica e mantém um parceiro, e visitantes consultam sua listagem e seus detalhes sem autenticação.
