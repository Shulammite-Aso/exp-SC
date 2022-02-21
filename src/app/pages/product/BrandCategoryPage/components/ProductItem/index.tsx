/**
 *
 * ProductItem
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Col, Card } from 'reactstrap';
import { customMedia } from 'styles/media';
import Ratings from '../../../../../components/Ratings/Ratings';
// import {ProductCard} from '../../../../../components/ProductCard';

interface Props {
  product: {
    image: string;
    detailsAction?: string;
    wishlistAction?: string;
    addtochatAction?: string;
    payPerMonth: string;
    desc: string;
    price: string;
    discount: string;
    oldprice: string;
    stared: number;
    nostar: string;
  };
  // key: number;
}

export function ProductItem({ product }: Props) {
  return (
    <Col lg={3} sm={3} md={6}>
      <Card
        className="border-0 mb-4 p-3 product_card"
        to="/products/category/subcategory/product"
      >
        <Image src={product.image} alt={product.desc} />
        <CallToAction>
          <Link to="/products/:product">
            <DetailsImage src={product.detailsAction} alt={product.desc} />
          </Link>
          <Link to="/wishlist">
            <WishlistImage src={product.wishlistAction} alt={product.desc} />
          </Link>
          <Link to="/cart">
            <ChartImage src={product.addtochatAction} alt={product.desc} />
          </Link>
        </CallToAction>
        <MonthlyPayImage src={product.payPerMonth} alt={product.desc} />
        <Container to="/products/category/subcategory/product">
          <Description>{product.desc}</Description>
          <Pricing>
            <Price>{product.price}</Price>
            <Discount>{product.discount}</Discount>
          </Pricing>
          <OldPrice>{product.oldprice}</OldPrice>
          <Ratings defaultValue={product.stared} max={5} readOnly={true} />
        </Container>
      </Card>
    </Col>
  );
}

const CallToAction = styled.div`
  /* opacity: 0; */
  display: block;
  position: absolute;
  top: 58px;
  left: 20px;
  height: 94px;
  width: 29px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 100;
  }
`;

const Container = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  position: relative;
  margin-bottom: 12px;

  &:hover ${CallToAction} {
    opacity: 1;
  }
`;

const DetailsImage = styled.img`
  width: 29px;
  margin-bottom: 6px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
const WishlistImage = styled.img`
  width: 29px;
  margin-bottom: 6px;

  &:hover {
    transform: scale(1.1);
  }
`;
const ChartImage = styled.img`
  width: 29px;

  &:hover {
    transform: scale(1.1);
  }
`;
const MonthlyPayImage = styled.img`
  opacity: 0;
  position: absolute;
  top: 14px;
  right: 14px;
  width: 83px;
  height: 23px;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const Description = styled.p`
  width: 100%;
  color: ${p => p.theme.color.colorText};
  opacity: 100;
  ${customMedia.greaterThan('medium')`
    font-size: 1rem;
    `};

  ${customMedia.lessThan('medium')`
      font-size: 1rem;
      font-weight: bold;
 
    `};
`;

const Pricing = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Price = styled.p`
  font-size: 17px;
  width: 67px;
  font-weight: 400;
  word-spacing: 2px;
  color: rgba(237, 93, 93, 1);
`;

const Discount = styled.p`
  width: 45px;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  padding-top: 8px;
  color: rgba(237, 93, 93, 1);
`;

const OldPrice = styled.p`
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  color: #bdbcdb;
  word-spacing: 2px;
  letter-spacing: 1px;
  text-decoration: line-through;
`;
