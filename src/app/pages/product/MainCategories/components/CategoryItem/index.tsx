import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';

interface Props {
  item: {
    image: string;
    desc?: string;
    name: string;
  };
}

export const CategoryItem = memo(({ item }: Props) => {
  return (
    <Wrapper to="/products/category">
      <ImageDiv src={item.image} alt={item.name} />
      <Label>
        <p>{item.name}</p>
      </Label>
    </Wrapper>
  );
});

const Wrapper = styled(Link)`
  display: grid;
  align-items: center;
  text-decoration: none;
  max-width: 200px;
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

const ImageDiv = styled.img`
  max-width: 200px;
  height: 150px;
`;
