import { createSlice } from 'utils/@reduxjs/toolkit';
import { AddressState } from './types';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../../utils/redux-injectors';
import addressSaga from './saga';

export const initialState: AddressState = {
  loading: false,
  address_list: [],
  error: '',
  message: '',
  user: {},
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress(state, action) {
      state.loading = true;
    },
    addAddressFufilled(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.message = 'Address successfully added';
    },
    addAddressRejected(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload;
    },
    getAddressList: state => {
      state.loading = false;
    },
    getAddressListFufilled(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.address_list = action.payload.address_list;
    },
    getAddressListRejected(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload;
    },
    editAddress(state, action) {
      state.loading = false;
    },
    editAddressFufilled(state, action) {
      state.loading = false;
      state.user = action.payload.details;
      state.message = action.payload.message;
    },
    editAddressRejected(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload;
    },
    deleteAddress: (state, action) => {
      state.loading = false;
    },
    deleteAddressFufilled(state, action) {
      state.loading = false;
      state.user = action.payload.details;
      state.message = action.payload.message;
    },
    deleteAddressRejected(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload;
    },
  },
});

// actions generated from the slice
export const { actions: addAddressActions } = addressSlice;

// The reducer
export const addressSelector = state => state.address;
export default addressSlice.reducer;

export const useAddressSlice = () => {
  useInjectReducer({ key: addressSlice.name, reducer: addressSlice.reducer });
  useInjectSaga({ key: 'address', saga: addressSaga });
  return { actions: addressSlice.actions };
};
