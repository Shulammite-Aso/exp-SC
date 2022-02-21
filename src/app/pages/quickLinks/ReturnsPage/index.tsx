import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import Hero from '../components/Hero';
import { BackText } from 'app/components/BackText';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { ReturnsMobileView } from './components/mobileView/Loadable';
import { ReturnsDesktopView } from './components/desktopView/Loadable';

export function ReturnsPage() {
  const { t } = useTranslation();
  const screenWidth = window.screen.width;
  const MOBILE_RESOLUTION = 768;
  console.log(screenWidth < MOBILE_RESOLUTION);
  return (
    <>
      <Helmet>
        <title>Returns and Exchange Page</title>
        <meta
          name="description"
          content="AltMall's Returns and Exchange page"
        />
      </Helmet>
      <Wrapper>
        <Hero title="Returns and Exchange" />
        <BackBtn>
          <BackText text={t(...messages.back())} />
        </BackBtn>

        <br />
        <SecondSection>
          {/* Render Either the mobile view or the web view conditionally from here */}
          <ReturnsMobileView />
          <ReturnsDesktopView />
        </SecondSection>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  padding-bottom: 5rem;
`;

const SecondSection = styled.div`
  padding: 0 12px;
  margin-top: 75px;

  ${customMedia.greaterThan('medium')`
  display: flex;
  ${p => p.theme.direction['padding-left']}: 3rem;
  `};
`;

const BackBtn = styled.div`
  margin-left: 12.47%;
  color: ${p => p.theme.color.colorTextLightGray};
  font-size: 14px;
  margin-top: 80px;
`;
