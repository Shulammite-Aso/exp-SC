import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import addressBook from '../../assets/cil_address-book.svg';
import { H4 } from 'app/components/Typography/H4/H4';
import { Button } from 'app/components/Button/Button';

export default function EmptyBook({ changeView }) {
  return (
    <Card>
      <Heading>You have nothing in your Address Book</Heading>
      <img src={addressBook} alt="shopping Cart" />
      <p className="description">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
      <div>
        <ActionButton
          className="btn-outline-primary"
          onClick={() => changeView(2)}
        >
          Add Address
        </ActionButton>
      </div>
    </Card>
  );
}

const Card = styled.div`
  color: ${p => p.theme.color.colorTextBold};
  text-align: center;
  background-color: ${p => p.theme.color.colorEmptyStateBackground};
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
  margin: 3rem auto;
  padding: 5rem;
  max-width: 638px;

  ${customMedia.lessThan('xsm')`
  padding: 3rem;
  width: 94%;
  `};

  ${customMedia.lessThan('small')`
  padding: 4rem;
  width: 85%;
  `};

  img {
    margin: 2rem 0;
    width: 155.83px;
  }

  p {
    font-size: 14px;
  }

  .description {
    color: ${p => p.theme.color.colorTextBold};
  }

  div {
    align-text: center;
    margin-top: 2rem;
  }
`;

const Heading = styled(H4)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bold;
`;

const ActionButton = styled(Button)`
  margin: 0 auto !important;
  background-color: ${p => p.theme.color.colorBackgroundBody};
`;
