// import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../types/RootState';

export const profileSelector = (state: RootState) => state.profilePage;
export const messageSelector = (state: RootState) =>
  state.profilePage?.message || '';
export const loadingSelector = (state: RootState) => state.profilePage?.loading;
export const passwordVerificationSelector = (state: RootState) =>
  state.profilePage?.passwordIsVerified || false;
export const tokenSelector = (state: RootState) =>
  state.profilePage?.token || '';
export const userSelector = (state: RootState) => state.profilePage?.user;
