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
import { ProductCard } from 'app/components/ProductCard';

export const CampaignProducts: React.FC<RouteComponentProps<{
  campaignType: string;
  campaignId: string;
}>> = ({ match: { params } }) => {
  const dispatch = useDispatch();
  const selectors = landingPageSelectors();
  const { actions } = useLandingPageSlice();
  const campaign = useSelector(selectors.selectSingleCampaign);
  useLayoutEffect(() => {
    dispatch(
      actions.fetchSingleCampaign({
        id: params.campaignId,
      }),
    );
  }, [params.campaignId]);

  return (
    <MainView>
      <div className="d-flex flex-column">
        <Helmet>
          <title>{campaign?.title || ''} Campaign Products</title>
          <meta
            name="description"
            content={`A AltMall ${campaign?.title || ''} Product Campaign Page`}
          />
        </Helmet>
        <Wrapper>
          <Header>
            <HomeNavigate to="/">Home</HomeNavigate>
            <Title>&#8226; {campaign?.title} Campaign Products</Title>
          </Header>
          <Items>
            {campaign?.products.map(product => (
              <ProductCard product={product} key={product._id} />
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
