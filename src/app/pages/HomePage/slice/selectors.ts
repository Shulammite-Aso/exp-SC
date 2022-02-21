import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';
import { RootState } from '../../../../types/RootState';

const selectSlice = (state: RootState) => state.landingPage || initialState;
export const landingPageSelectors = () => {
  const selectCampaignTypes = createSelector(
    [selectSlice],
    state => state.campaignTypes,
  );

  const selectCampaigns = createSelector(
    [selectSlice],
    state => state.campaigns,
  );

  const selectSingleCampaign = createSelector(
    [selectSlice],
    state => state.singleCampaign,
  );

  const selectTopCategories = createSelector(
    [selectSlice],
    state => state.topCategories,
  );

  const selectLoading = createSelector([selectSlice], state => state.loading);

  const selectSuccessState = createSelector(
    [selectSlice],
    state => state.success,
  );
  const selectError = createSelector([selectSlice], state => state.error);
  return {
    selectLoading,
    selectSuccessState,
    selectError,
    selectCampaignTypes,
    selectCampaigns,
    selectSingleCampaign,
    selectTopCategories,
  };
};
