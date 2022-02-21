import React from 'react';
import styled from 'styled-components/macro';
import { ProductCard } from 'app/components/ProductCard';
import StarRating from 'app/components/StarRating';
import { customMedia } from 'styles/media';
// import { useProductSlice } from 'app/pages/product/slice';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { productListSelector } from 'app/pages/product/slice/selectors';

export function ListView() {
  const productList = useSelector(productListSelector);

  return (
    <Wrapper>
      {productList &&
        productList?.map(product => (
          <Card key={uuid()}>
            <ProductCard product={product} />
            <Rating>
              <StarRating rating={product.rating} />
            </Rating>
          </Card>
        ))}
      {productList && productList?.length === 0 && (
        <Text>No Products Available</Text>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 230px));
  grid-gap: 10px;
  padding-bottom: 50px;
  width: 100%;
  justify-content: space-between;

  ${customMedia.lessThan('medium')`
  grid-template-columns: repeat(auto-fit, minmax(160px, 220px));
  grid-gap: 20px;
  `}
  ${customMedia.lessThan('small')`
    grid-template-columns: repeat(auto-fit, minmax(160px, 170px));
    grid-gap: 5px;
    row-gap: 15px;
    justify-content: center;
    padding: 5px;
  `}
`;
const Card = styled.div`
  display: block;
  width: 100%;
  height: max-content;
  ${customMedia.lessThan('small')`
    justify-content: center;
  `}
`;
const Rating = styled.div`
  margin-left: 1.5rem;
  margin-top: -15px;
`;

const Text = styled.p`
  color: #000000;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
`;
