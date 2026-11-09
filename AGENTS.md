# Instruções para agentes

## Sincronização integral do monorepo

- Antes de tomar qualquer decisão de produto, domínio, API, dados, arquitetura ou comportamento, leia todos os documentos relevantes do repositório: `docs/`, todo `README.md` aplicável e todo `AGENTS.md` aplicável ao caminho da alteração.
- Trate `docs/` como a versão final e canônica da documentação de produto. Trate READMEs e `AGENTS.md` como documentação canônica de estrutura, uso, desenvolvimento e instruções do monorepo.
- Toda mudança deve manter o projeto inteiro sincronizado. Antes de concluir, revise e atualize todos os documentos impactados, incluindo arquivos em `docs/`, READMEs, `AGENTS.md`, mapas de estrutura, instruções de execução, scripts e exemplos.
- A criação, remoção, renomeação ou movimentação de qualquer pasta, aplicação, pacote, arquivo de configuração, script, rota, entidade ou contrato exige a atualização imediata de toda documentação e instrução afetada.
- Não conclua uma tarefa enquanto existir divergência entre a implementação, a estrutura de diretórios, os scripts, os READMEs, `AGENTS.md` e a documentação em `docs/`.
- Preserve o padrão e a estrutura existentes nos documentos. Não crie seções, não renomeie convenções e não mude o estilo de descrição sem necessidade explícita. Faça apenas adições, edições ou exclusões que sigam o padrão de cada documento.
- Antes de concluir uma tarefa que afete comportamento, confirme que os documentos relevantes em `docs/specs/` continuam coerentes entre si e com todo o restante do monorepo.

## Qualidade após cada feature

- Ao concluir cada feature ou alteração funcional, execute as verificações disponíveis antes de entregar o trabalho:
  1. formatação com Prettier;
  2. lint;
  3. checagem de tipos;
  4. testes;
  5. build.
- Use os scripts declarados no `package.json`. Quando um script não existir, execute a verificação equivalente disponível ou informe claramente que ela ainda não está configurada.
- Não declare uma validação como aprovada se ela não foi executada ou se apresentou falha.
- Corrija falhas de formatação, lint, tipos ou testes causadas pela própria alteração antes de concluir a tarefa.

## Padrões de arquivos e código

- Respeite `.editorconfig` em todos os arquivos criados ou editados.
- Mantenha o repositório formatado com Prettier. Execute a verificação de formatação após mudanças e aplique a formatação quando necessário.
- Preserve finais de linha LF, conforme `.gitattributes` e `.editorconfig`.
- Mantenha as configurações globais de ESLint e Prettier na raiz do monorepo; não crie configurações conflitantes nas aplicações sem necessidade explícita.
- Não adicione dependências, scripts, rotas, campos, entidades ou comportamentos que não estejam documentados ou aprovados.

## Dados e segurança

- Quando uma alteração modificar dados persistidos, mantenha modelo, migrações, seeds, validações e documentação sincronizados.
- Nunca exponha credenciais, hashes, cookies de sessão ou segredos em respostas de API, logs, documentação pública ou código do cliente.
- Preserve a autenticação stateful por cookie `HttpOnly` especificada na documentação.

## Estrutura do monorepo

- Use pnpm para instalar dependências e executar scripts do monorepo. Não gere ou mantenha lockfiles do npm.
- Use `apps/api` para a aplicação de API e `apps/web` para a aplicação web.
- Não recrie a pasta `packages/` sem uma decisão explícita de arquitetura documentada.
