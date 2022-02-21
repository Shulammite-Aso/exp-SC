import React from 'react';
import styled from 'styled-components/macro';
import { Container, Col } from 'reactstrap';
export function ProductListView() {
  const products = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  return (
    <Wrapper>
      {products.map(product => (
        <Col>
          <Card>
            <h1>Product {product}</h1>
          </Card>
        </Col>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
  row-gap: 30px;
  padding-bottom: 50px;
`;
const Card = styled.div`
  display: block;
  width: 250px;
  height: 300px;
  background-color: white;
`;
