/**
 *
 * Cards
 *
 */
import * as React from 'react';
// import { useState } from 'react';
import styled from 'styled-components/macro';
import { H5 } from 'app/components/Typography/H5/H5';
import CreditCard from './CreditCard';

interface Data {
  title: string;
  desc: string;
  image: string;
}

interface Props {
  cards: Data[];
  activeTab: number;
}

export function Cards({
  cards,
  activeTab,
}: // handlePaymentMethod,
Props): JSX.Element {
  const activeItem = cards[activeTab];

  return (
    <Wrapper>
      <H5>{activeItem.title}</H5>
      <img src={activeItem.image} alt="empty state" />
      <p>{activeItem.desc}</p>
      <AddCardBtn className="btn primary-btn">
        <CreditCard form="Add a new Card" buttonAction={activeItem.title} />
      </AddCardBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 589px;
  margin-top: 25px;
  width: 638px;

  margin: 0 auto;
  display: block;
  background-color: #fcfcff;
  border-radius: 30px;
  align-items: center;

  ${H5} {
    padding-top: 90px !important;
    font-weight: 700;
    color: ${p => p.theme.color.colorText};
    line-height: 19px;
    font-size: 16px;
    text-align: center;
  }

  img {
    width: 108px;
    height: 88.17px;
    justify-content: center;
    align-content: center;
    margin: 64px 265px;
  }

  p {
    justify-content: center;
    text-align: center;
    margin: auto 90px;
    font-size: 14px;
    line-height: 18px;
    color: ${p => p.theme.color.colorText};
    font-weight: 400;
  }

  button {
    .btn .primary-btn {
      height: 50px;
      width: 214px;
      border-radius: 5px;
      background-color: transparent;
      border: 1px solid #c00ab5;
      /* margin-right: 25px; */
      color: #c00ab5;
      margin: 70px 230px !important;
      font-size: 16px;
      font-weight: normal;
      line-height: 20px;
      text-decoration: none;
      list-style: none;
    }

    .btn-text {
      list-style: none;
    }
  }
`;

const AddCardBtn = styled.div``;
