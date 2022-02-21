import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { TextInput } from '../../../../../components/form/TextInput/index';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { messages } from './messages';
import { Button } from 'app/components/Button/Button';
import { ReactComponent as EyeClosed } from 'app/assets/icons/eye-closed.svg';
import { ReactComponent as EyeOpen } from 'app/assets/icons/eye-open.svg';
import { TextLink } from 'app/components/TextLink/index';
import { Row } from 'app/pages/auth/components/Row';
import { P } from 'app/components/Typography/P/P';
import { customMedia } from 'styles/media';
import { passwordPattern } from 'utils/validation';
import { useDispatch } from 'react-redux';
import { useAuthSlice } from '../../../slice/index';

export type FormValues = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
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
    first_name: yup.string().required(),
    last_name: yup.string().required(),
  })
  .required();

interface Props {}

export function SignupForm(props: Props) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { actions } = useAuthSlice();
  const showPassword = () => {
    setIsPasswordShown(prevState => !prevState);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      last_name: '',
      first_name: '',
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = form => {
    const requestPayload = { email: form.email };
    const data = { requestPayload, history };

    dispatch(actions.setUser(form));
    dispatch(actions.signupUser(data));
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
      <InputRow>
        <TextInput
          {...register('first_name')}
          name="first_name"
          label={t(...messages.first_name())}
          error={errors?.first_name?.message}
        />
        <TextInput
          {...register('last_name')}
          name="last_name"
          label={t(...messages.last_name())}
          error={errors?.last_name?.message}
        />
      </InputRow>
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
        <P>
          {t(...messages.agreement())}{' '}
          <TextLink to="/terms-of-use">{t(...messages.termsOfUse())}</TextLink>{' '}
          and
          <TextLink to="/privacy-policy">
            {' '}
            {t(...messages.privacyPolicy())}
          </TextLink>
          .
        </P>
      </LinkWrap>

      <SignUpBtn className="btn btn-primary" type="submit">
        {t(...messages.createAccount())}
      </SignUpBtn>
    </form>
  );
}

const SignUpBtn = styled(Button)`
  margin-top: 20px;
`;
const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px !important;
`;

const InputRow = styled(Row)`
  div {
    width: 48%;
  }

  ${customMedia.lessThan('mediumplus')`
    flex-wrap: wrap;
    
    div {
      margin-top: 10px !important;
      width: 100%;
    }
    
  `}
`;
