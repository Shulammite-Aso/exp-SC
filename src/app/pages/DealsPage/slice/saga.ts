import { takeLatest, put, call, all } from 'redux-saga/effects';
import { dealActions } from '.';
import { ADMIN_BASEURL } from 'utils/axios';
import axios from 'axios';

function* fetchTopDeals({
  payload: { page = 1 },
}: ReturnType<typeof dealActions.fetchTopDeals>) {
  try {
    const response = yield call(
      axios.get,
      `${ADMIN_BASEURL}/products?is_top_deal=true&page=${page}`,
    );
    yield put(
      dealActions.fetchTopDealsSuccess({
        topDeals: response.data.data.results,
        pagination: response.data.data.pagination,
      }),
    );
  } catch (error: any) {
    yield put(dealActions.failedCall(error));
  }
}

export default function* landingPageSagas() {
  yield all([takeLatest(dealActions.fetchTopDeals.type, fetchTopDeals)]);
}
