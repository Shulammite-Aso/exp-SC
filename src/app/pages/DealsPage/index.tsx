/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * Topdeals
 *
 */
import React, { memo, useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { ProductCard } from 'app/components/ProductCard';
import { Banner } from 'app/components/Banner';
import { customMedia } from 'styles/media';
import { dealSelectors } from './slice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useDealSlice } from './slice';
import { NumberedPagination } from 'app/components/Pagination';
import { usePagination } from 'utils';

export const DealsPage: React.FC = memo(() => {
  const dispatch = useDispatch();
  const selectors = dealSelectors();
  const { page, handlePagination } = usePagination();
  const deals = useSelector(selectors.selectTopDeals);
  const pagination = useSelector(selectors.selectPagination);
  const { actions } = useDealSlice();
  useLayoutEffect(() => {
    dispatch(actions.fetchTopDeals({ page }));
  }, []);
  useEffect(() => {
    if (page > 1) {
      dispatch(actions.fetchTopDeals({ page }));
    }
  }, [page]);
  return (
    <>
      <Helmet>
        <title>Deals Page</title>
        <meta name="description" content="An AltMall Main Deals Page" />
      </Helmet>
      <Wrapper>
        <Banner hasCarousel={true} />
        <Header>
          <HomeNavigate to="/">Home</HomeNavigate>
          <Title>&#8226; Deals</Title>
        </Header>
        <Items>
          {deals.map(deal => (
            <ProductCard product={deal} key={deal._id} />
          ))}
        </Items>
        <NumberedPagination
          pagination={pagination}
          onPageChange={handlePagination}
        />
      </Wrapper>
    </>
  );
});

const Wrapper = styled.div`
  padding: 1rem;
  ${customMedia.lessThan('small')`
  margin-bottom: 50px;
 `};
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
  padding: 1rem;

  ${customMedia.lessThan('mediumplus')`
  justify-content: space-around;
 `};
`;
