import { takeLatest, call, put, delay, all } from 'redux-saga/effects';
import { apiCall } from 'utils/axios';
import { trackOrderActions } from '.';
//import { toast } from 'react-toastify';

function* trackOrder(trackingNumber) {
  yield delay(500);

  try {
    const res = yield call(apiCall, 'GET', `/order/${trackingNumber.payload}`);
    console.log('trackOrder:', res.data);
    yield put(trackOrderActions.trackOrderSuccess(res.data));
  } catch (error) {
    yield put(trackOrderActions.setError(error));
    console.log(error);
  }
}

export default function* trackOrderSaga() {
  yield all([
    takeLatest(trackOrderActions.getOrderShipmentDetails.type, trackOrder),
  ]);
}
