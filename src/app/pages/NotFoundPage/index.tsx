import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import { ReactComponent as Rocket } from './assets/icons/404_rocket_icon.svg';
import { P } from 'app/components/Typography/P/P';
import { Button } from 'app/components/Button/Button';
import { H4 } from 'app/components/Typography/H4/H4';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <Icon />
        <Title>{t(...messages.title())}</Title>
        <SubTitle>{t(...messages.subtitle())}</SubTitle>
        <Cta as={Link} to={'/'} className="btn btn-primary">
          {t(...messages.ctaText())}
        </Cta>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  background-size: cover;
  background-image: ${p => p.theme.color.NotFoundBg};
`;
const Icon = styled(Rocket)`
  margin: auto;
  margin-bottom: 0;
  display: block;
  width: 339px;
  max-width: 100%;
`;

const Title = styled(H4)`
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 700;
  color: ${p => p.theme.color.colorTextBlack};
  text-align: center;
`;

const SubTitle = styled(P)`
  max-width: 500px;
  text-align: center;
  color: ${p => p.theme.color.colorTextBlack};
`;

const Cta = styled(Button)`
  width: 366px;
  margin: auto;
  margin-top: 35px;
  max-width: 100%;

  &:last-child {
    margin: auto;
    margin-top: 35px;
  }
`;
