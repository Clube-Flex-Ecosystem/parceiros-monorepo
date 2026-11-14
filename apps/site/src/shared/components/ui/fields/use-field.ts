'use client';

import { useId } from 'react';
import { useFormContext } from 'react-hook-form';

type UseFieldOptions = {
  id?: string;
  hasHelpText?: boolean;
};

const getFieldIds = (id: string) => ({
  help: `${id}-help`,
  error: `${id}-error`,
});

/*
 * Lê o erro do campo no formulário do contexto (useFormContext) e devolve o id e
 * os atributos de acessibilidade ligando o campo ao texto de ajuda ou de erro.
 * Funciona com nomes aninhados, como `discounts.0.discountPercent`.
 */
const useField = (name: string, { id, hasHelpText = false }: UseFieldOptions = {}) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const { getFieldState, formState } = useFormContext();

  const error = getFieldState(name, formState).error?.message;
  const ids = getFieldIds(fieldId);

  return {
    id: fieldId,
    error,
    ariaProps: {
      'aria-invalid': error ? true : undefined,
      'aria-describedby': error ? ids.error : hasHelpText ? ids.help : undefined,
    },
  };
};

export { getFieldIds, useField };
