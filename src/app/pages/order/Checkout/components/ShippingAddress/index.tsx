import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import classnames from 'classnames';
import { customMedia } from 'styles/media';
import { AddressForm } from './AddressForm';
import { RadioIcon } from '../RadioIcon/index';
import { P } from 'app/components/Typography/P/P';
import { H5 } from 'app/components/Typography/H5/H5';
import { ButtonToolbar } from 'app/components/ButtonToolbar/ButtonToolbar';
import { Button } from 'app/components/Button/Button';
import { Modal } from 'app/components/Modal';
import { InfoCard } from '../InfoCard/InfoCard';

export interface Address {
  id?: number;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
}

interface Props {
  handleFormChange: (key: string, value: string) => void;
  handleAddressSelect: (address: Address) => void;
}

const addresses = [
  {
    id: 1,
    first_name: 'Amara',
    last_name: 'Toni',
    phone: '0703006178',
    address: '124 Test Street, Example Avenue',
    city: 'Ikorodu',
    state: 'Lagos',
  },
  {
    id: 2,
    first_name: 'Ebun',
    last_name: 'Israel',
    phone: '0703006178',
    address: '124 Test Street, Example Avenue',
    city: 'Ikorodu',
    state: 'Lagos',
  },
  {
    id: 3,
    first_name: 'Dami',
    last_name: 'Seun',
    phone: '0703006178',
    address: '124 Test Street, Example Avenue',
    city: 'Ikorodu',
    state: 'Lagos',
  },
];

export const ShippingAddress = ({
  handleFormChange,
  handleAddressSelect,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>({
    id: 1,
    first_name: 'Hameed',
    last_name: 'Damee',
    phone: '0703006178',
    address: '124 Test Street, Example Avenue',
    city: 'Ikorodu',
    state: 'Lagos',
  });

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  useEffect(() => handleAddressSelect(selectedAddress as Address));

  return (
    <Wrapper>
      {selectedAddress ? (
        <>
          <InfoCard>
            <AddressHead>
              <RadioIcon className={classnames({ active: true })} />
              {selectedAddress?.first_name} {selectedAddress?.last_name}
            </AddressHead>
            <P>
              {selectedAddress?.address}, {selectedAddress?.city},{' '}
              {selectedAddress?.state} state.
            </P>
            <P>{selectedAddress?.phone}</P>
          </InfoCard>
          <BtnToolbar>
            <AddressButton
              className="btn btn-outline-secondary"
              onClick={() => setSelectedAddress(null)}
            >
              Add New Address
            </AddressButton>
            <AddressButton
              className="btn btn-outline-primary"
              onClick={toggleModal}
            >
              Select From Saved Addresses
            </AddressButton>
          </BtnToolbar>
        </>
      ) : (
        <>
          <AddressForm handleFormChange={handleFormChange} />
          <BtnToolbar>
            <Button className="btn btn-outline-primary" onClick={toggleModal}>
              Select From Saved Addresses
            </Button>
          </BtnToolbar>
        </>
      )}
      <Modal
        showModal={showModal}
        toggle={toggleModal}
        showSecondaryBtn
        primaryBtnText="Select"
        primaryAction={toggleModal}
      >
        {addresses.map(address => (
          <InfoCard key={address.id}>
            <AddressHead
              onClick={() => {
                setSelectedAddress(address);
                handleAddressSelect(address);
              }}
            >
              <RadioIcon
                className={classnames({
                  active: selectedAddress?.id === address.id,
                })}
              />
              {address.first_name} {address.last_name}
            </AddressHead>
            <P>
              {address.address}, {address.city}, {address.state} state.
            </P>
            <P>{address.phone}</P>
          </InfoCard>
        ))}
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
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

const BtnToolbar = styled(ButtonToolbar)`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-bottom: 0;
  flex-flow: ${p => p.theme.direction['flex-flow']} !important;
  ${customMedia.lessThan('small')`
  flex-wrap: wrap;
  `}
`;

const AddressButton = styled(Button)`
  ${customMedia.lessThan('small')`
  width: 100% !important;
  font-size: 10px;
  padding: 5px 10px;
`}
`;
