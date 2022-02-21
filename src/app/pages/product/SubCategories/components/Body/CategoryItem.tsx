/**
 *
 * CategoryItem
 *
 */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import styled from 'styled-components/macro';

interface Props {
  item: {
    image: string;
    desc: string;
  };
}

export const CategoryItem = memo(({ item }: Props) => {
  return (
    <Col md={3} xs={6}>
      <Card
        to="/products/category/subcategory/items"
        style={{ border: 'none', cursor: 'pointer' }}
      >
        <Image src={item.image} alt={item.desc} />
        <Label>
          <p>{item.desc}</p>
        </Label>
      </Card>
    </Col>
  );
});

const Card = styled(Link)`
  display: block;
  margin: 5px;
  position: relative;
  cursor: pointer;
  text-decoration: none;
`;

const Image = styled.img`
  height: 70%;
  width: 100%;
  object-fit: contain;
`;

const Label = styled.div`
  width: 100%;
  height: 20%;
  margin-top: 24px;
  text-align: center;

  p {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }
`;
