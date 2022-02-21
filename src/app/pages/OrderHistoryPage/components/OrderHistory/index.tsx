/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import phone from '../../assets/phone.png';
import goBack from '../../assets/back-arrow.svg';
import { OrderCard } from './OrderCard';
import { OrderDetails } from './OrderDetail';
import EmptyHistory from './EmptyHistory';
import { H3 } from 'app/components/Typography/H3/H3';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useOrderSlice } from '../../slice';
import { usePagination } from 'utils';
import { orderSelectors } from '../../slice/selectors';
import { NumberedPagination } from 'app/components/Pagination';

export default function OrderHistory() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { actions } = useOrderSlice();
  const selectors = orderSelectors();
  const orders = useSelector(selectors.selectOrders);
  const pagination = useSelector(selectors.selectPagination);
  const { handlePagination, page } = usePagination();

  useEffect(() => {
    dispatch(
      actions.fetchOrders({
        page,
      }),
    );
  }, [page]);

  return (
    <Container>
      <div>
        <Heading>{t(...messages.title())}</Heading>
        {orders.length !== 0 ? (
          orders.map(order => <OrderCard order={order} key={order._id} />)
        ) : (
          <EmptyHistory />
        )}
        <NumberedPagination
          pagination={pagination}
          onPageChange={handlePagination}
        />
      </div>

      {/* <div>
          <HeadingSection>
            <div className="go_back">
              <img src={goBack} alt="go back" /> <span>Back</span>
            </div>
            <Heading>Order Details</Heading>
          </HeadingSection>
          <OrderDetails />
        </div>
      */}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;

  ${customMedia.greaterThan('medium')`
  ${p => p.theme.direction['margin-left']}: 3rem;
  width: 70%;
  `};
`;

const Heading = styled(H3)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const HeadingSection = styled.div`
  display: flex;

  .go_back {
    padding: 0.4rem;
    margin-right: 1.3rem;

    img {
      width: 16px;
      height: 16px;
    }

    span {
      color: #c00ab5;
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
