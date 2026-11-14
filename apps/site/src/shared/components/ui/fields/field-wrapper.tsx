import type { ReactNode } from 'react';

import { tv } from '@/shared/lib/tv';

import { Label } from '../primitives/label';
import { getFieldIds } from './use-field';

/* Propriedades comuns a todos os campos de formulário. */
type FieldBaseProps = {
  name: string;
  label?: ReactNode;
  helpText?: ReactNode;
};

/*
 * A ordem no DOM é sempre rótulo, controle e mensagem. Na orientação horizontal
 * (checkbox e switch), o controle ocupa a primeira coluna e o rótulo e a mensagem
 * ficam na segunda.
 */
const fieldWrapperVariants = tv({
  slots: {
    root: 'grid',
    label: '',
    control: '',
    message: 'text-sm',
    required: 'text-danger',
  },
  variants: {
    orientation: {
      vertical: {
        root: 'gap-1.5',
      },
      horizontal: {
        root: 'grid-cols-[auto_1fr] items-start gap-x-3 gap-y-1',
        label: 'col-start-2 row-start-1',
        control: 'col-start-1 row-span-2 row-start-1 pt-px',
        message: 'col-start-2 row-start-2',
      },
    },
    status: {
      default: {
        message: 'text-muted-foreground',
      },
      error: {
        message: 'text-danger',
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    status: 'default',
  },
});

type FieldWrapperProps = {
  id: string;
  label?: ReactNode;
  helpText?: ReactNode;
  error?: string;
  required?: boolean;
  /* `horizontal` coloca o controle ao lado do rótulo (checkbox e switch). */
  orientation?: 'vertical' | 'horizontal';
  /* Id do rótulo, para campos agrupados (radio group) que usam `aria-labelledby`. */
  labelId?: string;
  /* Desativa o `htmlFor` do rótulo quando o controle é um grupo. */
  isGroup?: boolean;
  className?: string;
  children: ReactNode;
};

const FieldWrapper = ({
  id,
  label,
  helpText,
  error,
  required,
  orientation,
  labelId,
  isGroup = false,
  className,
  children,
}: FieldWrapperProps) => {
  const ids = getFieldIds(id);
  const slots = fieldWrapperVariants({ orientation, status: error ? 'error' : 'default' });

  return (
    <div className={slots.root({ className })}>
      {label && (
        <Label id={labelId} htmlFor={isGroup ? undefined : id} className={slots.label()}>
          {label}
          {required && (
            <span aria-hidden className={slots.required()}>
              *
            </span>
          )}
        </Label>
      )}
      <div className={slots.control()}>{children}</div>
      {error ? (
        <p id={ids.error} role="alert" className={slots.message()}>
          {error}
        </p>
      ) : (
        helpText && (
          <p id={ids.help} className={slots.message()}>
            {helpText}
          </p>
        )
      )}
    </div>
  );
};

export { FieldWrapper, fieldWrapperVariants };
export type { FieldBaseProps };
