import React from 'react';
import styled from 'styled-components/macro';
import plusImg from './assets/plusButton.png';
import cardbaseImg from './assets/bareCard.png';

interface Props {
  //   cardInfo: string;
  //   cardImg: string;
  //   imgUrl: string;
  //   cardName: string;
  // //   children: JSX.Element;
  //   showCardForm: any;
}

export default function PaymentCard(props: Props) {
  return (
    <Card
      //   onClick={() => {
      //     showCardForm(cardInfo);
      //   }}
      src={cardbaseImg}
      alt="card image"
    >
      <div>
        <img src={plusImg} alt="plus sign" />
        <p>Add a debit card</p>
      </div>
    </Card>
  );
}

const Card = styled.img`
  cursor: pointer;
  width: 203px;
  height: 136px;
  padding: 3rem 0;
  position: relative;

  div {
    display: flex;
    position: absolute;

    img {
      width: 22px;
    }

    p {
      font-size: 11px;
      font-weight: 400;
      line-height: 15px;
    }
  }
`;
