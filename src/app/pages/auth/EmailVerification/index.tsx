import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { ReactComponent as CloudLock } from 'app/assets/icons/cloud_lock.svg';

import { messages } from './messages';
import { P } from 'app/components/Typography/P/P';
import { H4 } from '../../../components/Typography/H4/H4';
import { TextLink } from 'app/components/TextLink';
import { CodeForm } from './components/CodeForm';
import { ActionSuccess } from 'app/components/ActionSuccess';
import { useSelector } from 'react-redux';
import { userSelector, loadingSelector } from '../slice/selectors';
import { Loader } from 'app/components/Loader';
interface Props {}

export const EmailVerification = memo((props: Props) => {
  const { t } = useTranslation();
  const { email } = useSelector(userSelector);
  const loading = useSelector(loadingSelector);
  // const history = useHistory();
  const success = false;

  if (success) {
    return (
      <ActionSuccess
        to="/auth/login"
        title={t(...messages.successTitle())}
        subtitle={t(...messages.successSubTitle())}
        buttonText={t(...messages.continue())}
      />
    );
  }

  if (!email || email == null) return <Redirect to="/auth/signup" />;
  if (loading) return <Loader />;
  return (
    <Wrapper>
      <Icon />
      <Title>{t(...messages.title())}t</Title>
      <SubTitle>
        {t(...messages.subtitle(), { email: email ? email : '' })}
      </SubTitle>

      <CodeForm />

      <FooterText>
        {t(...messages.footer())}
        <TextLink to="/"> {t(...messages.resend())}. </TextLink>
      </FooterText>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 340px;
`;

const Icon = styled(CloudLock)`
  margin: auto;
  width: 60px;
  height: 60px;
`;

const Title = styled(H4)`
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 600;
`;
const SubTitle = styled(P)``;
const FooterText = styled(P)``;
