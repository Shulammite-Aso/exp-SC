import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import { ResetForm as Form } from './components/ResetForm';
import { BackText } from 'app/components/BackText';
import { Row } from '../components/Row/index';
import { Title } from '../components/Title/index';
import { ActionSuccess } from 'app/components/ActionSuccess';

export function ResetPassword() {
  const { t } = useTranslation();
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

  return (
    <Wrapper>
      <Row>
        <BackText text={t(...messages.back())} />
      </Row>
      <Title text={t(...messages.title())} />
      <Form />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  min-width: 310px;
`;
