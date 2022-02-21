import React from 'react';
import styled from 'styled-components/macro';
import classnames from 'classnames';

import { StyleConstants } from 'styles/StyleConstants';
import { P } from 'app/components/Typography/P/P';
import { ReactComponent as Plus } from '../../assets/plus_box.svg';
import { Card } from './MiniCC';
import { PaymentCard } from './PaymentCard';

interface AddCardProps {
  cards: Card[];
  addCard: () => void;
}

export const AddCard = ({ cards, addCard }: AddCardProps) => {
  const MAX_CARD_ALLOWED = 3;
  const addCardClass = classnames({
    disable: cards.length >= MAX_CARD_ALLOWED,
  });

  return (
    <AddCardWrapper
      className={addCardClass}
      onClick={cards.length < MAX_CARD_ALLOWED ? addCard : undefined}
    >
      <Plus />
      <P>
        {cards.length < MAX_CARD_ALLOWED
          ? 'Add a new Card'
          : "You can't add anymore cards"}
      </P>
    </AddCardWrapper>
  );
};

const AddCardWrapper = styled(PaymentCard)`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  cursor: pointer;

  ${P} {
    margin-top: 0;
    margin-left: 10px;
    color: ${StyleConstants.COLOR_ACCENT};
  }

  &.disable {
    ${P} {
      color: ${StyleConstants.COLOR_GRAY};
    }

    svg {
      display: none;
    }
  }
`;
