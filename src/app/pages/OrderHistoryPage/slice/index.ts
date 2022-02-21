import { createSlice } from 'utils/@reduxjs/toolkit';
import { OrderHistoryProp, OrdersSuccess, OrderState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import orderSaga from './saga';
export const initialState: OrderState = {
  loading: false,
  orders: [],
  pagination: {},
};

const slice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    fetchOrders: (
      state,
      action: PayloadAction<{
        status?: string;
        page?: number;
        [key: string]: string | number | undefined;
      }>,
    ) => {
      state.loading = true;
      state.orders = [];
    },

    fetchOrdersSuccess: (state, action: PayloadAction<OrdersSuccess>) => {
      state.loading = false;
      state.orders = action.payload.orders;
      state.pagination = action.payload.pagination;
    },

    fetchOrder: (state, action: PayloadAction<{ id: string }>) => {
      state.loading = true;
    },

    fetchOrderSuccess: (
      state,
      action: PayloadAction<{ order: OrderHistoryProp }>,
    ) => {
      state.loading = false;
      state.order = action.payload.order;
    },

    failedCall: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: orderActions } = slice;

export const useOrderSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: orderSaga });
  return { actions: slice.actions };
};
