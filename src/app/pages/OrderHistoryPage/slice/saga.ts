import { takeLatest, put, call, /* delay, */ all } from 'redux-saga/effects';
import { orderActions } from '.';
import client from 'utils/axios';

function* fetchOrders({ payload }: any) {
  try {
    const formatQuery = Object.entries(payload)
      .filter(query => query[1] !== '')
      .map(e => `${e[0]}=${e[1]}`)
      .join('&');
    const response = yield call(client.get, `/order?limit=20&${formatQuery}`);
    const parseResponse = {
      orders: response.data.details,
      pagination: response.data.pagination,
    };
    yield put(orderActions.fetchOrdersSuccess(parseResponse));
  } catch (error: any) {
    yield put(orderActions.failedCall(error));
  }
}

function* fetchOrder({ payload }: any) {
  try {
    const response = yield call(
      client.get,
      `/order/order-details/${payload.id}`,
    );
    const parseResponse = {
      order: response.data.data,
    };
    yield put(orderActions.fetchOrderSuccess(parseResponse));
  } catch (error: any) {
    yield put(orderActions.failedCall(error));
  }
}
export default function* orderSaga() {
  yield all([
    takeLatest(orderActions.fetchOrders.type, fetchOrders),
    takeLatest(orderActions.fetchOrder.type, fetchOrder),
  ]);
}
