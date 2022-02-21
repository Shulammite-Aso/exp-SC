import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import shoppingCart from '../../../assets/shopping cart.png';
import { H4 } from 'app/components/Typography/H4/H4';
import { Button } from '../../../../components/Button/Button';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

export default function EmptyHistory() {
  const { t } = useTranslation();

  return (
    <Card>
      <Heading>{t(...messages.title())}</Heading>
      <img src={shoppingCart} alt="shopping Cart" />
      <p className="description">{t(...messages.description())}</p>
      <div>
        <p className="place_order">{t(...messages.replyTo())}</p>
        <Button>{t(...messages.startShopping())}</Button>
      </div>
    </Card>
  );
}

const Card = styled.div`
  color: ${p => p.theme.color.colorTextBold};
  text-align: center;
  background-color: ${p => p.theme.color.colorEmptyStateBackground};
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
  margin: 3rem auto;
  padding: 5rem;
  width: 638px;

  img {
    margin: 2rem 0;
    width: 155.83px;
  }

  p {
    font-size: 14px;
  }

  .description {
    color: ${p => p.theme.color.colorTextBold};
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    ${customMedia.lessThan('medium')`
    display: block;
    .place_order {
      margin-bottom: 10px;
    }
  `};
  }

  ${customMedia.lessThan('medium')`
    width: 90%;
    margin: 0 1rem;
    padding: 1rem;

    img {
      margin: 2rem 0;
      width: 67.83px;
    }
  `};
`;

const Heading = styled(H4)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bold;
`;
