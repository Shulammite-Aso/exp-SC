/**
 *
 * FormField
 *
 */
import React from 'react';
import {
  useController,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import { TextInput } from '../../../../../components/form/TextInput/index';

export type FormFieldProps = {
  name: keyof FormValues;
  label?: string;
  component: React.ComponentType<UseControllerProps<FormValues>>;
  renderIcon?: () => React.ReactNode;
  [x: string]: any;
};

export type FormValues = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

export const ControlledTextInput = (props: UseControllerProps<FormValues>) => {
  const { name, rules, defaultValue, ...inputProps } = props;
  const formContext = useFormContext();
  const {
    control,
    formState: { errors },
  } = formContext;

  const { field } = useController({ name, control, rules, defaultValue });

  return (
    <TextInput
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
    return <TextInput {...inputProps} error={errorMessage} />;
  }

  return <Component name={name} {...inputProps} />;
}
