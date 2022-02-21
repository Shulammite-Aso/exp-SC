import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import Sidebar from '../components/Sidebar';
import TrackOrder from './components/TrackOrder';

export function TrackOrderPage() {
  const mql = window.matchMedia('(max-width: 835px)');
  const mobileDevice = mql.matches;
  return (
    <>
      <Helmet>
        <title>Track Order Page</title>
        <meta name="description" content="A AltMall Track Order page" />
      </Helmet>
      <Wrapper>
        {!mobileDevice ? <Sidebar /> : null}

        <TrackOrder />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  padding: 2rem 0 5rem 0.8rem;

  ${customMedia.greaterThan('mediumplus')`
  display: flex;
  `};
`;
