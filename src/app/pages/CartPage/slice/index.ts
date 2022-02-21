import { createSlice } from 'utils/@reduxjs/toolkit';
import { cartState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../../utils/redux-injectors';
import cartSaga from './saga';

const localStorageCartList: any = localStorage.getItem('localStorageCartList');
const localStorageCart: any = localStorageCartList
  ? JSON.parse(localStorageCartList)
  : [];

export const initialState: cartState = {
  _id: '',
  itemsInCart: [],
  itemsInLocalStorageCart: localStorageCart,
  error: null,
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart(state, action: PayloadAction<any>) {
      state.itemsInCart = action.payload;
    },
    getItemsInCart(state) {
      state.itemsInCart = [...initialState.itemsInCart];
    },

    getItemsInCartSuccess(state, action: PayloadAction<any>) {
      state.itemsInCart = action.payload.items;
      state._id = action.payload._id;
    },
    localStorageCartItems(state, action: PayloadAction<any>) {
      state.itemsInLocalStorageCart = action.payload;
    },
    toLocalStorageCart(state, action: PayloadAction<any>) {},
    removeItemFromCart(state, action: PayloadAction<any>) {
      state.itemsInCart = [...initialState.itemsInCart];
    },
    removeAllItemFromCart(state, action: PayloadAction<any>) {
      state.itemsInCart = [...initialState.itemsInCart];
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
    },
  },
});

export const { actions: cartActions } = slice;

export const useCartSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'cart', saga: cartSaga });
  return { actions: slice.actions };
};
