import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import remove from '../../assets/delete 2.svg';
import { Button } from 'app/components/Button/Button';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

interface Prop {
  product: any;
  // {
  //   image: string;
  //   name: string;
  //   price: string;
  //   id: string;
  // };
  key: number;
  handleDeleteFromWishlist: any;
}

export function ItemCard({ product, key, handleDeleteFromWishlist }: Prop) {
  const { t } = useTranslation();

  const mql = window.matchMedia('(max-width: 768px)');
  const mobileDevice = mql.matches;

  return (
    <Card>
      {mobileDevice ? (
        <>
          <Left>
            <img src={product.product.images[0]} alt={product.product.name} />
          </Left>
          <Right>
            <div>
              <p>{product.product.name}</p>
              <p className="price">{product.product.price}</p>
            </div>
            <ActionButtons>
              <ToCartButton className="btn btn-primary">
                {t(...messages.firstBtn())}
              </ToCartButton>
              <img className="remove_" src={remove} alt="remove from list" />
            </ActionButtons>
          </Right>
        </>
      ) : (
        <>
          <Left>
            <img src={product.product.images[0]} alt={product.product.name} />
            <div>
              <p>{product.product.name}</p>
              <p className="price">{product.product.price}</p>
            </div>
          </Left>
          <Right>
            <ToCartButton className="btn btn-primary">
              {t(...messages.firstBtn())}
            </ToCartButton>
            <DeleteButton onClick={() => handleDeleteFromWishlist(product)}>
              {t(...messages.secondBtn())}
            </DeleteButton>
          </Right>
        </>
      )}
    </Card>
  );
}

const Card = styled.div`
  border: 1px solid #bdbcdb;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 4px;
  ${customMedia.greaterThan('medium')`
  margin: 1rem;
  padding: 1.5rem 1.5rem 1.5rem 1rem;
  `};
`;

const ActionButtons = styled.div`
  display: flex;

  .remove_ {
    height: 53px;
    width: 38px;

    padding: 0.3rem;
    box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
    margin-bottom: 9px;
  }
`;

const ToCartButton = styled(Button)`
  height: 54px;
  width: 140px;

  ${customMedia.lessThan('medium')`
  height: 44px;
  width: 135px;
    `};
`;

const DeleteButton = styled(Button)`
  border: none;
  color: ${p => p.theme.color.colorText};
  background-color: ${p => p.theme.color.colorBackground};
  height: 54px;
  width: 140px;

  ${customMedia.lessThan('medium')`
  box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
    `};
`;

const Left = styled.div`
  div p {
    color: ${p => p.theme.color.colorTextBold};
  }

  width: 42%;

  .price {
    font-weight: bold;
    font-size: 20px;
    line-height: 120%;
    margin-top: 1rem;
  }
  img {
    width: 94%;
    margin-right: 1rem;
  }

  ${customMedia.greaterThan('medium')`
  display: flex;
  width: 40%;
  img {
    width: 196.06px;
    height: 153px;
    margin-right: 1rem;
  }
  `};
`;

const Right = styled.div`
  div p {
    color: ${p => p.theme.color.colorTextBold};
  }

  .price {
    font-weight: bold;
    font-size: 20px;
    line-height: 120%;
    margin: 1rem 0;
  }
  img {
    width: 196.06px;
    height: 153px;
  }

  ${customMedia.greaterThan('medium')`
display: flex;
padding: 2rem 0;
  `};
`;
