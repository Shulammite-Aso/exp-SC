/**
 *
 * ProductSearchResult
 *
 */
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Link, useHistory } from 'react-router-dom';
import { ProductCard } from 'app/components/ProductCard';
import { customMedia } from 'styles/media';
import {
  productSearchListSelector,
  loadingSelector,
} from 'app/pages/product/slice/selectors';
import { useSelector } from 'react-redux';
import { Loader } from 'app/components/Loader';
import { useProductSlice } from 'app/pages/product/slice';
import { useDispatch } from 'react-redux';
import { Pagination } from '../ProductListPage/components/Pagination/Loadable';
import { productSearchListPaginationSelector } from 'app/pages/product/slice/selectors';

interface PaginationProps {
  prevPage: number | null;
  currentPage: number;
  nextPage: number | null;
  pageTotal: number;
  pageSize: number;
  total: number;
}

export const ProductSearchResult = memo(() => {
  const searchResult = useSelector(productSearchListSelector);
  const productsPagination = useSelector(productSearchListPaginationSelector);
  const PAGE_LIMIT = 25;
  const PAGINATION_MAX_NUMBER = 5;
  const loading = useSelector(loadingSelector);
  const history = useHistory();
  const { actions } = useProductSlice();
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationDetails, setPaginationDetails] = useState<PaginationProps>({
    prevPage: 0,
    currentPage,
    nextPage: 0,
    pageTotal: PAGINATION_MAX_NUMBER,
    pageSize: 40,
    total: PAGE_LIMIT,
  });

  useEffect(() => {
    const state = history.location.state as { query: string };
    setQuery(state.query);
    dispatch(
      actions.fetchProductsBySearch({
        page: 1,
        limit: 25,
        query: state.query,
      }),
    );
  }, [actions, dispatch, history.location.state]);

  useEffect(() => {
    setPaginationDetails({
      ...paginationDetails,
      nextPage: productsPagination?.['next']?.page,
      prevPage: productsPagination?.['prev']?.page,
      currentPage,
      pageTotal: Math.ceil(productsPagination?.total / PAGE_LIMIT),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, productsPagination]);

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  const handlepagination = useCallback(
    (selectedObj: any) => {
      const current = selectedObj.selected + 1;
      onTop();
      console.log('query', query);
      const filterProductsParams = {
        page: current,
        limit: PAGE_LIMIT,
        query,
      };
      dispatch(actions.fetchProductsBySearch(filterProductsParams));
      setCurrentPage(current);
    },
    [actions, dispatch, query],
  );

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Helmet>
        <title>Product Search Result Page</title>
        <meta
          name="description"
          content="A AltMall Product Search Result Page"
        />
      </Helmet>
      <Wrapper>
        <Header>
          <HomeNavigate to="/">Home</HomeNavigate>
          <Title>&#8226; Search</Title>
        </Header>
        <Items>
          {searchResult && searchResult.length !== 0 ? (
            searchResult.map(product => <ProductCard product={product} />)
          ) : (
            <Text>Product(s) Not Available</Text>
          )}
        </Items>
        <Pagination
          pagination={paginationDetails}
          onPageChange={handlepagination}
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

const Text = styled.p`
  color: #000000;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
`;
