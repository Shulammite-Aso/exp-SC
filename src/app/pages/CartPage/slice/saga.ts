import { takeLatest, call, put, delay, all } from 'redux-saga/effects';
import { apiCall } from 'utils/axios';
import { cartActions } from '.';
import { toast } from 'react-toastify';

function* toCart(data) {
  yield delay(500);

  const { requestPayload } = data.payload;
  try {
    const res = yield call(apiCall, 'POST', `/cart`, requestPayload);
    if (res.data) {
      toast.success('Item successfully added to cart', {
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    console.log(res.data);
  } catch (error) {
    yield put(cartActions.setError(error));
    console.log(error);
  }
}

function* getAndSetLocalStorageCart(product) {
  yield delay(500);

  const localStorageCartList: any = localStorage.getItem(
    'localStorageCartList',
  );
  const localStorageCart: any = localStorageCartList
    ? JSON.parse(localStorageCartList)
    : [];

  localStorageCart.push(product);
  yield put(cartActions.localStorageCartItems(localStorageCart));
  localStorage.setItem(
    'localStorageCartList',
    JSON.stringify(localStorageCart),
  );
  return;
}

function* getCart() {
  yield delay(500);

  try {
    const res = yield call(apiCall, 'GET', `/cart`);
    yield put(cartActions.getItemsInCartSuccess(res.data.details));
  } catch (error) {
    yield put(cartActions.setError(error));
    console.log(error);
  }
}

function* removeFromCart(itemID) {
  yield delay(500);

  try {
    const res = yield call(apiCall, 'DELETE', `/cart/item/${itemID.payload}`);
    console.log('delete cart response:', res.data);
  } catch (error) {
    yield put(cartActions.setError(error));
    console.log(error);
  }
}

function* removeAllFromCart(itemID) {
  yield delay(500);

  try {
    const res = yield call(apiCall, 'DELETE', `/cart/${itemID.payload}`);
    console.log('delete cart instance response:', res.data);
  } catch (error) {
    yield put(cartActions.setError(error));
    console.log(error);
  }
}

export default function* cartSaga() {
  yield all([
    takeLatest(cartActions.addtoCart.type, toCart),
    takeLatest(cartActions.getItemsInCart.type, getCart),
    takeLatest(cartActions.removeItemFromCart.type, removeFromCart),
    takeLatest(cartActions.removeAllItemFromCart.type, removeAllFromCart),
    takeLatest(cartActions.toLocalStorageCart.type, getAndSetLocalStorageCart),
  ]);
}
