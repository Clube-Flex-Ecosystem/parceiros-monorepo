'use client';

import type { ComponentProps } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox } from '../primitives/checkbox';
import { FieldWrapper, type FieldBaseProps } from './field-wrapper';
import { useField } from './use-field';

type CheckboxFieldProps = Omit<
  ComponentProps<typeof Checkbox>,
  'name' | 'checked' | 'defaultChecked' | 'onCheckedChange'
> &
  FieldBaseProps;

const CheckboxField = ({ name, label, helpText, id: idProp, ...props }: CheckboxFieldProps) => {
  const { control } = useFormContext();
  const { id, error, ariaProps } = useField(name, { id: idProp, hasHelpText: !!helpText });

  return (
    <FieldWrapper
      id={id}
      label={label}
      helpText={helpText}
      error={error}
      required={props.required}
      orientation="horizontal"
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            id={id}
            {...ariaProps}
            {...props}
            ref={field.ref}
            name={field.name}
            checked={field.value ?? false}
            onCheckedChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
      />
    </FieldWrapper>
  );
};

export { CheckboxField };
export type { CheckboxFieldProps };
