import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
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
import { useTrackOrderSlice } from '../../slice/index';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { customMedia } from 'styles/media';
import { Button } from 'app/components/Button/Button';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

export type FormValues = {
  track: string;
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
    //track: yup.string().required().trim(),
  })
  .required();

export const Search = memo(() => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { actions } = useTrackOrderSlice();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      track: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = form => {
    console.log(form.track);
    dispatch(actions.getOrderShipmentDetails(form.track));
  };

  const onErrors: SubmitErrorHandler<FormValues> = errors => {
    console.warn('errors >>>', errors);
  };

  return (
    <Wrapper>
      <FormProvider {...formMethods}>
        <SearchField
          placeholder={t(...messages.searchBarPlaceholder())}
          name="track"
          component={ControlledTextInput}
        />
        <SearchBtn
          className="btn btn-primary"
          type="submit"
          onClick={formMethods.handleSubmit(onSubmit, onErrors)}
        >
          {t(...messages.btnText())}
        </SearchBtn>
      </FormProvider>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  padding: 0;
  position: relative;
  padding: 10px;
  background-color: ${p => p.theme.color.colorSearch};
  border-radius: 4px;
  height: 56px;
  width: 85%;
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
