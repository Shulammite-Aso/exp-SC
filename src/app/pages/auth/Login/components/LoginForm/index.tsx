import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { messages } from './messages';
import { Button } from 'app/components/Button/Button';
import { ReactComponent as EyeClosed } from 'app/assets/icons/eye-closed.svg';
import { ReactComponent as EyeOpen } from 'app/assets/icons/eye-open.svg';
import { TextLink } from 'app/components/TextLink/index';
import { passwordPattern } from 'utils/validation';
import { TextInput } from '../../../../../components/form/TextInput/index';
import { useDispatch } from 'react-redux';
import { useAuthSlice } from '../../../slice/index';
export type FormValues = {
  email: string;
  password: string;
};
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
  })
  .required();

interface Props {}

export function LoginForm(props: Props) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { actions } = useAuthSlice();
  const showPassword = () => {
    setIsPasswordShown(prevState => !prevState);
  };

  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = form => {
    const data = { form, history };
    dispatch(actions.loginUser(data));
  };

  const onErrors: SubmitErrorHandler<FormValues> = errors => {
    dispatch(actions.setError(errors));
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
        {...register('email')}
        name="email"
        label={t(...messages.email())}
        error={errors?.email?.message}
      />
      <TextInput
        {...register('password')}
        name="password"
        label={t(...messages.password())}
        error={errors?.password?.message}
        type={isPasswordShown ? 'text' : 'password'}
        renderIcon={renderIcon}
      />
      <LinkWrap>
        <TextLink to="/auth/forgot-password">
          {t(...messages.forgotPasssword())}
        </TextLink>
      </LinkWrap>
      <SignInBtn className="btn btn-primary" type="submit">
        {t(...messages.signIn())}
      </SignInBtn>
    </form>
  );
}

const SignInBtn = styled(Button)`
  margin-top: 20px;
`;
const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
