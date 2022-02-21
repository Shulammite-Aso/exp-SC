import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import { customMedia } from 'styles/media';
import { P } from 'app/components/Typography/P/P';
import { TextLink } from 'app/components/TextLink';

interface Props {
  children: React.ReactNode;
}

export const StandaloneView = memo(({ children }: Props) => {
  const { t } = useTranslation();
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <Wrapper>
      <CardWrap>
        <Logo to="/" />
        <Card>{children}</Card>
      </CardWrap>
      <Footer>
        <Left>
          <TextLink to="/company/T&amp;C">
            {t(...messages.termsOfUse())}
          </TextLink>
          <TextLink to="/company/privacy-policy">
            {t(...messages.privacyPolicy())}
          </TextLink>
        </Left>
        <Right>
          <P>
            {t(...messages.copyrights(), {
              year: getYear(),
            })}
          </P>
        </Right>
      </Footer>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: ${p => p.theme.color.colorBackgroundBody};
`;

const CardWrap = styled.div`
  margin: auto;
  padding: 10px;
  text-align: ${p => p.theme.direction['left']};
`;

const Logo = styled(Link)`
  width: 125px;
  height: 25px;
  margin: 30px auto;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: center;
  background-size: contain;
  background-image: ${p => p.theme.color.logoImg};
  display: block;
`;

const Card = styled.div`
  background-color: ${p => p.theme.color.colorBackground};
  padding: 50px 60px;
  max-width: 520px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);

  ${customMedia.lessThan('small')`
    padding: 35px 30px;
  `}
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto 20px auto;

  ${customMedia.lessThan('xmedium')`
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 189px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: cneter;
`;
