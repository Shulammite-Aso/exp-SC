import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import seeDetails from './assets/eye_icon.svg';
import addToWishlist from './assets/love_icon.svg';
import addToCart from './assets/cart_icon.svg';
import { useCartSlice } from 'app/pages/CartPage/slice/index';
import { useWishlistSlice } from 'app/pages/WishlistPage/slice/index';
import { authSelector } from '../../pages/auth/slice/selectors';
import { customMedia } from 'styles/media';
import { useProductSlice } from 'app/pages/product/slice';
import { TopDealProductProps } from 'app/pages/DealsPage/slice/types';

interface ProductCardProps {
  product: TopDealProductProps;
}
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartActions = useCartSlice();
  const wishlistActions = useWishlistSlice();
  const [showActionIcons, SetShowActionIcons] = useState(false);
  const isUserLoggedIn = useSelector(authSelector);

  // const percentageOff =
  //   ((parseInt(product.price) - parseInt(product.discountPrice)) /
  //     parseInt(product.price)) *
  //   100;
  const { actions } = useProductSlice();

  const handleProductDetails = () => {
    dispatch(actions.getProduct({ id: product.id, history }));
  };

  const handleAddToCart = (size?: string, color?: string) => {
    let { actions } = cartActions;
    const requestPayload = {
      product: product.id,
      quantity: 1,
      size: size || 'n/a',
      color: color || 'n/a',
      price: product.discount?.price || product.price,
    };

    const data = { requestPayload };

    dispatch(actions.addtoCart(data));
  };

  const handleAddToWishlist = () => {
    let { actions } = wishlistActions;
    const requestPayload = {
      product: product.id,
    };

    const data = { requestPayload };

    dispatch(actions.addToWishlist(data));
  };

  return (
    <Card
      key={product.id}
      onMouseOver={() => SetShowActionIcons(true)}
      onMouseOut={() => SetShowActionIcons(false)}
    >
      <ImageSection>
        <img
          src={product.primary_image}
          id="product_image"
          alt={product.name}
        />
        <ActionIcons id={showActionIcons ? 'make_visible' : undefined}>
          <img
            src={seeDetails}
            onClick={handleProductDetails}
            alt="see details"
          />
          <img
            src={addToWishlist}
            onClick={handleAddToWishlist}
            alt="add to wishlist"
          />
          <img
            src={addToCart}
            onClick={() => handleAddToCart()}
            alt="add to cart"
          />
        </ActionIcons>
      </ImageSection>
      <TextSection>
        <p className="product_name">{product.name}</p>
        {product.discount ? (
          <>
            <p className="product_discount_price">
              <span>&#8358; </span>
              {product.discount?.price}
              <span className="discount_percent">
                {`${product.discount_percentage} % off`}
              </span>
            </p>
            <p className="cancelled_price">
              <span>&#8358; </span>
              {product.price}
            </p>
          </>
        ) : (
          <p className="product_price">
            <span>&#8358; </span>
            {product.price}
          </p>
        )}
      </TextSection>
    </Card>
  );
};

const Card = styled.div`
  padding: 0.5rem;
  ${customMedia.lessThan('medium')`
  `}
`;

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  #product_image {
    border-radius: 20px;
    max-width: 100%;
    max-height: 248px;
  }
`;

const ActionIcons = styled.div`
  display: none;
  img {
    cursor: pointer;
    width: 30px;
    height: 28px;
    margin-bottom: 6px;
    ${customMedia.lessThan('medium')`
      width: 20px;
      height: 18px;
    `}
  }

  &#make_visible {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 6px;
    left: 10px;
  }
`;

const TextSection = styled.div`
  padding: 0.7rem 0;
  padding-left: 0.8rem;
  p {
    color: ${p => p.theme.color.colorTextBlack};
    font-size: 17px;
    line-height: 140%;
  }
  .product_name {
    margin-bottom: 0.5rem;
    ${customMedia.lessThan('small')`
      font-size: 13px;
    `}
  }
  /* 
  .product_price{
    font-size: 20px;
  } */

  .product_discount_price {
    color: #ed5d5d;
    font-size: 18px;
    line-height: 120%;
    margin-bottom: 0.1rem;
    ${customMedia.lessThan('medium')`
      font-size: 17px;
    `}
    ${customMedia.lessThan('small')`
      font-size: 14px;
    `}
    .discount_percent {
      font-size: 14px;
      line-height: 130%;
      ${customMedia.lessThan('small')`
      font-size: 12px;
    `}
    }
  }

  .cancelled_price {
    color: #bdbcdb;
    font-weight: bold;
    font-size: 16px;
    line-height: 140%;
    text-decoration: line-through;
    ${customMedia.lessThan('medium')`
      font-size: 15px;
    `}
    ${customMedia.lessThan('small')`
      font-size: 12px;
    `}
  }
`;
