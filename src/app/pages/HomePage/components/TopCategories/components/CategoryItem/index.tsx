/**
 *
 * CategoryItem
 *
 */
import { TopCategoryProps } from 'app/pages/HomePage/slice/types';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';

export const CategoryItem: React.FC<TopCategoryProps> = memo(props => {
  return (
    <Wrapper to="/products/category">
      <img src={props.banner} alt={props.name} />
      <Label>
        <p>{props.name}</p>
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

  ${customMedia.lessThan('xmedium')`
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
