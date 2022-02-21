import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { Col, Container, Row } from 'reactstrap';

import { PageTitle } from 'app/components/Typography/PageTitle/PageTitle';
import { H5 } from 'app/components/Typography/H5/H5';
import { ReactComponent as Done } from '../assets/Success.svg';
import { ReactComponent as NotDone } from '../assets/Success_disabled.svg';
import { DeliveryMethod } from '../components/DeliveryMethod';
import { Address, ShippingAddress } from '../components/ShippingAddress';
import { Summary } from '../components/Summary';
import { PaymentMethod } from '../components/PaymentMethod';
import { Confirmation } from '../components/Confirmation/Confirmation';
interface Props {}

export const DesktopView = memo((props: Props) => {
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
    <Wrapper>
      <Row>
        <Col md={12}>
          <CheckoutTitle>Checkout</CheckoutTitle>
        </Col>
      </Row>
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

              <SectionTitle>
                <NotDone /> Payment Method
              </SectionTitle>
              <PaymentMethod handlePaymentMethod={handlePaymentMethod} />
            </Div>
          </Col>
        )}
        <Col md={12} lg={12} xl={{ size: 4, offset: 1 }}>
          <Summary />
        </Col>
      </Row>
    </Wrapper>
  );
});

const Wrapper = styled(Container)``;

const Div = styled.div`
  padding-right: 30px;
`;

const CheckoutTitle = styled(PageTitle)`
  margin-top: 50px;
  margin-bottom: unset;
`;
const SectionTitle = styled(H5)`
  font-weight: 700;
  font-size: 16px;
  margin-top: 50px;

  &:first-child {
    margin-top: 0;
  }
`;
