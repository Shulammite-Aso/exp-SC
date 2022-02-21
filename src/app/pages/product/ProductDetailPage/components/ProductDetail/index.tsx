/**
 *
 * ProductDetail
 *
 */

import styled from 'styled-components/macro';
import { Button } from 'app/components/Button/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Controller, useForm } from 'react-hook-form';
import { SelectInput } from 'app/components/form/SelectInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { H3 } from 'app/components/Typography/H3/H3';
import { customMedia } from 'styles/media';
import shareImg from '../../assets/share.png';
import ellipseImg from '../../assets/ellipseImg.png';
import bankImg from '../../assets/bankImg.png';
import shoppingCart from '../../assets/shoppingcart.png';
import save from '../../assets/save.png';
import StarRating from 'app/components/StarRating';

export type FormValues = {
  state: { label: string; value: string };
  city: { label: string; value: string };
};

const schema = yup.object().shape({
  state: yup.object().shape({
    value: yup.string().trim().required('state is required'),
  }),
  city: yup.object().shape({
    value: yup.string().trim().required('city is required'),
  }),
});

export function ProductDetail({ detail, handleFormChange }) {
  const {
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {},
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(detail.primary_image || detail.images[0]);

  const calculatedDiscountPercentage =
    ((detail.price - detail.discount_price) * 100) / detail.price;

  const colorVariation = detail.color.map(colorItem => ({
    value: colorItem,
    label: colorItem,
  }));

  const sizeVariation = detail.size_variations.map(size_variation => ({
    value: size_variation.size,
    label: size_variation.size,
  }));

  const handleQuantiy = type => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const addToCartHandler = () => {
    console.log(`Added product`);
  };

  // let ratings = [];

  return (
    <Container>
      <Wrapper>
        <Row>
          <Col md={6}>
            <Row>
              <Col xs="6">
                <ShareLink to="/">
                  <ShareImg src={shareImg} alt={`share icon`} />
                  <p className="share-text">Share</p>
                </ShareLink>
              </Col>
              <Image src={image} alt={detail.name} />
            </Row>
            <Row>
              <Col>
                <GroupImgs>
                  {detail.images.map((image: string | undefined, i) => (
                    <GpImg
                      key={i}
                      src={image}
                      alt={`image`}
                      onClick={() => setImage(image)}
                    />
                  ))}
                </GroupImgs>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Wrapper>
              <Row className="mb-5">
                <Col md={1}>
                  <EllipseImg src={ellipseImg} alt={`image`} />
                </Col>
                <Col md={2}>
                  <p className="text-secondary">Sold by</p>
                </Col>
                <Col md={4}>
                  <p className="text-danger fw-bold">
                    {detail.vendor?.first_name} {detail.vendor?.last_name}
                  </p>
                </Col>
                <Col md={4}>
                  <SellerInfo
                    className="text-decoration-underline text-secondary"
                    to="/products/category/subcategory/product/sellerinformation"
                  >
                    View Seller Information
                  </SellerInfo>
                </Col>
              </Row>
              <Row className="fw-bold mb-2">
                <H3>{detail.name}</H3>
              </Row>
              <Row className="mb-3">
                <BrandProduct>
                  <Brand>Brand: {detail.brand?.name}</Brand>
                  <Productcode>Product Code: {detail.sku}</Productcode>
                </BrandProduct>
              </Row>
              <Ratings>
                <Starbox>
                  <StarRating rating={detail.rating} />
                </Starbox>
                <RatingText>{`(${detail.rating}) 132 Ratings`}</RatingText>
              </Ratings>
              <Pricing>
                <Price>{`₦ ${detail.price}`}</Price>
                <Oldprice>{`₦ ${
                  detail.discount_price || detail.discounted_price
                }`}</Oldprice>
                <Discount>{`Save ${
                  detail.discount_percentage ?? calculatedDiscountPercentage
                }%`}</Discount>
              </Pricing>
              <PayMonthly>
                <AltPayButton>{`Pay ₦ 10,840/Month`}</AltPayButton>
                <p className="pay-text">with</p>
                <AltImage src={bankImg} alt={`AltPay Logo`} />
              </PayMonthly>

              <Row>
                <Col md={6}>
                  <Controller
                    control={control}
                    name="state"
                    render={({ field }) => (
                      <SelectInput
                        {...field}
                        label="Select Color"
                        error={errors?.state?.value?.message}
                        onChange={(e: any) => {
                          console.log(`selected item`, e.value);
                          const value = e.value;
                          handleFormChange('state', value);
                          field.onChange(e);
                        }}
                        options={colorVariation}
                      />
                    )}
                  />
                </Col>
                <Col md={6}>
                  <Controller
                    control={control}
                    name="state"
                    render={({ field }) => (
                      <SelectInput
                        {...field}
                        label="Select Size"
                        // error={errors?.state?.value?.message}
                        onChange={(e: any) => {
                          console.log(`selected item`, e.value);
                          const value = e.value;
                          handleFormChange('city', value);
                          field.onChange(e);
                        }}
                        options={sizeVariation}
                      />
                    )}
                  />
                </Col>
              </Row>
              <Row>
                <Quantityleft>Only {detail.quantity} left!</Quantityleft>
              </Row>
              <Row>
                <QuantityTitle>Quantity</QuantityTitle>
              </Row>
              <Row>
                <QuantityWrap>
                  <DecreaseButton onClick={() => handleQuantiy('dec')}>
                    -
                  </DecreaseButton>
                  <QuantityButton>{quantity}</QuantityButton>
                  <IncreaseButton onClick={() => handleQuantiy('inc')}>
                    +
                  </IncreaseButton>
                </QuantityWrap>
              </Row>
              <Row className="mt-4">
                <Col sm={4} md={6} lg={5}>
                  <BuynowBtn className="btn btn-outline-primary">
                    Buy Now &rarr;
                  </BuynowBtn>
                </Col>
                <Col sm={4} md={6} lg={5}>
                  <AddtoCartBtn
                    className="btn btn-primary"
                    onClick={() => addToCartHandler}
                  >
                    Add to Cart
                    <CartImg src={shoppingCart} alt={`image`} />
                  </AddtoCartBtn>
                </Col>
                <Col sm={4} lg={2}>
                  <ShareLinkbottom>
                    <ShareImg src={save} alt={`image`} />
                    <p className="share-text-bottom">Save</p>
                  </ShareLinkbottom>
                </Col>
              </Row>
            </Wrapper>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  /* object-fit: cover; */
`;

const ShareLink = styled(Link)`
  width: 30%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding-top: 1.5rem;
  margin-left: 1.5rem;

  p {
    font-size: 16px;
    font-weight: 400;
    padding: 10px;
  }
`;

export const CartImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
`;

const ShareImg = styled.img`
  width: 30px;
  height: 30px;
`;

const GroupImgs = styled.div`
  ${customMedia.greaterThan('medium')`
    justify-content: space-evenly;
    display: flex;
    width: 80%;
    padding: 1rem;
   `};

  ${customMedia.lessThan('medium')`
    justify-content: space-between;
    display: flex;
    width: 100%;
    padding: 1rem;
   `};
`;

export const AltPayButton = styled(Button)`
  width: 60%;
  height: 50px;
  color: white;
  background: ${p => p.theme.color.btnBackgroundBody};
  border: none;
  border-radius: 6px;
`;

const PayMonthly = styled.div`
  display: flex;
  margin-top: 1rem;
  height: 5rem;
  width: 250px;
  color: ${p => p.theme.color.colorText};

  .pay-text {
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 14px;
    margin-top: 25px;
    margin-left: 17px;
    color: ${p => p.theme.color.colorText};
  }
`;

const GpImg = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;

const SellerInfo = styled(Link)`
  padding-top: 9px;
  padding-bottom: 9px;
  font-size: 12px;
  font-weight: 700;
  color: linear-gradient(0.14deg, #9d5ea6 -24.1%, #ed2377 67.86%);
`;

const EllipseImg = styled.img`
  width: 15px;
  height: 15px;
  /* padding-bottom: 0.2rem; */
  /* margin-right: 14px; */
`;

const BrandProduct = styled.div`
  display: flex;
`;

const Brand = styled.p`
  color: #ed2377;
  font-size: 12px;
  font-weight: 400;
  margin-right: 10px;
`;

const Productcode = styled.p`
  color: ${p => p.theme.color.colorText};
  font-size: 12px;
  font-weight: 400;
`;

const Ratings = styled.div`
  display: flex;
`;

const Starbox = styled.div`
  display: flex;
  margin-top: 12px;
`;

const RatingText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
  justify-content: center;
  align-content: center;
  padding-top: 12px;
  margin-left: 10px;
`;

const Pricing = styled.div`
  display: flex;
  margin-top: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 1.5rem;
`;

const Price = styled.p`
  font-size: 1.8rem;
  margin-right: 0.8rem;
  font-weight: 700;
  color: ${p => p.theme.color.colorText};
  font-family: 'Nexa', sans-serif;
  font-style: normal;
`;

const Discount = styled.p`
  font-size: 10px;
  font-weight: 700;
  line-height: 13px;
  color: rgba(237, 93, 93, 1);
  font-style: normal;
  font-family: 'Nexa', sans-serif;
`;

const Oldprice = styled.p`
  font-style: normal;
  font-family: 'Nexa', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  color: #bdbcdb;
  margin-right: 0.8rem;
  word-spacing: 2px;
  letter-spacing: 1px;
  text-decoration: line-through;
`;

const AltImage = styled.img`
  height: 27px;
  width: 50px;
  margin-top: 20px;
  margin-left: 20px;
`;

const Quantityleft = styled.p`
  color: #de1c24;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  height: 19px;
  font-style: normal;
  font-family: 'Nexa', sans-serif;
`;

const QuantityTitle = styled.p`
  font-size: 17px;
  line-height: 25px;
  font-weight: normal;
  font-family: 'Nexa', sans-serif;
  font-style: normal;
  margin-top: 25px;
`;

const ButtonQty = styled.button`
  border: 0.5px solid grey;
  background-color: transparent;
  width: 42px;
  height: 42px;
  margin-top: 7px;
`;

const DecreaseButton = styled(ButtonQty)`
  border-radius: 5px 0px 0px 5px;
  border-right: none;
  font-size: 18px;
  color: ${p => p.theme.color.colorText};
`;

const QuantityButton = styled(ButtonQty)`
  font-size: 18px;
  color: ${p => p.theme.color.colorText};
`;

const IncreaseButton = styled(ButtonQty)`
  border-radius: 0px 5px 5px 0px;
  border-left: none;
  font-size: 18px;
  color: ${p => p.theme.color.colorText};
`;

const BuynowBtn = styled(Button)`
  height: 57px;
  width: 100%;
  border-radius: 5px;
  /* background-color: transparent; */
  border: 1px solid #c00ab5;
  margin-right: 25px;
  display: flex;
  color: ${p => p.theme.color.colorText};
  font-size: 19px;
  font-weight: normal;
`;

const AddtoCartBtn = styled(Button)`
  height: 57px;
  width: 100%;
  border-radius: 5px;
  background-color: #c00ab5;
  /* color: ${p => p.theme.color.colorText}; */
  color: #fff;
  border: none;
  font-size: 19px;
  font-weight: normal;
`;

const QuantityWrap = styled.div`
  padding-left: 1rem;
`;

const ShareLinkbottom = styled.div`
  cursor: pointer;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  .share-text-bottom {
    font-size: 16px;
    font-weight: 400;
    padding: 10px;
    cursor: pointer;
  }
`;
