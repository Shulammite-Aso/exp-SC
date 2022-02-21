import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Card, CardBody, CardTitle, Row } from 'reactstrap';
import Scrollbar from 'react-smooth-scrollbar';
import classnames from 'classnames';
import { cartSelector } from '../../../../CartPage/slice/selectors';
import { useCartSlice } from '../../../../CartPage/slice/index';
import { localStorageCartSelector } from '../../../../CartPage/slice/selectors';
import { authSelector } from '../../../../auth/slice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { H5 } from 'app/components/Typography/H5/H5';
import { StyleConstants } from 'styles/StyleConstants';
import { Link } from 'react-router-dom';
import { Button } from 'app/components/Button/Button';
import { RadioIcon } from '../RadioIcon';

interface Props {}

interface ISummaryProduct {
  payload: IProduct;
}
interface IProduct {
  images: string;
  name: string;
  price: string;
  seller: string;
  unitPrice: number;
  discount_price?: number;
  inStock: boolean;
  id: string;
  qty: string;
}

export const Summary = memo((props: Props) => {
  const [logistics, setLogistics] = useState('redstart');
  const [summaryProducts, setSummaryProducts] = useState<ISummaryProduct[]>([]);
  const dispatch = useDispatch();
  const { actions } = useCartSlice();
  const cartProducts = useSelector(cartSelector);
  const isUserLoggedIn = useSelector(authSelector);
  const productsInLocalStorageCart = useSelector(localStorageCartSelector);

  useEffect(() => {
    // console.log(cartProducts);
    if (isUserLoggedIn) {
      dispatch(actions.getItemsInCart());
    }
  }, [dispatch, actions, cartProducts, isUserLoggedIn]);

  useEffect(() => {
    if (isUserLoggedIn) {
      setSummaryProducts(cartProducts);
    } else {
      setSummaryProducts(productsInLocalStorageCart);
    }
    // console.log(summaryProducts);
  }, [
    cartProducts,
    isUserLoggedIn,
    productsInLocalStorageCart,
    summaryProducts,
  ]);
  console.log(summaryProducts);
  // total price
  let totalOrderPrice = summaryProducts.reduce(function (prev, current) {
    return prev + Number(current.payload.price);
  }, 0);
  console.log(totalOrderPrice);

  const shippingPrice = 1500;
  let totalPrice = totalOrderPrice + shippingPrice;
  return (
    <Row>
      <SummaryCard>
        <SummaryHeading>
          <SummaryTitle>
            Order Summary ({summaryProducts?.length} Items)
          </SummaryTitle>
        </SummaryHeading>
        <CardBody>
          <ProductScroll>
            {summaryProducts.map(product => (
              <ProductCard key={product.payload?.id}>
                <ProductImgWrap>
                  <ProductImg
                    src={product.payload?.images[0]}
                    alt={product.payload?.name}
                  />
                </ProductImgWrap>
                <ProductTextWrap>
                  <ProductName>{product.payload?.name}</ProductName>
                  <ProductPrice>
                    <strong>
                      {product.payload?.discount_price
                        ? product.payload?.discount_price
                        : product.payload?.price}
                    </strong>
                  </ProductPrice>
                  <ProductQty>Qty {product.payload?.qty}</ProductQty>
                </ProductTextWrap>
              </ProductCard>
            ))}
          </ProductScroll>
          <ProductFooter>
            <FooterTextRow>
              <FooterText>
                Sub Total ({summaryProducts.length} items)
              </FooterText>
              <FooterText>N {totalOrderPrice}</FooterText>
            </FooterTextRow>
            <LogisticWrap>
              <FooterTextBold>
                Select a Delivery Agency of your choice
              </FooterTextBold>
              <FooterTextRow onClick={() => setLogistics('redstart')}>
                <FooterText className="logistic-option">
                  <RadioIcon
                    className={classnames({
                      active: logistics === 'redstart',
                    })}
                  />{' '}
                  Redstar
                </FooterText>
                <FooterText>N {shippingPrice}</FooterText>
              </FooterTextRow>
              <FooterTextRow onClick={() => setLogistics('fedex')}>
                <FooterText className="logistic-option">
                  <RadioIcon
                    className={classnames({
                      active: logistics === 'fedex',
                    })}
                  />{' '}
                  FedEx
                </FooterText>
                <FooterText>N {shippingPrice}</FooterText>
              </FooterTextRow>
            </LogisticWrap>
            <FooterTextRow>
              <FooterText>Total: </FooterText>
              <FooterTextBold>N {totalPrice}</FooterTextBold>
            </FooterTextRow>
            <LinkBtn to="/cart" as={Link} className="btn btn-outline-primary">
              Return to Cart
            </LinkBtn>
          </ProductFooter>
        </CardBody>
      </SummaryCard>
    </Row>
  );
});

const SummaryCard = styled(Card)`
  background-color: ${p => p.theme.color.colorBackground};
  padding-top: 25px;
  padding-bottom: 25px;
`;

const SummaryHeading = styled(CardTitle)`
  color: ${p => p.theme.color.colorText};
`;
const SummaryTitle = styled(H5)`
  color: ${p => p.theme.color.colorText};
  font-weight: 700;
  font-size: 16px;
  margin-left: 1rem;
`;
const ProductScroll = styled(Scrollbar)`
  width: 100%;
  & > div {
    height: 300px;
    text-align: start;
    padding: 0 10px;
  }

  .scrollbar-track {
    &.scrollbar-track-y {
      width: 2px;
      ${p => p.theme.direction['margin-right']}: 3px;
    }

    &.scrollbar-track-x {
      display: none !important;
    }
  }

  .scrollbar-thumb {
    opacity: 0.3;
    width: 5px;
  }
`;

const ProductCard = styled.div`
  height: 70px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
  /* box-shadow: ${p => p.theme.shadow.blocksShadows}; */
`;
const ProductImgWrap = styled.div`
  max-width: 75px;
  max-height: 60px;
`;
const ProductImg = styled.img`
  width: 100%;
  height: auto;
`;
const ProductTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
`;
const ProductName = styled.p`
  color: ${p => p.theme.color.colorText};
`;
const ProductPrice = styled.p`
  color: ${StyleConstants.COLOR_ACCENT};
  font-weight: 700;
`;
const ProductQty = styled.small`
  color: ${StyleConstants.COLOR_LIGHT_GRAY};
`;
const ProductFooter = styled.div`
  margin-top: 30px;
`;

const LinkBtn = styled(Button)`
  display: block;
  width: 100%;
  margin-bottom: unset;
`;

const FooterTextRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.logistic-option:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const FooterTextBold = styled(FooterText)`
  font-weight: 700;
`;

const LogisticWrap = styled.div`
  background-color: ${p => p.theme.color.inputColor};
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  p {
    color: ${StyleConstants.COLOR_BLACK};
  }
`;
