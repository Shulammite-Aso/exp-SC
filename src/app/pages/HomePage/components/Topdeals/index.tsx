/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * Topdeals
 *
 */
import React, { memo, useLayoutEffect } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Header } from '../HeaderForEachSection';
import { ProductCard } from 'app/components/ProductCard';
import placeholder from 'app/assets/images/placeholderImg.svg';
import { customMedia } from 'styles/media';
import { useDispatch, useSelector } from 'react-redux';
import { useLandingPageSlice } from '../../slice';
import { landingPageSelectors } from '../../slice/selectors';
import { dealSelectors } from 'app/pages/DealsPage/slice/selectors';
import { useDealSlice } from 'app/pages/DealsPage/slice';

interface Props {}

const topDeals = [
  {
    name: 'i mac laptop',
    images: [placeholder],
    price: '230,000',
    discountPrice: '200,000',
    id: '61f002b8fa2db2f78b66cf5a',
  },
  {
    name: 'HP Envy laptop',
    images: [placeholder],
    price: '400,000',
    discountPrice: '340,000',
    id: '61f00291b18937463ee58fdf',
  },
  {
    name: 'HP Envy 13',
    images: [placeholder],
    price: '400,000',
    discountPrice: '350,000',
    id: '61ea65c0f8a99f0016a58511',
  },
  {
    name: 'HP Envy laptop',
    images: [placeholder],
    price: '420,000',
    discountPrice: '320,000',
    id: '61eb5007b9c6c200161635dd',
  },
];

export const Topdeals = memo((props: Props) => {
  const dispatch = useDispatch();
  const selectors = dealSelectors();
  const { actions } = useDealSlice();
  const topDeals = useSelector(selectors.selectTopDeals);
  useLayoutEffect(() => {
    dispatch(actions.fetchTopDeals({}));
  }, []);
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Header title={t(...messages.title())} linkTo="/deals" />
      <Items>
        {topDeals
          .filter((deal, index) => index + 1 <= 4)
          .map(product => (
            <ProductCard product={product} />
          ))}
      </Items>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  padding: 1rem;
  ${customMedia.lessThan('small')`
  margin-bottom: 50px;
 `};
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
