'use client';

import type { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';

import { Textarea } from '../primitives/textarea';
import { FieldWrapper, type FieldBaseProps } from './field-wrapper';
import { useField } from './use-field';

type TextareaFieldProps = Omit<ComponentProps<typeof Textarea>, 'name'> & FieldBaseProps;

const TextareaField = ({ name, label, helpText, id: idProp, ...props }: TextareaFieldProps) => {
  const { register } = useFormContext();
  const { id, error, ariaProps } = useField(name, { id: idProp, hasHelpText: !!helpText });

  return (
    <FieldWrapper id={id} label={label} helpText={helpText} error={error} required={props.required}>
      <Textarea id={id} {...ariaProps} {...props} {...register(name)} />
    </FieldWrapper>
  );
};

export { TextareaField };
export type { TextareaFieldProps };
