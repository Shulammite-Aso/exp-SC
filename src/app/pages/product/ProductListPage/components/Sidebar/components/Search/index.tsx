import React, { ChangeEvent, memo } from 'react';
import styled from 'styled-components/macro';
import {
  FormProvider,
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  useController,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { customMedia } from 'styles/media';
import { ReactComponent as Lens } from 'app/assets/icons/search.svg';

export type FormValues = {
  search: string;
};

export type FormFieldProps = {
  name: keyof FormValues;
  placeholder: string;
  component: React.ComponentType<UseControllerProps<FormValues>>;
  [x: string]: any;
};

export const ControlledTextInput = (props: UseControllerProps<FormValues>) => {
  const { name, rules, defaultValue, ...inputProps } = props;
  const formContext = useFormContext();
  const { control } = formContext;

  const { field } = useController({ name, control, rules, defaultValue });

  return (
    <input
      {...inputProps}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
    />
  );
};

export function FormField(props: FormFieldProps) {
  const { name, onChange, component: Component, ...inputProps } = props;
  const formContext = useFormContext();

  if (!formContext || !name) {
    return <input onChange={onChange} {...inputProps} />;
  }

  return <Component name={name} {...inputProps} />;
}

const schema = yup
  .object({
    search: yup.string().required().trim(),
  })
  .required();

interface Props {
  placeholder: string;
  submitAction: (form: FormValues) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = memo(({ placeholder, submitAction, onChange }: Props) => {
  const formMethods = useForm<FormValues>({
    defaultValues: {
      search: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = form => {
    submitAction(form);
  };

  const onErrors: SubmitErrorHandler<FormValues> = errors => {
    console.warn('errors >>>', errors);
  };

  return (
    <Wrapper>
      <FormProvider {...formMethods}>
        <SearchIcon onClick={formMethods.handleSubmit(onSubmit, onErrors)} />
        <SearchField
          placeholder={placeholder}
          onChange={onChange}
          component={ControlledTextInput}
        />
      </FormProvider>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  margin: auto 0;
  position: relative;
  padding: 10px;
  background-color: ${p => p.theme.color.inputColor};
  border-radius: 4px;
  height: 50px;
  width: 100%;
  align-items: center;
  max-width: 700px;

  ${customMedia.lessThan('small')`
    height: 45px;
  `};

  ${customMedia.lessThan('xsm')`
    padding: 5px;
  `}
`;

const SearchField = styled(FormField)`
  width: 100%;
  height: 100%;
  max-width: 513px;
  min-width: 50px;
  ${p => p.theme.direction['margin-right']}: 20px;
  ${p => p.theme.direction['margin-left']}: 0px;
  ${p => p.theme.direction['padding-right']}: auto;
  ${p => p.theme.direction['padding-left']}: 0px;
  background-color: transparent;
  border: none;
  color: ${p => p.theme.color.colorText};
  font-size: 14px;
  padding-top: 3px;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #cac1c1;
    ${p => p.theme.direction['padding-right']}: 50px;
  }

  ${customMedia.lessThan('medium')`
    max-width: 150px;
  `};

  ${customMedia.lessThan('xmedium')`
    max-width: 120px;   
  `};

  ${customMedia.lessThan('small')`
    max-width: 300px;
    margin-bottom: 10px;
    height: 29px;
  `};

  ${customMedia.lessThan('xsm')`
    ${p => p.theme.direction['margin-right']}: 5px;
    margin-bottom: unset;
  `}
`;

const SearchIcon = styled(Lens)`
  margin: auto 10px;
  width: 25px;
  background-color: ${p => p.theme.color.inputColor};
  cursor: pointer;

  path {
    stroke: ${p => p.theme.color.colorText};
  }

  ${customMedia.lessThan('xsm')`
    margin: auto 5px;
    width: 15px;
  `}
`;
