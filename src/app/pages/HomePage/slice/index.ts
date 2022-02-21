import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  CampaignTypeProps,
  LandingPageState,
  SingleCampaignProps,
  TopCategoryProps,
} from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import landingPageSagas from './saga';
export const initialState: LandingPageState = {
  loading: false,
  campaignTypes: [],
  campaigns: [],
  topCategories: [],
};

export interface IRejectProductProps {
  id: number | string;
  reason: string;
}
export interface IApproveProductProps {
  id: number | string;
  reason: string;
}
const slice = createSlice({
  name: 'landingPage',
  initialState,
  reducers: {
    fetchCampaignTypes: state => {
      state.loading = true;
    },
    fetchCampaignTypesSuccess: (
      state,
      action: PayloadAction<{ campaignTypes: CampaignTypeProps[] }>,
    ) => {
      state.loading = false;
      state.campaignTypes = action.payload.campaignTypes;
      state.error = undefined;
    },
    fetchCampaigns: (
      state,
      action: PayloadAction<{ campaignTypeId: string }>,
    ) => {
      state.loading = true;
    },
    fetchCampaignSuccess: (
      state,
      action: PayloadAction<{ campaigns: SingleCampaignProps[] }>,
    ) => {
      state.loading = false;
      state.campaigns = action.payload.campaigns;
      state.error = undefined;
    },
    fetchSingleCampaign: (state, action: PayloadAction<{ id: string }>) => {
      state.loading = true;
    },
    fetchSingleCampaignSuccess: (
      state,
      action: PayloadAction<{ campaign: SingleCampaignProps }>,
    ) => {
      state.loading = false;
      state.singleCampaign = action.payload.campaign;
      state.error = undefined;
    },
    fetchTopCategories: state => {
      state.loading = true;
    },
    fetchTopCategoriesSuccess: (
      state,
      action: PayloadAction<{ topCategories: TopCategoryProps[] }>,
    ) => {
      state.loading = false;
      state.topCategories = action.payload.topCategories;
      state.error = undefined;
    },
    failedCall: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearSuccessState: state => {
      state.success = false;
    },
  },
});
export const { actions: landingPageActions } = slice;
export const useLandingPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: landingPageSagas });
  return { actions: slice.actions };
};
