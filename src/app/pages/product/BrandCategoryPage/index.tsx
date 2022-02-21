/**
 *
 * BrandCategoryPage
 *
 */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Title } from './components/Title';
import { Sidebar } from './components/Sidebar';
import { Filterbar } from './components/Filterbar';
import { ProductList } from './components/ProductList';
import { customMedia } from 'styles/media';
import { Row, Col } from 'reactstrap';

interface Props {}

export interface Address {
  price: string;
  brand: string;
  store_availability: string;
}

export function BrandCategoryPage(props: Props) {
  const [shippingAddress, setShippingAddress] = useState<Address>({
    price: '',
    brand: '',
    store_availability: '',
  });

  const handleShippingSubmit = (key: string, value: string) => {
    setShippingAddress({ ...shippingAddress, [key]: value });
  };

  return (
    <Wrapper>
      <Row>
        <Title />
      </Row>
      <Row>
        <Col xd={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <LeftContainer>
            <Filterbar handleFormChange={handleShippingSubmit} />
            <ProductList />
          </LeftContainer>
        </Col>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 0 38px; */

  /* ${customMedia.lessThan('small')`
  Sidebar{
    display: none;
  }
  //padding: 2rem 2rem 5rem 0.8rem;
  `}; */
`;

const LeftContainer = styled.div`
  /* border: 0.5px solid pink; */
  /* display: block;
  flex: 4;
  margin: atuo 5px; */
`;
