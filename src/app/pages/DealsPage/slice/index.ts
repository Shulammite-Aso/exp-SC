import { createSlice } from 'utils/@reduxjs/toolkit';
import { DealState, TopDealProductProps } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import landingPageSagas from './saga';
import { PaginationProps } from 'app/components/Pagination';
export const initialState: DealState = {
  loading: false,
  topDeals: [],
  pagination: {},
};

const slice = createSlice({
  name: 'deal',
  initialState,
  reducers: {
    fetchTopDeals: (state, action: PayloadAction<{ page?: number }>) => {
      state.loading = true;
    },
    fetchTopDealsSuccess: (
      state,
      action: PayloadAction<{
        topDeals: TopDealProductProps[];
        pagination: PaginationProps;
      }>,
    ) => {
      state.loading = false;
      state.topDeals = action.payload.topDeals;
      state.pagination = action.payload.pagination;
      state.error = undefined;
    },

    failedCall: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearSuccessState: state => {
      state.success = false;
    },
  },
});
export const { actions: dealActions } = slice;
export const useDealSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: landingPageSagas });
  return { actions: slice.actions };
};
