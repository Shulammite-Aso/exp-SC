import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import Sidebar from '../components/Sidebar';
import OrderHistory from './components/OrderHistory';

export function OrderHistoryPage() {
  const mql = window.matchMedia('(max-width: 768px)');
  const mobileDevice = mql.matches;
  return (
    <>
      <Helmet>
        <title>Order history Page</title>
        <meta name="description" content="A AltMall Order History page" />
      </Helmet>
      <Wrapper>
        {!mobileDevice ? <Sidebar /> : null}

        <OrderHistory />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  padding: 2rem 0 5rem 0.8rem;

  ${customMedia.greaterThan('medium')`
  display: flex;
  `};
`;
