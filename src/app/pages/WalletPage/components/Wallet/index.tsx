import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import EmptyWallet from './EmptyWallet';
import { CreateWallet } from './CreateWallet';
import WalletContent from './WalletContent';

export default function Wallet() {
  const [viewPage, SetViewPage] = useState(1);

  const changeView = page => {
    SetViewPage(page);
  };

  return (
    <Container>
      {viewPage === 1 ? (
        <EmptyWallet changeView={changeView} />
      ) : viewPage === 2 ? (
        <CreateWallet changeView={changeView} />
      ) : (
        <WalletContent />
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;
  ${customMedia.greaterThan('medium')`
  //${p => p.theme.direction['margin-left']}: 3rem;
  margin: 3rem auto;
  `};
`;
