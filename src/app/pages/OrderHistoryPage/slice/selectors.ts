import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.orders || initialState;
export const orderSelectors = () => {
  const selectOrders = createSelector(
    [selectSlice],
    productObject => productObject.orders,
  );

  const selectOrder = createSelector(
    [selectSlice],
    productObject => productObject.order,
  );

  const selectPagination = createSelector(
    [selectSlice],
    productObject => productObject.pagination,
  );

  const selectLoading = createSelector(
    [selectSlice],
    productObject => productObject.loading,
  );

  const selectError = createSelector(
    [selectSlice],
    productObject => productObject.error,
  );
  return {
    selectError,
    selectLoading,
    selectOrder,
    selectOrders,
    selectPagination,
  };
};
