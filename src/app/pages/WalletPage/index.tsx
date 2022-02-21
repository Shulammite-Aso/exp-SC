import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import Sidebar from '../components/Sidebar';
import Wallet from './components/Wallet';

export function WalletPage() {
  const mql = window.matchMedia('(max-width: 768px)');
  const mobileDevice = mql.matches;
  return (
    <>
      <Helmet>
        <title>Wallet Page</title>
        <meta name="description" content="A AltMall wallet page" />
      </Helmet>
      <Wrapper>
        {!mobileDevice ? <Sidebar /> : null}
        <Wallet />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  padding: 0.5rem;
  ${customMedia.greaterThan('medium')`
  display: flex;
  //padding: 2rem 2rem 5rem 0.8rem;
  `};
`;
