import React, { memo, useState } from 'react';
import styled from 'styled-components';

import { Button } from 'app/components/Button/Button';
import { InfoCard } from '../InfoCard/InfoCard';
import { Modal } from 'app/components/Modal';
import { WalletForm } from './WalletForm';

interface Props {}

export const WalletContent = memo((props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [walletDetails, setWalletDetails] = useState({
    first_name: '',
    last_name: '',
    email: '',
    dob: '',
    phone: '',
  });

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const submitWallet = () => {
    console.log(`walletDetails`, walletDetails);
  };

  const handleWalletSubmit = (key: string, value: string) => {
    setWalletDetails({ ...walletDetails, [key]: value });
  };

  return (
    <Wrapper>
      <p>You currently don't have a wallet account</p>

      <Btn className="btn btn-outline-primary" onClick={toggleModal}>
        + Create Wallet
      </Btn>
      <Modal
        showModal={showModal}
        toggle={toggleModal}
        showSecondaryBtn
        primaryBtnText="Save"
        primaryAction={submitWallet}
      >
        <WalletForm handleFormChange={handleWalletSubmit} />
      </Modal>
    </Wrapper>
  );
});

const Wrapper = styled(InfoCard)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled(Button)`
  margin-left: auto;
  margin-top: 20px;
  min-width: 173px;
`;
