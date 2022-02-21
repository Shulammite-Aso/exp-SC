/**
 *
 * PaymentMethods
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/Sidebar';
import { Cards } from './components/Cards/Loadable';
import { useState } from 'react';
import { ComingSoon } from 'app/components/ComingSoon';
import margentaCardImg from './assets/resized.png';
import blackCardImg from './assets/blackBareCard.png';
import emptyCard from './assets/emptyCard.png';
import emptyWallet from './assets/emptyWallet.png';
import { H3 } from 'app/components/Typography/H3/H3';
import { H5 } from 'app/components/Typography/H5/H5';
// import { Row, Col } from 'reactstrap';

interface Props {}

export function PaymentMethods(props: Props) {
  const [active, setActive] = useState(0);

  const cards = [
    {
      title: 'You have no debit/credit card saved',
      image: emptyCard,
      desc:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },
    {
      title: 'You have no Gift card saved',
      image: emptyCard,
      desc:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },
    {
      title: 'You have no Altpay card saved',
      image: emptyCard,
      desc:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },
    {
      title: 'You have no Wallet Account',
      image: emptyWallet,
      desc:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Payment Methods </title>
        <meta name="description" content="A AltMall Payment Methods" />
      </Helmet>
      <Wrapper>
        <ComingSoon />
        {/* <Row> */}
        {/* <Col md={3}> */}
        <Sidebar />
        {/* </Col> */}
        {/* <Col md={9}> */}
        <PaymentWrap>
          <Title className="payment-title">Payment Methods</Title>
          <PaymentCardWrapper>
            <PaymentCard onClick={() => setActive(0)}>
              <H5>Credit or Debit Card</H5>
              <Image
                className="colored-card"
                src={margentaCardImg}
                alt="card image"
              />
              <div>
                <p>Saved Debit/ Credit Cards</p>
              </div>
            </PaymentCard>
            <PaymentCard onClick={() => setActive(1)}>
              <H5>Gift Card</H5>
              <Image src={blackCardImg} alt="card image" />
              <div>
                <p>Saved Gift Cards</p>
              </div>
            </PaymentCard>
            <PaymentCard onClick={() => setActive(2)}>
              <H5>Altpay Card</H5>
              <Image src={margentaCardImg} alt="card image" />
              <div>
                <p>Saved Altpay Cards</p>
              </div>
            </PaymentCard>
            <PaymentCard onClick={() => setActive(3)}>
              <H5>Wallet</H5>
              <Image src={blackCardImg} alt="card image" />
              <div>
                <p>Wallet</p>
              </div>
            </PaymentCard>
          </PaymentCardWrapper>
          <Cards
            cards={cards}
            activeTab={active}
            // handlePaymentMethod={handlePaymentMethod}
          />
        </PaymentWrap>
        {/* </Col> */}
        {/* </Row> */}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 120px 19px;
`;

const PaymentWrap = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-left: 80px;
  /* border: 1px solid black; */
`;

const Title = styled(H3)`
  text-align: center;
  font-weight: bold;
  color: ${p => p.theme.color.colorText};
  margin-bottom: 100px;
`;

const PaymentCardWrapper = styled.div`
  width: 100%;
  height: 178px;
  display: flex;
  margin-bottom: 55px;
  margin-left: 20px;
`;

const Image = styled.img`
  position: absolute;
  min-width: 230px;
  height: 146px;
  background-repeat: no-repeat;
  border-radius: 15px;
  /* margin: 8px; */

  & .colored-card {
    border-radius: 5px;
    background-color: #40033c;
  }
`;

const PaymentCard = styled.div`
  flex: 1;
  cursor: pointer;
  width: 100%;
  height: 200px;
  margin-right: 8px;
  position: relative;

  ${H5} {
    margin: 16px;
    font-weight: 700;
  }

  div {
    /* display: flex; */
    position: absolute;
    top: 57px;
    left: 50px;

    p {
      font-size: 11px;
      /* width:134px; */
      width: 100%;
      font-weight: 400;
      line-height: 15px;
      align-items: center;
      justify-content: center;
      text-align: center;
      /* padding-top: 56px auto; */
      padding-top: 53px;
      color: #fff;
    }
  }
`;
