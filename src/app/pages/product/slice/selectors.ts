// import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';
export const productCategorySelector = (state: RootState) =>
  state.product?.productCategories;
export const loadingSelector = (state: RootState) => state.product?.loading;
export const errorSelector = (state: RootState) => state.product?.error;
export const productsPaginationSelector = (state: RootState) =>
  state.product?.productsPagination;
export const productStateSelector = (state: RootState) => state.product;
export const productSelector = (state: RootState) => state.product?.product;
export const productListSelector = (state: RootState) => state.product?.list;
export const productSearchListSelector = (state: RootState) =>
  state.product?.productSearchList;
export const productSearchListPaginationSelector = (state: RootState) =>
  state.product?.productSearchListPagination;
export const reviewsSelector = (state: RootState) => state.product?.reviews;
export const brandSelector = (state: RootState) => state.product?.brandList;
