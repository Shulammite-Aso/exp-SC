import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { messages } from './messages';
import { Button } from 'app/components/Button/Button';
import { TextInput } from '../../../../../components/form/TextInput/index';
import { useAuthSlice } from '../../../slice/index';
import { loadingSelector } from '../../../slice/selectors';
import { Loader } from 'app/components/Loader';

const schema = yup
  .object({
    email: yup.string().required().trim().email(),
  })
  .required();

interface Props {}
type FormValues = {
  email: string;
};
export function EmailForm(props: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { actions } = useAuthSlice();
  const loading = useSelector(loadingSelector);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = form => {
    const data = { form, history };
    dispatch(actions.forgotPassword(data));
  };

  const onErrors: SubmitErrorHandler<FormValues> = errors => {
    console.warn('errors >>>', errors);
  };

  if (loading) return <Loader />;
  return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)}>
      <TextInput
        {...register('email')}
        name="email"
        label={t(...messages.email())}
        error={errors?.email?.message}
      />
      <SignInBtn className="btn btn-primary" type="submit">
        {t(...messages.submit())}
      </SignInBtn>
    </form>
  );
}

const SignInBtn = styled(Button)`
  margin-top: 20px;
`;
