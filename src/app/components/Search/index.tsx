import React, { memo } from 'react';
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
import { Button } from 'app/components/Button/Button';
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
  const { name, component: Component, ...inputProps } = props;
  const formContext = useFormContext();

  if (!formContext || !name) {
    return <input {...inputProps} />;
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
  btnText: string;
  submitAction: (form: FormValues) => void;
}

export const Search = memo(({ placeholder, btnText, submitAction }: Props) => {
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
        <SearchIcon />
        <SearchField
          placeholder={placeholder}
          name="search"
          component={ControlledTextInput}
        />
        <SearchBtn
          className="btn btn-primary"
          type="submit"
          onClick={formMethods.handleSubmit(onSubmit, onErrors)}
        >
          {btnText}
        </SearchBtn>
      </FormProvider>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  margin: auto 0;
  padding: 0;
  position: relative;
  padding: 10px;
  background-color: ${p => p.theme.color.colorSearch};
  border-radius: 4px;
  height: 56px;
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
  height: 40px;
  max-width: 513px;
  min-width: 50px;
  margin-top: auto;
  margin-bottom: auto;
  ${p => p.theme.direction['margin-right']}: 20px;
  ${p => p.theme.direction['margin-left']}: 0px;
  ${p => p.theme.direction['padding-right']}: auto;
  ${p => p.theme.direction['padding-left']}: 0px;
  background-color: transparent;
  border: none;
  color: ${p => p.theme.color.colorText};
  font-size: 12px;

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

const SearchBtn = styled(Button)`
  margin-bottom: 0;
  height: 40px;

  ${customMedia.lessThan('small')`
    height: 29px;
  `};
`;

const SearchIcon = styled(Lens)`
  margin: auto 10px;
  width: 25px;

  path {
    stroke: ${p => p.theme.color.colorText};
  }

  ${customMedia.lessThan('xsm')`
    margin: auto 5px;
    width: 15px;
  `}
`;
