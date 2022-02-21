import React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { Button } from 'app/components/Button/Button';

import {
  AltPayModal,
  WalletModal,
  CreditCardModal,
  GiftCardModal,
} from './CardModals';

interface Props {
  form: string;
  buttonAction: string;
}

export default function CreditCard({ form, buttonAction }: Props) {
  const [modalIndex, setModalIndex] = useState('');

  const provideTicketDescription = () => {
    setModalIndex(buttonAction);
  };

  return (
    <>
      <AddBtn onClick={provideTicketDescription}>{form}</AddBtn>

      {modalIndex === '' ? (
        <> </>
      ) : modalIndex === 'You have no debit/credit card saved' ? (
        <CreditCardModal />
      ) : modalIndex === 'You have no Gift card saved' ? (
        <GiftCardModal />
      ) : modalIndex === 'You have no Altpay card saved' ? (
        <AltPayModal />
      ) : modalIndex === 'You have no Wallet Account' ? (
        <WalletModal />
      ) : // <button onClick={() => createwalletpage()}></button>
      null}
    </>
  );
}

const AddBtn = styled(Button)`
  padding: 7px 0;
  cursor: pointer;
  [tabindex]:focus {
    color: #c00ab5;
    outline: none;
  }
  height: 50px;
  width: 214px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #c00ab5;
  /* margin-left: 206x; */
  color: #c00ab5;
  /* margin: 0 auto; */
  /* display: block; */
  margin: 70px 206px;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  text-decoration: none;
  list-style: none;
`;
