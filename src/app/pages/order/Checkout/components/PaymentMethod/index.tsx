import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import classnames from 'classnames';
import { Col, Collapse, Row } from 'reactstrap';

import { Button } from 'app/components/Button/Button';
import { RadioIcon } from '../RadioIcon';
import { AddCard } from './AddCard';
import { MiniCC as MiniCreditCard, Card } from './MiniCC';
import { Modal } from 'app/components/Modal';
import { CardForm } from './CardForm';
import { WalletContent } from './WalletContent';

const cards: Card[] = [
  {
    id: 1,
    ccNumber: '4025',
    ccExpiry: '7/22',
  },
  {
    id: 2,
    ccNumber: '4026',
    ccExpiry: '7/22',
  },
];

interface Props {
  handlePaymentMethod: (selectMethod: {
    method: string;
    value: string;
  }) => void;
}

export const PaymentMethod = memo(({ handlePaymentMethod }: Props) => {
  const [currentTab, setCurrentTab] = useState(1);
  const [selectedCard, setSelectedCard] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [ccDetails, setCCDetails] = useState({
    first_name: '',
    last_name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    postalCode: '',
  });

  const handleCCSubmit = (key: string, value: string) => {
    setCCDetails({ ...ccDetails, [key]: value });
    handlePaymentMethod({
      method: 'Credit Card',
      value: 'xxxxxxxxxxxx245',
    });
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const selectCard = (id: number) => {
    setSelectedCard(id);
  };

  const submitCard = () => {
    console.log(`ccDetails`, ccDetails);
  };

  return (
    <Wrapper>
      <TabWrap>
        <TabNav onClick={() => setCurrentTab(1)}>
          <RadioIcon className={classnames({ active: currentTab === 1 })} /> Pay
          with Card
        </TabNav>

        <TabContent isOpen={currentTab === 1}>
          <CardRow>
            <Row>
              {cards.map(card => (
                <Col md={6} key={card.id}>
                  <MiniCreditCard
                    card={card}
                    selectCard={selectCard}
                    selectedCard={selectedCard}
                  />
                </Col>
              ))}
              <Col md={6}>
                <AddCard cards={cards} addCard={toggleModal} />
                <Modal
                  showModal={showModal}
                  toggle={toggleModal}
                  showSecondaryBtn
                  primaryBtnText="Save"
                  primaryAction={submitCard}
                >
                  <CardForm handleFormChange={handleCCSubmit} />
                </Modal>
              </Col>
            </Row>
          </CardRow>
          <Btn
            className="btn btn-primary"
            onClick={() =>
              handlePaymentMethod({
                method: 'Card',
                value: 'You want to pay with your card',
              })
            }
          >
            Proceed to Confirmation
          </Btn>
        </TabContent>

        <TabNav
          onClick={() => {
            setCurrentTab(2);
          }}
        >
          <RadioIcon className={classnames({ active: currentTab === 2 })} /> Pay
          with Wallet
        </TabNav>

        <TabContent isOpen={currentTab === 2}>
          <WalletContent />
        </TabContent>

        <TabNav onClick={() => setCurrentTab(3)}>
          <RadioIcon className={classnames({ active: currentTab === 3 })} /> Pay
          with Alternative Finance
        </TabNav>

        <TabContent isOpen={currentTab === 3}>
          <Btn
            className="btn btn-primary"
            onClick={() =>
              handlePaymentMethod({
                method: 'Alternative Finance',
                value: 'You want to pay for the product in installments',
              })
            }
          >
            Proceed to Confirmation
          </Btn>
        </TabContent>
      </TabWrap>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const TabWrap = styled.ul`
  color: ${p => p.theme.color.colorText};
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: unset;
`;
const TabNav = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
const TabContent = styled(Collapse)``;
const Btn = styled(Button)`
  margin-left: auto;
  margin-top: 20px;
  min-width: 173px;
`;
const CardRow = styled.div`
  max-width: 500px;
`;
