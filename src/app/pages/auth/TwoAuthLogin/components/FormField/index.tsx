import React from 'react';
import {
  useController,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import { InputModeTypes } from 'react-code-input';

import { CodeInput } from 'app/components/form/CodeInput/index';
export type FormFieldProps = {
  type: 'number' | 'text' | 'tel' | 'password' | undefined;
  fields: number;
  inputMode: InputModeTypes;
  name: keyof FormValues;
  component: React.ComponentType<UseControllerProps<FormValues>>;
  [x: string]: any;
};
export type FormValues = {
  code: string;
};
export const ControlledInput = (props: UseControllerProps<FormValues>) => {
  const { name, rules, defaultValue, ...inputProps } = props;
  const formContext = useFormContext();
  const {
    control,
    formState: { errors },
  } = formContext;

  const { field } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <CodeInput
      {...inputProps}
      error={errors[name]?.message}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
    />
  );
};

export function FormField(props: FormFieldProps) {
  const { name, component: Component, ...inputProps } = props;
  const formContext = useFormContext();

  if (!formContext || !name) {
    const errorMessage = !name
      ? 'Form field must have a "name" prop!'
      : 'Form field must be a descendant of `FormProvider` as it uses `useFormContext`!';
    return <CodeInput {...inputProps} error={errorMessage} />;
  }

  return <Component name={name} {...inputProps} />;
}
