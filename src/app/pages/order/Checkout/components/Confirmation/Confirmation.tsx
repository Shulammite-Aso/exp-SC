import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Col } from 'reactstrap';

import { H5 } from 'app/components/Typography/H5/H5';
import { ReactComponent as Done } from '../../assets/Success.svg';
import { ReactComponent as NotDone } from '../../assets/Success_disabled.svg';
import { P } from 'app/components/Typography/P/P';
import { InfoCard } from '../InfoCard/InfoCard';
import { Address } from '../ShippingAddress';
import { StyleConstants } from 'styles/StyleConstants';
import { Button } from 'app/components/Button/Button';

interface Props {
  deliveryMethod: { method: string; value: string };
  paymentMethod: { method: string; value: string };
  shippingAddress: Address;
  editDetails: () => void;
}
export const Confirmation = memo(
  ({ deliveryMethod, paymentMethod, shippingAddress, editDetails }: Props) => {
    return (
      <Col md={12} lg={12} xl={7}>
        <Div>
          <SectionTitle>
            <Done /> Delivery Method
            <EditText onClick={editDetails}>
              Use another delivery method
            </EditText>
          </SectionTitle>
          <InfoCard>
            <ContentTitle>{deliveryMethod?.method} Delivery</ContentTitle>
            <P>{deliveryMethod?.value}</P>
          </InfoCard>

          <SectionTitle>
            <NotDone /> Address Details
            <EditText onClick={editDetails}>Use another address</EditText>
          </SectionTitle>
          <InfoCard>
            <AddressHead>
              {shippingAddress?.first_name} {shippingAddress?.last_name}
            </AddressHead>
            <P>
              {shippingAddress?.address}, {shippingAddress?.city},{' '}
              {shippingAddress?.state} state.
            </P>
            <P>{shippingAddress?.phone}</P>
          </InfoCard>

          <SectionTitle>
            <NotDone /> Payment Method
            <EditText onClick={editDetails}>
              Use another payment method
            </EditText>
          </SectionTitle>
          <InfoCard>
            <ContentTitle>{paymentMethod?.method} Delivery</ContentTitle>
            <P>{paymentMethod?.value}</P>
          </InfoCard>

          <Total>
            <TotalSection>
              <P>Sub Total:</P>
              <P>N 648,220</P>
            </TotalSection>
            <TotalSection>
              <P>Delivery Cost:</P>
              <P>N 2,000</P>
            </TotalSection>
            <TotalSection>
              <P>Taxes and Fees</P>
              <P>--</P>
            </TotalSection>
            <TotalSection>
              <P>Total</P>
              <P>N 648,220</P>
            </TotalSection>
          </Total>
          <Btn className="btn btn-primary">Purchase Now</Btn>
        </Div>
      </Col>
    );
  },
);

const Div = styled.div`
  padding-right: 30px;
`;
const SectionTitle = styled(H5)`
  font-weight: 700;
  font-size: 16px;
  margin-top: 50px;
  position: relative;

  &:first-child {
    margin-top: 0;
  }
`;

const EditText = styled.small`
  position: absolute;
  right: 3px;
  font-weight: 400;
  cursor: pointer;
  color: ${StyleConstants.COLOR_ACCENT};
`;

const ContentTitle = styled(H5)`
  font-weight: 700;
  margin-top: 20px;
  color: #8a8894;
  font-size: 16px;
`;

const AddressHead = styled(H5)`
  font-weight: 700;
  color: #8a8894;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Total = styled.div`
  margin-top: 30px;
`;
const TotalSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 10px 0;
  }
`;
const Btn = styled(Button)`
  width: 100%;
`;
