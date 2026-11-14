'use client';

import { useFormContext } from 'react-hook-form';

import { Input, type InputProps } from '../primitives/input';
import { FieldWrapper, type FieldBaseProps } from './field-wrapper';
import { useField } from './use-field';

type InputFieldProps = Omit<InputProps, 'name'> & FieldBaseProps;

const InputField = ({ name, label, helpText, id: idProp, ...props }: InputFieldProps) => {
  const { register } = useFormContext();
  const { id, error, ariaProps } = useField(name, { id: idProp, hasHelpText: !!helpText });

  return (
    <FieldWrapper id={id} label={label} helpText={helpText} error={error} required={props.required}>
      <Input id={id} {...ariaProps} {...props} {...register(name)} />
    </FieldWrapper>
  );
};

export { InputField };
export type { InputFieldProps };
