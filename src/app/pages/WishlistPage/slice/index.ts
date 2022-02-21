import { createSlice } from 'utils/@reduxjs/toolkit';
import { wishlistState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../../utils/redux-injectors';
import wishlistSaga from './saga';

export const initialState: wishlistState = {
  _id: '',
  itemsInWishlist: [],
  error: null,
};

const slice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<any>) {
      state.itemsInWishlist = action.payload;
    },
    getItemsInWishlist(state) {
      state.itemsInWishlist = [...initialState.itemsInWishlist];
    },

    getItemsInWishlistSuccess(state, action: PayloadAction<any>) {
      state.itemsInWishlist = action.payload.details.items;
      state._id = action.payload.details._id;
    },
    removeItemFromWishlist(state, action: PayloadAction<any>) {
      state.itemsInWishlist = [...initialState.itemsInWishlist];
    },

    // removeItemFromWishlistSuccess(state, action: PayloadAction<any>) {
    //   state.itemsInWishlist = action.payload;
    // },
    removeAllItemFromWishlist(state, action: PayloadAction<any>) {
      state.itemsInWishlist = [...initialState.itemsInWishlist];
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
    },
  },
});

export const { actions: wishlistActions } = slice;

export const useWishlistSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'wishlist', saga: wishlistSaga });
  return { actions: slice.actions };
};
