import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import classnames from 'classnames';
import { customMedia } from 'styles/media';
import { ReactComponent as VanIcon } from '../../assets/delivery_van.svg';
import { ReactComponent as MapPin } from '../../assets/map_pin.svg';
import { StyleConstants } from 'styles/StyleConstants';
import { H6 } from 'app/components/Typography/H6/H6';

import { RadioIcon } from '../RadioIcon';
import { LocationForm } from './LocationForm';

interface Props {
  handleDeliveryMethod: (selectMethod: {
    method: string;
    value: string;
  }) => void;
}

export const DeliveryMethod = memo(({ handleDeliveryMethod }: Props) => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <Wrapper>
      <TabWrap>
        <TabNav
          onClick={() => {
            setCurrentTab(1);
            handleDeliveryMethod({
              method: 'Door',
              value: `Delivery will take plce between Tues 7 Sept and Fri 10 Sept for N2,000`,
            });
          }}
          className={classnames({ active: currentTab === 1 })}
        >
          <RadioIcon className={classnames({ active: currentTab === 1 })} />{' '}
          Door Delivery
        </TabNav>
        <TabNav
          onClick={() => {
            setCurrentTab(2);
            handleDeliveryMethod({
              method: 'Pickup',
              value: `23 Admiralty way, Slot, Ikorodu Garage, Lagos State.`,
            });
          }}
          className={classnames({ active: currentTab === 2 })}
        >
          <RadioIcon className={classnames({ active: currentTab === 2 })} />{' '}
          Pick Up (Free)
        </TabNav>
        <TabNav
          onClick={() => setCurrentTab(3)}
          className={classnames({ active: currentTab === 3 })}
        >
          <RadioIcon className={classnames({ active: currentTab === 3 })} />{' '}
          Vendor Fulfillment
        </TabNav>
      </TabWrap>
      {currentTab === 1 && (
        <TabContent>
          <ContentBox>
            <p>
              <VanIcon /> Delivery will take plce between{' '}
              <strong>Tues 7 Sept</strong> and <strong>Fri 10 Sept</strong> for
              N2,000
            </p>
          </ContentBox>
        </TabContent>
      )}

      {currentTab === 2 && (
        <TabContent>
          <ContentTitle>Pick up locations near you</ContentTitle>
          <ContentBox>
            <p>
              <MapPin /> 23 Admiralty way, Slot, Ikorodu Garage, Lagos State.
            </p>
          </ContentBox>
        </TabContent>
      )}

      {currentTab === 3 && (
        <TabContent>
          <ContentTitle>Select a Location</ContentTitle>
          <LocationForm handleDeliveryMethod={handleDeliveryMethod} />
        </TabContent>
      )}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin-top: 30px;
`;

const TabWrap = styled.ul`
  color: ${p => p.theme.color.colorText};
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: unset;
  ${customMedia.lessThan('small')`
 flex-direction: column;
  `}
`;
const TabNav = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  ${customMedia.lessThan('small')`
 justify-content: flex-start;
 margin-bottom: 20px;
  `}

  &:hover {
    opacity: 0.8;
  }
  &.active {
    color: ${StyleConstants.COLOR_ACCENT};
  }
`;
const TabContent = styled.div``;
const ContentTitle = styled(H6)`
  font-weight: bold;
  margin-top: 20px;
`;
const ContentBox = styled.div`
  height: 94px;
  background-color: ${StyleConstants.COLOR_WARNING_FILL};
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: solid 2px ${StyleConstants.COLOR_WARNING_STROKE};
  margin: 10px 0;
  border-radius: 8px;

  p {
    color: #000000;
  }

  svg {
    margin-right: 10px;

    path {
      stroke: #000000;
    }
  }
`;
