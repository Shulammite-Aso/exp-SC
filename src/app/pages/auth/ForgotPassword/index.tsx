import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import { EmailForm as Form } from './components/EmailForm';
import { BackText } from 'app/components/BackText';
import { Row } from '../components/Row/index';
import { Title } from '../components/Title/index';
import { P } from 'app/components/Typography/P/P';

export function ForgotPassword() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Row>
        <BackText text={t(...messages.back())} />
      </Row>
      <Title text={t(...messages.title())} />
      <SubTitle>{t(...messages.subtitle())}</SubTitle>
      <Form />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  min-width: 285px;
`;

const SubTitle = styled(P)`
  margin: 0 0 30px 0;
`;
