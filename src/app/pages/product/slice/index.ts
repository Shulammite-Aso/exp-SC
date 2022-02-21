import { createSlice } from 'utils/@reduxjs/toolkit';
import { ProductState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../../utils/redux-injectors';
import productSaga from './saga';
export const initialState: ProductState = {
  loading: false,
  product: {},
  productCategories: [],
  list: [],
  brandList: [],
  reviews: [],
  productsPagination: {},
  productSearchListPagination: {},
  reviewsPagination: {},
  error: null,
};
const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    setProduct(state, action: PayloadAction<any>) {
      state.loading = false;
      state.product = action.payload;
    },
    fetchProducts(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    fetchProductsByFilter(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchProductsSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.list = action.payload.results;
      state.productsPagination = action.payload.pagination;
    },

    getReviews(state, action: PayloadAction<{ id: string }>) {
      state.loading = true;
    }

    fetchProductsBySearch(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    fetchProductsBySearchSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.productSearchList = action.payload.results;
      state.productSearchListPagination = action.payload.pagination;
    },
    setReviews(state, action: PayloadAction<any>) {
      state.loading = false;
      state.reviews = action.payload.results;
      state.productsPagination = action.payload.pagination;
    },
    setLoadingState(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    fetchProductsCategories(state) {
      state.loading = true;
    },
    setProductCategory(state, action: PayloadAction<any>) {
      state.productCategories = action.payload;
    },
    fetchBrands: state => {
      state.loading = true;
    },

    fetchBrandsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.brandList = action.payload.results;
    },
    setError(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: productActions } = slice;
export const useProductSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'product', saga: productSaga });
  return { actions: slice.actions };
};
