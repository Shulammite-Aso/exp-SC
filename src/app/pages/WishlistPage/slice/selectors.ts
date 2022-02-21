// import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

export const wishlistSelector = (state: RootState) =>
  state.wishlist?.itemsInWishlist;
export const wishlistIdSelector = (state: RootState) => state.wishlist?._id;
export const errorSelector = (state: RootState) => state.wishlist?.error;
