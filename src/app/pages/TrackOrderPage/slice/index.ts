import { createSlice } from 'utils/@reduxjs/toolkit';
import { orderShipmentState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../../utils/redux-injectors';
import trackOrderSaga from './saga';

export const initialState: orderShipmentState = {
  orderShipmentDetails: null,
  error: null,
};

const slice = createSlice({
  name: 'trackOrder',
  initialState,
  reducers: {
    getOrderShipmentDetails(state, action: PayloadAction<any>) {
      state.orderShipmentDetails = initialState.orderShipmentDetails;
    },

    trackOrderSuccess(state, action: PayloadAction<any>) {
      state.orderShipmentDetails = action.payload.details;
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
    },
  },
});

export const { actions: trackOrderActions } = slice;

export const useTrackOrderSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'trackOrder', saga: trackOrderSaga });
  return { actions: slice.actions };
};
