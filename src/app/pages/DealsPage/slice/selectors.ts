import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';
import { RootState } from '../../../../types/RootState';

const selectSlice = (state: RootState) => state.deal || initialState;
export const dealSelectors = () => {
  const selectTopDeals = createSelector([selectSlice], state => state.topDeals);
  const selectPagination = createSelector(
    [selectSlice],
    state => state.pagination,
  );
  const selectLoading = createSelector([selectSlice], state => state.loading);

  const selectSuccessState = createSelector(
    [selectSlice],
    state => state.success,
  );
  const selectError = createSelector([selectSlice], state => state.error);
  return {
    selectLoading,
    selectSuccessState,
    selectError,
    selectTopDeals,
    selectPagination,
  };
};
