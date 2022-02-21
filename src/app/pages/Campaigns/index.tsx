/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect } from 'react';

import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { useDispatch, useSelector } from 'react-redux';
import { CampaignItem } from 'app/components/CampaignCard';
import { useLandingPageSlice } from '../HomePage/slice';
import { landingPageSelectors } from '../HomePage/slice/selectors';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainView } from 'app/layouts/MainView';

export const Campaigns: React.FC<RouteComponentProps<{
  campaignType: string;
}>> = ({ match: { params } }) => {
  const dispatch = useDispatch();
  const selectors = landingPageSelectors();
  const { actions } = useLandingPageSlice();
  const campaigns = useSelector(selectors.selectCampaigns);
  useLayoutEffect(() => {
    dispatch(
      actions.fetchCampaigns({
        campaignTypeId: params.campaignType,
      }),
    );
  }, [params.campaignType]);

  return (
    <MainView>
      <div className="d-flex flex-column">
        <Helmet>
          <title>{campaigns[0]?.type?.name || ''} Campaigns</title>
          <meta
            name="description"
            content={`A AltMall ${
              campaigns[0]?.type?.name || ''
            } Campaign Page`}
          />
        </Helmet>
        <Wrapper>
          <Header>
            <HomeNavigate to="/">Home</HomeNavigate>
            <Title>&#8226; {campaigns[0]?.type?.name} Campaigns</Title>
          </Header>
          <Items>
            {campaigns.map(campaign => (
              <CampaignItem
                {...campaign}
                campaignType={campaign.type._id}
                key={campaign._id}
              />
            ))}
          </Items>
        </Wrapper>
      </div>
    </MainView>
  );
};

const Wrapper = styled.div`
  margin-bottom: 90px;
  margin-top: 68px;
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  padding: 0.7rem;
`;

const HomeNavigate = styled(Link)`
  font-size: 16px;
  color: ${p => p.theme.color.colorTextBlack};
  margin-right: 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Title = styled.p`
  color: #c00ab5;
  font-size: 16px;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1rem;

  ${customMedia.lessThan('large')`
  justify-content: space-around;
 `};

  ${customMedia.lessThan('small')`
  padding: 1rem 0;
  // margin-bottom: 2rem;
 `};
`;
