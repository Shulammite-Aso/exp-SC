/**
 *
 * SellerInformation
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/Header';
import { ProductListView } from '../../../components/ProductListView';
import { Body } from './components/Body';

interface Props {}

export function SellerInformation(props: Props) {
  return (
    <>
      <Helmet>
        <title>Seller Information Page</title>
        <meta name="description" content="A AltMall Seller Information Page" />
      </Helmet>
      <Wrapper>
        <Header />
        <Body />
        <ProductListView />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;
