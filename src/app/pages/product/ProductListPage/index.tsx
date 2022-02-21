import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { ListView } from './components/ListView';
import { Title } from './components/Title';
import { SideBar } from './components/Sidebar/Loadable';
import { Filters } from './components/Filters';
import { Pagination } from './components/Pagination/Loadable';
import { Loader } from 'app/components/Loader';
import Notifications from 'app/components/Notification';
import { customMedia } from 'styles/media';
import { useDispatch, useSelector } from 'react-redux';
import { useProductSlice } from 'app/pages/product/slice';
import {
  // productListSelector,
  loadingSelector,
  productsPaginationSelector,
} from 'app/pages/product/slice/selectors';

interface PaginationProps {
  prevPage: number | null;
  currentPage: number;
  nextPage: number | null;
  pageTotal: number;
  pageSize: number;
  total: number;
}

type filterProp = {
  brandArr: string[];
  rateArr: number[];
  priceObj: { min: number; max: number };
  discountArr: number[];
  dateSort?: string;
};

export function ProductFilterPage() {
  const notification = null;
  const PAGE_LIMIT = 25;
  const PAGINATION_MAX_NUMBER = 5;
  const productsPagination = useSelector(productsPaginationSelector);
  const { actions } = useProductSlice();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationDetails, setPaginationDetails] = useState<PaginationProps>({
    prevPage: 0,
    currentPage,
    nextPage: 0,
    pageTotal: PAGINATION_MAX_NUMBER,
    pageSize: 40,
    total: PAGE_LIMIT,
  });
  const [filterObject, setFilterObject] = useState<filterProp>({
    brandArr: [],
    rateArr: [],
    priceObj: { min: 30000, max: 100000 },
    discountArr: [],
    dateSort: '',
  });
  // const productList = useSelector(productListSelector);
  const loading = useSelector(loadingSelector);
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
    dispatch(actions.fetchProducts({ page: 1, limit: 25, filterObject }));
    dispatch(actions.fetchBrands());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions, dispatch]);

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

  const handlepagination = useCallback(
    (selectedObj: any) => {
      const current = selectedObj.selected + 1;
      onTop();
      const filterProductsParams = {
        page: current,
        limit: PAGE_LIMIT,
        filterObject,
      };
      dispatch(actions.fetchProductsByFilter(filterProductsParams));
      setCurrentPage(current);
    },
    [actions, dispatch, filterObject],
  );

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <Wrapper>
      <Title />
      <Container>
        <SideBarDiv>
          <SideBar
            setChildFilterObject={setFilterObject}
            filterObject={filterObject}
          />
        </SideBarDiv>
        <DisplayDiv>
          <Filters
            setChildFilterObject={setFilterObject}
            filterObject={filterObject}
          />
          {loading ? <Loader /> : <ListView />}

          <Pagination
            pagination={paginationDetails}
            onPageChange={handlepagination}
          />
        </DisplayDiv>
      </Container>
      {notification ? (
        <Notifications
          type="success"
          message="This is a message for the notification card"
        />
      ) : (
        <div></div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  ${customMedia.lessThan('small')`
// justify-content: space-around;
  `}
`;
const DisplayDiv = styled.div`
  display: block;
  flex: 1;
  padding: 0 30px;
  max-width: 80%;
  ${customMedia.lessThan('medium')`
    padding: 0 20px;
  `}
  ${customMedia.lessThan('small')`
    padding: 0;
    max-width: 100%;
  `}
`;

const SideBarDiv = styled.div`
  max-width: 300px;
  ${customMedia.lessThan('medium')`
     max-width: 250px;
  `}
  ${customMedia.lessThan('small')`
    display: none;
  `}
`;
