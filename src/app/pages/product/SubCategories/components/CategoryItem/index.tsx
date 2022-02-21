import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';

interface Props {
  item: {
    image: string;
    desc: string;
  };
}

export const CategoryItem = memo(({ item }: Props) => {
  return (
    <Wrapper to="/products/category/subcategory/items">
      <img src={item.image} alt={item.desc} />
      <Label>
        <p>{item.desc}</p>
      </Label>
    </Wrapper>
  );
});

const Wrapper = styled(Link)`
  /* border: 1px solid red; */
  display: block;
  align-items: center;
  text-decoration: none;
  max-width: 210px;
  padding 0.7rem;

  ${customMedia.lessThan('medium')`
  width: 46%;
 `};
`;

const Label = styled.div`
  margin-top: 24px;

  ${customMedia.greaterThan('medium')`
  text-align: center;
 `};

  p {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }
`;
