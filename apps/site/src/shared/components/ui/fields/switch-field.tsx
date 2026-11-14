'use client';

import type { ComponentProps } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Switch } from '../primitives/switch';
import { FieldWrapper, type FieldBaseProps } from './field-wrapper';
import { useField } from './use-field';

type SwitchFieldProps = Omit<
  ComponentProps<typeof Switch>,
  'name' | 'checked' | 'defaultChecked' | 'onCheckedChange'
> &
  FieldBaseProps;

const SwitchField = ({ name, label, helpText, id: idProp, ...props }: SwitchFieldProps) => {
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
          <Switch
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

export { SwitchField };
export type { SwitchFieldProps };
