import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { ItemCard } from './ItemCard';
import EmptyCart from './EmptyCart';
import { H3 } from 'app/components/Typography/H3/H3';
import { Button } from 'app/components/Button/Button';
import { useCartSlice } from '../../slice/index';
import { cartSelector } from '../../slice/selectors';
import { localStorageCartSelector } from '../../slice/selectors';
import { cartIdSelector } from '../../slice/selectors';
import { authSelector } from '../../../auth/slice/selectors';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const cartProducts = useSelector(cartSelector);
  const productsInLocalStorageCart = useSelector(localStorageCartSelector);
  const cartID = useSelector(cartIdSelector);
  const { actions } = useCartSlice();
  const isUserLoggedIn = useSelector(authSelector);

  interface Product {
    image: string;
    name: string;
    seller: string;
    unitPrice: number;
    discount_price?: number;
    inStock: boolean;
    id: string;
  }

  const [productsToDisplay, setProductsToDisplay] = useState<Product[]>([]);

  useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(actions.getItemsInCart());
      console.log('returned items:', cartProducts);
    }
  }, [dispatch, actions, cartProducts, isUserLoggedIn]);

  useEffect(() => {
    console.log('returned items two:', cartProducts);
    if (isUserLoggedIn) {
      setProductsToDisplay(cartProducts);
    } else {
      setProductsToDisplay(productsInLocalStorageCart);
    }
  }, [cartProducts, isUserLoggedIn, productsInLocalStorageCart]);

  const handleDeleteFromCart = product => {
    dispatch(actions.removeItemFromCart(product.product._id));
    dispatch(actions.getItemsInCart());
  };

  const deleteCartInstance = () => {
    dispatch(actions.removeAllItemFromCart(cartID));
  };

  return (
    <Container>
      <PageHeadingsContainer>
        <Left>
          <Heading>{t(...messages.title())}</Heading>
          <p>{productsToDisplay.length + ' items'}</p>
        </Left>
        <Section>
          <p>{t(...messages.quantity())}</p>
        </Section>
        <Section>
          <p>{t(...messages.unitPrice())}</p>
        </Section>
        <Section>
          <p>{t(...messages.subTotal())}</p>
        </Section>
      </PageHeadingsContainer>
      {productsToDisplay.length !== 0 ? (
        <>
          {productsToDisplay.map(product => (
            <ItemCard
              product={product}
              handleDeleteFromCart={handleDeleteFromCart}
              key={parseInt(product.id)}
            />
          ))}
          <TotalAndActionBtns>
            <Total>
              <p>
                <span className="text">{t(...messages.total())} </span>
                <span className="amount">
                  <span>&#8358; </span>11,000
                </span>
              </p>
            </Total>
            <Disclaimer>{t(...messages.disclaimer())}</Disclaimer>
            <ActionButtons>
              <button
                className="remove_all_from_cart"
                onClick={deleteCartInstance}
              >
                Empty Cart
              </button>
              <ContinueShoppingButton className="btn btn-outline-primary">
                {t(...messages.firstBtn())}
              </ContinueShoppingButton>
              <CheckoutButton
                as={Link}
                to="/order/checkout"
                className="btn btn-primary"
              >
                {t(...messages.secondBtn())}
              </CheckoutButton>
            </ActionButtons>
          </TotalAndActionBtns>
        </>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
}

const Container = styled.div`
  margin: 3rem auto;

  ${customMedia.greaterThan('mediumplus')`
  max-width: 1240px;
  `};
`;

const PageHeadingsContainer = styled.div`
  ${customMedia.greaterThan('mediumplus')`
display: flex;
  `};

  margin: 1rem;
  padding: 1rem;
`;

const Left = styled.div`
  ${customMedia.greaterThan('mediumplus')`
width: 40%;
  `};
`;

const Section = styled.div`
  ${customMedia.lessThan('mediumplus')`
display: none;
  `};

  margin: auto;

  p {
    //font-weight: bold;
    font-size: 18px;
    line-height: 120%;
  }
`;

const Heading = styled(H3)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const TotalAndActionBtns = styled.div`
  text-align: right;
  padding: 1rem 2rem;

  ${customMedia.lessThan('small')`
  text-align: center;
  `};
`;

const Total = styled.div`
  text-align: right;
  ${customMedia.lessThan('small')`
  text-align: center;
  `};

  .text {
    color: ${p => p.theme.color.colorTextBlack};
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    ${p => p.theme.direction['margin-right']}: 1rem;
  }

  .amount {
    color: #c00ab5;
    font-weight: bold;
    font-size: 32px;
    line-height: 120%;
  }
`;

const Disclaimer = styled.p`
  color: ${p => p.theme.color.colorTextLightGray};
  font-size: 18px;
  line-height: 140%;
  padding: 1rem 0.5rem;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  .remove_all_from_cart {
    background-color: ${p => p.theme.color.colorBackground} !important;
    display: inline-block;
    border: none;
    color: #f93232;
    margin-right: 2rem;
    padding: 0 1rem;
  }
`;

const ContinueShoppingButton = styled(Button)`
  height: 58px;
  margin: 0;
  ${customMedia.lessThan('small')`
  width: 80%;
  margin-bottom: 0.8rem;
  `};
`;

const CheckoutButton = styled(Button)`
  height: 58px;
  margin: 0;
  ${p => p.theme.direction['margin-left']}: 1rem;

  ${customMedia.lessThan('small')`
  width: 80%;
  //${p => p.theme.direction['margin-left']}: 10%;
  `};
`;
