// import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';

export const OrderDetailsSelector = (state: RootState) =>
  state.trackOrder?.orderShipmentDetails;
export const errorSelector = (state: RootState) => state.trackOrder?.error;
