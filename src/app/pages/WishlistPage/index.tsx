import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import Wishlist from './components/Wishlist';

export function WishlistPage() {
  return (
    <>
      <Helmet>
        <title>Wishlist Page</title>
        <meta name="description" content="A AltMall wishlist page" />
      </Helmet>
      <Wrapper>
        <Wishlist />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  padding: 0.5rem;
  ${customMedia.greaterThan('medium')`
  padding: 2rem 2rem 5rem 0.8rem;
  `};
`;
