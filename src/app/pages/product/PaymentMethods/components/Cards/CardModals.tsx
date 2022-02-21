import React from 'react';
import styled from 'styled-components/macro';
import { Button } from 'app/components/Button/Button';
import { customMedia } from 'styles/media';
import { H3 } from 'app/components/Typography/H3/H3';
import { Col, Row } from 'reactstrap';
import { useHistory } from 'react-router-dom';

export function CreditCardModal() {
  let history = useHistory();

  const redirect = () => {
    history.push('/order/:cards/creditcard');
  };

  return (
    <Container>
      <Card>
        <div className="sentCode">
          <H3>Enter Credit Card Information</H3>
        </div>
        <form action="">
          {/* <input placeholder="Enter Verification Code" type="text" /> */}
          <Row>
            <Col md={6}>
              {/* <TextInput label="First Name" /> */}
              <input placeholder="First Name" type="text" />
            </Col>
            <Col md={6}>
              {/* <TextInput label="Last Name" /> */}
              <input placeholder="Last Name" type="text" />
            </Col>
          </Row>
          {/* <TextInput label="Card Number" /> */}
          <Row>
            <Col md={12}>
              <input placeholder="Card Number" type="text" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {/* <TextInput label="First Name" /> */}
              <input placeholder="Expiry Date (MM/YY)" type="text" />
            </Col>
            <Col md={6}>
              {/* <TextInput label="Last Name" /> */}
              <input placeholder="CVV (3 digits)" type="text" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <input
                className="col-input"
                placeholder="Postal Code"
                type="text"
              />
            </Col>
          </Row>
          <div className="button_container">
            <ActionButtons>
              <CancelButton>Cancel</CancelButton>
              <PrimaryActionButton
                onClick={redirect}
                className="btn btn-primary"
              >
                Save
              </PrimaryActionButton>
            </ActionButtons>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export function GiftCardModal() {
  let history = useHistory();

  //   makeshift route
  const redirect = () => {
    history.push('/order/:cards/creditcard');
  };

  return (
    <Container>
      <Card>
        <div className="sentCode">
          <H3>Enter Gift Card Information</H3>
        </div>
        <form action="">
          <Row>
            <Col md={12}>
              <input placeholder="Gift vCard Number" type="text" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {/* <TextInput label="First Name" /> */}
              <input placeholder="Pin/Security Code" type="text" />
            </Col>
            <Col md={6}>
              {/* <TextInput label="Last Name" /> */}
              <input placeholder="Gift Card Nickname" type="text" />
            </Col>
          </Row>
          <div className="button_container">
            <ActionButtons>
              <CancelButton>Cancel</CancelButton>
              <PrimaryActionButton
                onClick={redirect}
                className="btn btn-primary"
              >
                Save
              </PrimaryActionButton>
            </ActionButtons>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export function WalletModal() {
  let history = useHistory();

  //   makeshift route
  //   const redirect = () => {
  //     history.push('/order/:cards/creditcard');
  //   };

  const createwalletpage = () => {
    history.push('/account/wallet');
  };

  return (
    <Container>
      <Card>
        <form action="">
          <Row>
            <Col md={12}>
              <input placeholder="First Name" type="text" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <input placeholder="Last Name" type="text" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <input placeholder="Email" type="text" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <input placeholder="Date of Birth" type="text" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <input placeholder="Phone" type="text" />
            </Col>
          </Row>

          <div className="button_container">
            <ActionButtons>
              <CancelButton>Cancel</CancelButton>
              <PrimaryActionButton
                onClick={createwalletpage}
                className="btn btn-primary"
              >
                Save
              </PrimaryActionButton>
            </ActionButtons>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export function AltPayModal() {
  let history = useHistory();

  const redirect = () => {
    history.push('/order/:cards/creditcard');
  };

  return (
    <Container>
      <Card>
        <div className="sentCode">
          <H3>Enter Card Information</H3>
        </div>
        <form action="">
          {/* <input placeholder="Enter Verification Code" type="text" /> */}
          <Row>
            <Col md={6}>
              {/* <TextInput label="First Name" /> */}
              <input placeholder="First Name" type="text" />
            </Col>
            <Col md={6}>
              {/* <TextInput label="Last Name" /> */}
              <input placeholder="Last Name" type="text" />
            </Col>
          </Row>
          {/* <TextInput label="Card Number" /> */}
          <Row>
            <Col md={12}>
              <input placeholder="Card Number" type="text" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {/* <TextInput label="First Name" /> */}
              <input placeholder="Expiry Date (MM/YY)" type="text" />
            </Col>
            <Col md={6}>
              {/* <TextInput label="Last Name" /> */}
              <input placeholder="CVV (3 digits)" type="text" />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <input
                className="col-input"
                placeholder="Postal Code"
                type="text"
              />
            </Col>
          </Row>
          <div className="button_container">
            <ActionButtons>
              <CancelButton>Cancel</CancelButton>
              <PrimaryActionButton
                onClick={redirect}
                className="btn btn-primary"
              >
                Save
              </PrimaryActionButton>
            </ActionButtons>
          </div>
        </form>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 50;
`;

const Card = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  border-radius: 20px;
  text-align: center;
  width: 80%;
  max-width: 560px;
  margin: 8.5rem auto;
  padding: 0.5rem 3rem;
  position: relative;

  ${customMedia.lessThan('small')`
  
  padding: 3rem 0.8rem;
  `};

  .cancel_icon {
    cursor: pointer;
    width: 25px;
    position: absolute;
    right: 17px;
    top: 15px;
  }

  .logo {
    width: 88px;
  }

  .sentCode {
    margin-top: 3rem;
    p {
      color: ${p => p.theme.color.colorTextBold};
      font-size: 14px;
      line-height: 130%;
    }
  }

  form {
    padding: 2rem 0 3rem 0;
    input {
      background: #f7f7fd;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
      border: none;
      //display: inline-block;
      margin-bottom: 1rem;
      outline: none;
      padding: 1.1rem 0.7rem;
      width: 100%;
    }

    .didntGetCode {
      display: inline-block;
      text-align: left;

      p {
        color: ${p => p.theme.color.colorTextBold};
        font-size: 14px;
        line-height: 130%;
      }

      span {
        color: #c00ab5;
        font-size: 14px;
        line-height: 130%;
      }
    }

    .hide_or_show {
      background: #f7f7fd;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      display: inline-block;
      padding: 0.91rem 0.7rem;
      cursor: pointer;
    }

    .button_container {
      // display: inline-block;
    }
  }

  a {
    color: ${p => p.theme.color.colorTextBold};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: flex-end;
`;

const PrimaryActionButton = styled(Button)`
  display: inline-block;
  height: 44px;
  margin: 0;
  margin-left: 1rem;

  //width: 80px;
`;

const CancelButton = styled(Button)`
  display: inline-block;
  //margin: 8px 0;
  border: none;
  color: ${p => p.theme.color.colorTextBold};
  background-color: ${p => p.theme.color.colorBackground};
  height: 44px;
  margin: 0;
  // width: 140px;
`;
