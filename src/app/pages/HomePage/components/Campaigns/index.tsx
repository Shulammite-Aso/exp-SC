/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect } from 'react';

import styled from 'styled-components/macro';
import { CampaignItem } from '../../../../components/CampaignCard';
import { customMedia } from 'styles/media';
import { Header } from '../HeaderForEachSection';
import { useDispatch, useSelector } from 'react-redux';
import { landingPageSelectors } from '../../slice/selectors';
import { useLandingPageSlice } from '../../slice';

export const Campaigns: React.FC = () => {
  const dispatch = useDispatch();
  const selectors = landingPageSelectors();
  const { actions } = useLandingPageSlice();
  const campaignTypes = useSelector(selectors.selectCampaignTypes);
  useLayoutEffect(() => {
    dispatch(actions.fetchCampaignTypes());
  }, []);

  console.log('campaignTypes', campaignTypes);
  return (
    <div className="d-flex flex-column">
      {campaignTypes.map(type => (
        <Wrapper key={type._id}>
          <Header title={type.name} linkTo={`/campaigns/${type._id}`} />
          <Items>
            {type.campaigns
              .filter((_, index) => index <= 3)
              .map(campaign => (
                <CampaignItem
                  {...campaign}
                  campaignType={type._id}
                  key={campaign._id}
                />
              ))}
          </Items>
        </Wrapper>
      ))}
    </div>
  );
};

const Wrapper = styled.div`
  margin-bottom: 90px;
  margin-top: 68px;
  padding: 1rem;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 1rem;

  ${customMedia.lessThan('large')`
   justify-content: space-around;
  `};

  ${customMedia.lessThan('small')`
   padding: 1rem 0;
   // margin-bottom: 2rem;
  `};
`;
