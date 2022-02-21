import React from 'react';
import styled from 'styled-components/macro';
import classnames from 'classnames';

import { StyleConstants } from 'styles/StyleConstants';
import { RadioIcon } from '../RadioIcon';
import { P } from 'app/components/Typography/P/P';
import { ReactComponent as Delete } from 'app/assets/icons/delete.svg';
import { PaymentCard } from './PaymentCard';

export interface Card {
  id: number;
  ccNumber: string;
  ccExpiry: string;
}

interface CCProps {
  card: Card;
  selectedCard: number;
  selectCard: (id: number) => void;
}

export const MiniCC = ({ card, selectedCard, selectCard }: CCProps) => {
  return (
    <CreditCard>
      <CardRadioIcon
        className={classnames({
          active: selectedCard === card.id,
        })}
        onClick={() => selectCard(card.id)}
      />
      <div className="center-content">
        <P className="cc-number">xxxx {card.ccNumber}</P>
        <small>Expires</small>
        <P className="cc-expiry">{card.ccExpiry}</P>
      </div>
      <div className="right-content">
        <Delete />
      </div>
    </CreditCard>
  );
};

const CreditCard = styled(PaymentCard)`
  background-color: ${StyleConstants.COLOR_BLACK};
  align-items: flex-start;

  .center-content {
    width: 55%;

    .cc-number {
      margin-bottom: 10px;
    }

    .cc-expiry {
      margin-top: 0;
    }
  }

  .right-content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 30%;
    margin-top: auto;
  }
`;

const CardRadioIcon = styled(RadioIcon)`
  cursor: pointer;

  &.active {
    border-color: ${StyleConstants.COLOR_WHITE};

    &:before {
      background-color: ${StyleConstants.COLOR_WHITE};
    }
  }
`;
