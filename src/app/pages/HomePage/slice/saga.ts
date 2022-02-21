import { takeLatest, put, call, all } from 'redux-saga/effects';
import { landingPageActions } from '.';
import client, { ADMIN_BASEURL } from 'utils/axios';
import axios from 'axios';
function* fetchCampaignTypes({
  payload,
}: ReturnType<typeof landingPageActions.fetchCampaignTypes>) {
  try {
    const response = yield call(axios.get, `${ADMIN_BASEURL}/campaign_types`);
    yield put(
      landingPageActions.fetchCampaignTypesSuccess({
        campaignTypes: response.data.data.results,
      }),
    );
  } catch (error: any) {
    yield put(landingPageActions.failedCall(error));
  }
}

function* fetchCampaigns({
  payload,
}: ReturnType<typeof landingPageActions.fetchCampaigns>) {
  try {
    const response = yield call(
      axios.get,
      `${ADMIN_BASEURL}/campaigns?type=${payload.campaignTypeId}`,
    );
    yield put(
      landingPageActions.fetchCampaignSuccess({
        campaigns: response.data.data.results,
      }),
    );
  } catch (error: any) {
    yield put(landingPageActions.failedCall(error));
  }
}

function* fetchSingleCampaign({
  payload,
}: ReturnType<typeof landingPageActions.fetchSingleCampaign>) {
  try {
    const response = yield call(
      axios.get,
      `${ADMIN_BASEURL}/campaigns/${payload.id}`,
    );
    const campaign = response.data.data;
    yield put(
      landingPageActions.fetchSingleCampaignSuccess({
        campaign,
      }),
    );
    yield put(landingPageActions.clearSuccessState());
  } catch (error: any) {
    yield put(landingPageActions.failedCall(error));
  }
}

function* fetchTopCategories() {
  try {
    const response = yield call(
      axios.get,
      `${ADMIN_BASEURL}/categories?top_category=true`,
    );
    yield put(
      landingPageActions.fetchTopCategoriesSuccess({
        topCategories: response.data.data.results,
      }),
    );
  } catch (error: any) {
    yield put(landingPageActions.failedCall(error));
  }
}

export default function* landingPageSagas() {
  yield all([
    takeLatest(landingPageActions.fetchCampaignTypes.type, fetchCampaignTypes),
    takeLatest(landingPageActions.fetchCampaigns.type, fetchCampaigns),
    takeLatest(
      landingPageActions.fetchSingleCampaign.type,
      fetchSingleCampaign,
    ),
    takeLatest(landingPageActions.fetchTopCategories.type, fetchTopCategories),
  ]);
}
