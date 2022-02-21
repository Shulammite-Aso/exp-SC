import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import { LoginForm } from './components/LoginForm';
import { GoogleSigninBtn } from 'app/components/GoogleSigninBtn';
import { FBSigninBtn } from 'app/components/FbSigninBtn/index';
import { BackText } from 'app/components/BackText';
import { ButtonCta } from 'app/components/ButtonCta';
import { Row } from '../components/Row/index';
import { Title } from '../components/Title/index';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthSlice } from '../slice/index';
import { loadingSelector } from '../slice/selectors';
import { Loader } from 'app/components/Loader';
import { errorSelector } from '../slice/selectors';
import Notifications from 'app/components/Notification';

export function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { actions } = useAuthSlice();
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  const handleGoogleSuccess = async (response): Promise<void> => {
    const data = { clientData: response, history };
    dispatch(actions.googleAuthLogin(data));
    // console.log('response :>> ', response);
    // console.log('response.picture.data.url :>> ', response?.picture?.data?.url);
  };
  const handleFacebookSuccess = async (response): Promise<void> => {
    const data = { clientData: response, history };
    dispatch(actions.facebookAuthLogin(data));

    // console.log('response :>> ', response);
    // console.log('response.picture.data.url :>> ', response?.picture?.data?.url);
  };

  const handleError = (error: any): void => {
    console.log('error', error);
  };

  if (loading) return <Loader />;
  return (
    <Wrapper>
      <Row>
        <BackText text={t(...messages.back())} />
        <ButtonCta
          to="/auth/signup"
          text={t(...messages.createAccount())}
          btStyle="btn-outline-primary"
        />
      </Row>
      <Title text={t(...messages.title())} />
      <Row>
        <GoogleSigninBtn
          handleSuccess={handleGoogleSuccess}
          handleError={handleError}
          buttonText={t(...messages.googleSignin())}
        />
        <FBSigninBtn
          handleSuccess={handleFacebookSuccess}
          handleError={handleError}
          buttonText={t(...messages.fbSignin())}
        />
      </Row>
      <LoginForm />
      {error ? <Notifications type="error" message={error.details} /> : <></>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  max-width: 600px;
  min-width: 285px;
`;
