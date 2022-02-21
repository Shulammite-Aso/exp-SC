import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import Cart from './components/ItemsInCart';

export function CartPage() {
  return (
    <>
      <Helmet>
        <title>Order history Page</title>
        <meta name="description" content="A AltMall Order History page" />
      </Helmet>
      <Wrapper>
        <Cart />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  //text-align: center;
  padding: 2rem 0 5rem 0.8rem;
`;
