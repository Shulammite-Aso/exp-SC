// import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

export const cartSelector = (state: RootState) => state.cart?.itemsInCart;
export const localStorageCartSelector = (state: RootState) =>
  state.cart?.itemsInLocalStorageCart;
export const cartIdSelector = (state: RootState) => state.cart?._id;
export const errorSelector = (state: RootState) => state.cart?.error;
