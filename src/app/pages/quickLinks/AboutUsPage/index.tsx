import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import Hero from '../components/Hero';
import Samsung from './assets/samsung.svg';
import Thermocool from './assets/thermocool.svg';
import Apple from './assets/apple.svg';
import LG from './assets/LG.svg';
import Tecno from './assets/tecno.svg';
import { BackText } from 'app/components/BackText';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { Content } from '../components/Content';

const icons = [
  {
    name: Samsung,
    altText: 'Samsung',
  },
  {
    name: Thermocool,
    altText: 'Thermocool',
  },
  {
    name: Apple,
    altText: 'Apple',
  },
  {
    name: LG,
    altText: 'LG',
  },
  {
    name: Tecno,
    altText: 'Tecno',
  },
];

export function AboutUsPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>About Us Page</title>
        <meta name="description" content="AltMall's About Us page" />
      </Helmet>
      <Wrapper>
        <Hero title="About Us" />
        <BackBtnAndContent>
          <BackBtn>
            <BackText text={t(...messages.back())} />
          </BackBtn>
          <Content
            text="The Alternative Mall (TAM) is an e-commerce platform developed by
            Sterling Alternative Finance (SAF) to provide customers great
            shopping experience and flexible payment options. On The Alternative
            Mall, customers can shop using web and mobile devices; choose a
            preferred option for getting their items (pick up or delivery) as
            well as payment options: Pay with card, Pay with OneBank App (open
            to customers with OneBank App), and Deferred payment by Sterling
            Alternative Finance"
            icons={icons}
          />
        </BackBtnAndContent>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  padding-bottom: 5rem;
`;

const BackBtnAndContent = styled.div`
  margin: 0 auto;
  color: ${p => p.theme.color.colorTextLightGray};
  font-size: 14px;
  display: flex;
  width: 83%;
  margin-top: 80px;
  flex-wrap: wrap;
`;

const BackBtn = styled.div`
  margin-right: 10%;
  margin-bottom: 24px;
`;
