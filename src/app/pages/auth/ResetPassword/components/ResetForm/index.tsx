import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextInput } from '../../../../../components/form/TextInput/index';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { messages } from './messages';
import { Button } from 'app/components/Button/Button';
import { ReactComponent as EyeClosed } from 'app/assets/icons/eye-closed.svg';
import { ReactComponent as EyeOpen } from 'app/assets/icons/eye-open.svg';
import { passwordPattern } from 'utils/validation';
import { useAuthSlice } from '../../../slice/index';

const schema = yup
  .object({
    password: yup
      .string()
      .required()
      .matches(
        passwordPattern,
        'Password must include letters, numbers, characters and uppercase',
      ),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();

interface Props {}
export type FormValues = {
  password: string;
  confirmPassword: string;
};
export function ResetForm(props: Props) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const showPassword = () => {
    setIsPasswordShown(prevState => !prevState);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const { actions } = useAuthSlice();
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = form => {
    const data = { form, history };
    dispatch(actions.resetPassword(data));
  };

  const onErrors: SubmitErrorHandler<FormValues> = errors => {
    console.warn('errors >>>', errors);
  };

  const renderIcon = () => {
    if (isPasswordShown) {
      return <EyeOpen onClick={showPassword} />;
    } else {
      return <EyeClosed onClick={showPassword} />;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)}>
      <TextInput
        {...register('password')}
        name="password"
        label={t(...messages.password())}
        error={errors?.password?.message}
      />
      <TextInput
        {...register('confirmPassword')}
        name="confirmPassword"
        label={t(...messages.confirmPassword())}
        error={errors?.confirmPassword?.message}
        renderIcon={renderIcon}
      />
      <SignInBtn className="btn btn-primary" type="submit">
        {t(...messages.button())}
      </SignInBtn>
    </form>
  );
}

const SignInBtn = styled(Button)`
  margin-top: 20px;
`;
