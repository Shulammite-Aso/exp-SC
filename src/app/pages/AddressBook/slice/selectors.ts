import { RootState } from '../../../../types/RootState';

export const errorSelector = (state: RootState) => state.address?.error || '';
export const loadingSelector = (state: RootState) =>
  state?.address?.loading || false;
export const messageSelector = (state: RootState) =>
  state?.address?.message || '';
export const userSelector = (state: RootState) => state.address?.user;
export const addressListSelector = (state: RootState) =>
  state?.address?.address_list || [];
