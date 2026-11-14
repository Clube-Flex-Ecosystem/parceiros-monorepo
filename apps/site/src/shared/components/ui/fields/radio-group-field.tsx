'use client';

import { useId, type ComponentProps, type ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { tv } from '@/shared/lib/tv';

import { Label } from '../primitives/label';
import { RadioGroup, RadioGroupItem } from '../primitives/radio-group';
import { FieldWrapper, type FieldBaseProps } from './field-wrapper';
import { useField } from './use-field';

const radioGroupFieldVariants = tv({
  slots: {
    option: 'flex items-center gap-2',
    optionLabel: 'font-normal',
  },
});

type RadioGroupOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

type RadioGroupFieldProps = Omit<
  ComponentProps<typeof RadioGroup>,
  'name' | 'value' | 'defaultValue' | 'onValueChange' | 'children'
> &
  FieldBaseProps & {
    options: RadioGroupOption[];
  };

const RadioGroupField = ({
  name,
  label,
  helpText,
  id: idProp,
  options,
  ...props
}: RadioGroupFieldProps) => {
  const { control } = useFormContext();
  const labelId = useId();
  const { id, error, ariaProps } = useField(name, { id: idProp, hasHelpText: !!helpText });
  const { option: optionClassName, optionLabel } = radioGroupFieldVariants();

  return (
    <FieldWrapper
      id={id}
      label={label}
      helpText={helpText}
      error={error}
      required={props.required}
      labelId={labelId}
      isGroup
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup
            id={id}
            aria-labelledby={label ? labelId : undefined}
            {...ariaProps}
            {...props}
            ref={field.ref}
            name={field.name}
            value={field.value ?? ''}
            onValueChange={field.onChange}
            onBlur={field.onBlur}
          >
            {options.map((option) => {
              const optionId = `${id}-${option.value}`;

              return (
                <div key={option.value} className={optionClassName()}>
                  <RadioGroupItem id={optionId} value={option.value} disabled={option.disabled} />
                  <Label htmlFor={optionId} className={optionLabel()}>
                    {option.label}
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        )}
      />
    </FieldWrapper>
  );
};

export { RadioGroupField };
export type { RadioGroupFieldProps, RadioGroupOption };
