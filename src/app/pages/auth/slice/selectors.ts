// import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

export const authSelector = (state: RootState) => state.auth?.isAuthenticated;
export const userSelector = (state: RootState) => state.auth?.user;

export const loadingSelector = (state: RootState) => state.auth?.loading;

export const errorSelector = (state: RootState) => state.auth?.error;
