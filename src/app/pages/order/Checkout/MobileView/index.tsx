import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { Col, Container, Row } from 'reactstrap';
import { customMedia } from 'styles/media';
import { StyleConstants } from 'styles/StyleConstants';
import { PageTitle } from 'app/components/Typography/PageTitle/PageTitle';
import { H5 } from 'app/components/Typography/H5/H5';
import { ReactComponent as Done } from '../assets/Success.svg';
import { ReactComponent as NotDone } from '../assets/Success_disabled.svg';
import { DeliveryMethod } from '../components/DeliveryMethod';
import { Address, ShippingAddress } from '../components/ShippingAddress';
import { Summary } from '../components/Summary';
import { PaymentMethod } from '../components/PaymentMethod';
import { Confirmation } from '../components/Confirmation/Confirmation';
import classnames from 'classnames';
interface Props {}

export const MobileView = memo((props: Props) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState(
    {
      method: 'Door',
      value: `Delivery will take plce between Tues 7 Sept and Fri 10 Sept for N2,000`,
    } || null,
  );
  const [paymentMethod, setPaymentMethod] = useState(
    { method: '', value: '' } || null,
  );
  const [shippingAddress, setShippingAddress] = useState<Address>({
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    state: '',
    city: '',
  });
  const [currentDiv, setCurrentDiv] = useState(1);

  const handleDeliveryMethod = (info: { method: string; value: string }) => {
    console.log(info);
    setDeliveryMethod(info);
  };

  const handlePaymentMethod = (info: { method: string; value: string }) => {
    console.log(info);
    setPaymentMethod(info);
    setShowConfirmation(prevState => !prevState);
  };

  const handleShippingSubmit = (key: string, value: string) => {
    setShippingAddress({ ...shippingAddress, [key]: value });
  };

  const handleAddressSelect = (address: Address) => {
    setShippingAddress(address);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <DivTitle>
            {currentDiv === 1 && 'Checkout'}
            {currentDiv === 2 && 'Summary'}
            {currentDiv === 3 && 'Payment'}
          </DivTitle>
        </Col>
      </Row>
      <TabWrap>
        <TabNav
          onClick={() => {
            setCurrentDiv(1);
          }}
          className={classnames({ active: currentDiv === 1 })}
        >
          Delivery
        </TabNav>
        <TabNav
          onClick={() => {
            setCurrentDiv(2);
          }}
          className={classnames({ active: currentDiv === 2 })}
        >
          Payment
        </TabNav>
        <TabNav
          onClick={() => setCurrentDiv(3)}
          className={classnames({ active: currentDiv === 3 })}
        >
          Summary
        </TabNav>
      </TabWrap>

      <Row>
        {showConfirmation ? (
          <Confirmation
            deliveryMethod={deliveryMethod}
            paymentMethod={paymentMethod}
            shippingAddress={shippingAddress}
            editDetails={() => setShowConfirmation(prevState => !prevState)}
          />
        ) : (
          <Col md={12} lg={12} xl={7}>
            <Div>
              {currentDiv === 1 && (
                <>
                  <SectionTitle>
                    <Done /> Delivery Method
                  </SectionTitle>
                  <DeliveryMethod handleDeliveryMethod={handleDeliveryMethod} />

                  <SectionTitle>
                    <NotDone /> Address Details
                  </SectionTitle>
                  <ShippingAddress
                    handleFormChange={handleShippingSubmit}
                    handleAddressSelect={handleAddressSelect}
                  />
                </>
              )}
              {currentDiv === 2 && (
                <>
                  <SectionTitle>
                    <NotDone /> Payment Method
                  </SectionTitle>
                  <PaymentMethod handlePaymentMethod={handlePaymentMethod} />
                </>
              )}
              {currentDiv === 3 && (
                <>
                  <Summary />
                </>
              )}
            </Div>
          </Col>
        )}
      </Row>
    </Container>
  );
});

const Div = styled.div`
  padding-right: 30px;
  ${customMedia.lessThan('small')`
    padding: 0;
  `}
`;

const DivTitle = styled(PageTitle)`
  margin-top: 50px;
  margin-bottom: unset;

  ${customMedia.lessThan('small')`
  margin-top: auto;
  margin-bottom: 10px;
  `}
`;
const SectionTitle = styled(H5)`
  font-weight: 700;
  font-size: 16px;
  margin-top: 50px;

  &:first-child {
    margin-top: 0;
  }
`;

const TabWrap = styled.ul`
  color: ${p => p.theme.color.colorText};
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: unset;
  margin: 0 auto 25px auto;
`;
const TabNav = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 33%;

  &:hover {
    opacity: 0.8;
  }
  &.active {
    border-bottom: 2px solid ${StyleConstants.COLOR_ACCENT};
    color: ${StyleConstants.COLOR_ACCENT};
  }
  ${customMedia.lessThan('small')`
  padding-bottom: 3px;
  `}
`;
