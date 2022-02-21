/**
 *
 * PaymentForm
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import {
  FormProvider,
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { messages } from './messages';
import { FormValues, FormField, ControlledTextInput } from '../FormField';
import { Button } from 'app/components/Button/Button';
import { Row } from 'app/pages/auth/components/Row';
import { customMedia } from 'styles/media';
import { passwordPattern } from 'utils/validation';
import { BackText } from 'app/components/BackText';

const schema = yup
  .object({
    email: yup.string().required().trim().email(),
    password: yup
      .string()
      .required()
      .matches(
        passwordPattern,
        'Password must include letters, numbers, characters and uppercase',
      ),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
  })
  .required();

interface Props {}

export function PaymentForm(props: Props) {
  const { t, i18n } = useTranslation();
  const formMethods = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      last_name: '',
      first_name: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = form => {
    console.log(form);
  };

  const onErrors: SubmitErrorHandler<FormValues> = errors => {
    console.warn('errors >>>', errors);
  };

  return (
    <FormProvider {...formMethods}>
      <FormWrap>
        <InputRow>
          <FormField
            name="first_name"
            label="First Name"
            component={ControlledTextInput}
          />
          <FormField
            name="last_name"
            label="Last Name"
            component={ControlledTextInput}
          />
        </InputRow>
        <FormField
          name="email"
          label="Card Number"
          component={ControlledTextInput}
        />
        <InputRow>
          <FormField
            name="first_name"
            label="Month"
            component={ControlledTextInput}
          />
          <FormField
            name="last_name"
            label="Year"
            component={ControlledTextInput}
          />
        </InputRow>

        <InputRow>
          <FormField
            name="first_name"
            label="Security Code"
            component={ControlledTextInput}
          />
          <FormField
            name="last_name"
            label="Phone Number"
            component={ControlledTextInput}
          />
        </InputRow>
        <BtnRow>
          <BackText text={t(...messages.back())} />
          <SignUpBtn
            className="btn btn-primary"
            type="submit"
            onClick={formMethods.handleSubmit(onSubmit, onErrors)}
          >
            Save
          </SignUpBtn>
        </BtnRow>
      </FormWrap>
    </FormProvider>
  );
}

const FormWrap = styled.div`
  width: 60%;
  padding-left: 40px;
`;

const SignUpBtn = styled(Button)`
  margin-top: 20px;
`;

const InputRow = styled(Row)`
  div {
    width: 48%;
  }

  ${customMedia.lessThan('mediumplus')`
     flex-wrap: wrap;
     
     div {
       width: 100%;
     }
     
   `}
`;

const BtnRow = styled.div`
  display: flex;
  flex-direction: flex-end;
  justify-content: space-between;
  align-items: center;
`;

// const BackText = styled.p`
//   padding-left: 35px;
// `;
