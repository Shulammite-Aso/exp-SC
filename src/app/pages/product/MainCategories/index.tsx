/* eslint-disable prettier/prettier */
/**
 *
 * TopCategories
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { CategoryItem } from './components/CategoryItem';
import { StyleConstants } from 'styles/StyleConstants';
import { customMedia } from 'styles/media';
import { useDispatch, useSelector } from 'react-redux';
import { useProductSlice } from '../slice/index';
import Notifications from 'app/components/Notification';
import {
  loadingSelector,
  errorSelector,
  productCategorySelector,
} from '../slice/selectors';
import { Loader } from 'app/components/Loader';

interface Props { }

export const MainCategories = memo((props: Props) => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const { actions } = useProductSlice();
  const categories = useSelector(productCategorySelector);

  useEffect(() => {
    dispatch(actions.fetchProductsCategories());
  }, [actions, dispatch]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Helmet>
        <title>Categories Page</title>
        <meta name="description" content="A AltMall Main Categories Page" />
      </Helmet>
      <Wrapper>
        <Header>
          <HomeNavigate to="/">Home</HomeNavigate>
          <Title>&#8226; Categories</Title>
        </Header>
        <Items>
          {categories !== null || undefined
            ? categories?.map(category => (
                <CategoryItem item={category} key={category.id} />
              ))
            : 'No Categories Found'}
        </Items>
        {error ? <Notifications type="error" message={error} /> : <></>}
      </Wrapper>
    </>
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
  color: ${StyleConstants.COLOR_ACCENT};
  font-size: 16px;
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
