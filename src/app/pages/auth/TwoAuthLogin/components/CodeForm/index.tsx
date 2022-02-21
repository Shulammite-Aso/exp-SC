import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  FormProvider,
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { messages } from './messages';
import { FormValues, FormField, ControlledInput } from '../FormField';
import { Button } from 'app/components/Button/Button';
import { useAuthSlice } from 'app/pages/auth/slice';

const schema = yup
  .object({
    code: yup.string().required().min(6).max(6),
  })
  .required();

interface Props {}

export function CodeForm(props: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { actions } = useAuthSlice();

  const formMethods = useForm<FormValues>({
    defaultValues: {
      code: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = form => {
    const formData = {
      otp: form.code,
      token: JSON.parse(localStorage.getItem('jwtToken') ?? ''),
    };

    const userDetails = {
      user: JSON.parse(localStorage.getItem('userDetail') ?? ''),
    };

    const data = { userDetails, formData, history };
    console.log(data);
    dispatch(actions.twoAuthLogin(data));
  };

  const onErrors: SubmitErrorHandler<FormValues> = errors => {
    console.warn('errors >>>', errors);
  };

  return (
    <Wrapper>
      <FormProvider {...formMethods}>
        <FormField
          name="code"
          type={'number'}
          fields={6}
          inputMode={'numeric'}
          component={ControlledInput}
        />

        <SignInBtn
          className="btn btn-primary"
          type="submit"
          onClick={formMethods.handleSubmit(onSubmit, onErrors)}
        >
          {t(...messages.submit())}
        </SignInBtn>
      </FormProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SignInBtn = styled(Button)`
  margin-top: 10px;
  max-width: 110px;
`;
