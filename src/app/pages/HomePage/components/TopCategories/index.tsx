/* eslint-disable react-hooks/exhaustive-deps */
/**
 *
 * TopCategories
 *
 */

import React, { memo, useLayoutEffect } from 'react';
import styled from 'styled-components/macro';
import mobileImg from './assets/mobileAccessories.svg';
import automobileImg from './assets/automotive.svg';
import babiesImg from './assets/kidsSection.svg';
import fashionImg from './assets/fashion.svg';
import phoneImg from './assets/phones.svg';
import artImg from './assets/art.svg';
import computerImg from './assets/computers.svg';
import electtonicsImg from './assets/electronics.svg';
import ladiesFashionImg from './assets/ladiesFashion.svg';
import homeImg from './assets/homeKitchen.svg';
import { CategoryItem } from './components/CategoryItem';
import { Header } from '../HeaderForEachSection';
import { customMedia } from 'styles/media';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { useDispatch, useSelector } from 'react-redux';
import { useLandingPageSlice } from '../../slice';
import { landingPageSelectors } from '../../slice/selectors';

interface Props {}

export const TopCategories = memo((props: Props) => {
  const dispatch = useDispatch();
  const selectors = landingPageSelectors();
  const { actions } = useLandingPageSlice();
  const topCategories = useSelector(selectors.selectTopCategories);
  useLayoutEffect(() => {
    dispatch(actions.fetchTopCategories());
  }, []);
  console.log('topCategories', topCategories);
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      image: mobileImg,
      desc: 'Mobile Accessories',
    },
    {
      id: 2,
      image: automobileImg,
      desc: 'Automotive & Industrial',
    },
    {
      id: 3,
      image: babiesImg,
      desc: 'Baby, Kids & Toys',
    },
    {
      id: 4,
      image: fashionImg,
      desc: 'Fashion',
    },
    {
      id: 5,
      image: phoneImg,
      desc: 'Phones & Tablets',
    },
    {
      id: 6,
      image: artImg,
      desc: 'Arts & Crafts',
    },
    {
      id: 7,
      image: computerImg,
      desc: 'Computers & Accessories',
    },
    {
      id: 8,
      image: electtonicsImg,
      desc: 'Electronics',
    },
    {
      id: 9,
      image: ladiesFashionImg,
      desc: 'Fashion',
    },
    {
      id: 10,
      image: homeImg,
      desc: 'Home & Kitchen',
    },
  ];

  return (
    <Wrapper>
      <Header title={t(...messages.title())} linkTo="/products/categories" />
      <Items>
        {topCategories?.map(category => (
          <CategoryItem {...category} key={category?._id} />
        ))}
      </Items>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  /* width: 100%; */
  display: block;
  margin-bottom: 90px;
  padding: 1.2rem;

  ${customMedia.lessThan('small')`
    margin-top: 50px;
  `}
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1rem;

  ${customMedia.lessThan('small')`
     margin-bottom: 50px;
   `}
`;
