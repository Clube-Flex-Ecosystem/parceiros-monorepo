'use client';

import type { ComponentProps, ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../primitives/select';
import { FieldWrapper, type FieldBaseProps } from './field-wrapper';
import { useField } from './use-field';

type SelectOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

type SelectFieldProps = Omit<
  ComponentProps<typeof Select>,
  'name' | 'value' | 'defaultValue' | 'onValueChange' | 'children'
> &
  FieldBaseProps & {
    id?: string;
    options: SelectOption[];
    placeholder?: string;
    className?: string;
  };

const SelectField = ({
  name,
  label,
  helpText,
  id: idProp,
  options,
  placeholder,
  className,
  ...props
}: SelectFieldProps) => {
  const { control } = useFormContext();
  const { id, error, ariaProps } = useField(name, { id: idProp, hasHelpText: !!helpText });

  return (
    <FieldWrapper id={id} label={label} helpText={helpText} error={error} required={props.required}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...props}
            name={field.name}
            value={field.value ?? ''}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              id={id}
              ref={field.ref}
              onBlur={field.onBlur}
              className={className}
              {...ariaProps}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </FieldWrapper>
  );
};

export { SelectField };
export type { SelectFieldProps, SelectOption };
