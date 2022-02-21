import { takeLatest, call, put, delay, all } from 'redux-saga/effects';
import { apiCall } from 'utils/axios';
import { wishlistActions } from '.';
import { toast } from 'react-toastify';

function* toWishlist(data) {
  yield delay(500);

  const { requestPayload } = data.payload;
  try {
    const res = yield call(apiCall, 'POST', `/wishlist`, requestPayload);
    if (res.data) {
      toast.success('Item successfully added to wishlist', {
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    console.log('wishlist returned;', res.data);
  } catch (error) {
    yield put(wishlistActions.setError(error));
    console.log(error);
  }
}

function* getWishlist() {
  yield delay(500);

  try {
    const res = yield call(apiCall, 'GET', `/wishlist`);
    console.log('widhlist:', res.data);
    yield put(wishlistActions.getItemsInWishlistSuccess(res.data));
  } catch (error) {
    yield put(wishlistActions.setError(error));
    console.log(error);
  }
}

function* removeFromWishlist(itemID) {
  yield delay(500);

  try {
    const res = yield call(
      apiCall,
      'DELETE',
      `/wishlist/item/${itemID.payload}`,
    );
    console.log('response from delete wishlist:', res.data.details.items);
    //yield put(
    //  wishlistActions.removeItemFromWishlistSuccess(res.data.details.items),
    //);
  } catch (error) {
    yield put(wishlistActions.setError(error));
    console.log(error);
  }
}

function* removeAllFromWishlist(userID) {
  yield delay(500);

  try {
    const res = yield call(apiCall, 'DELETE', `/wishlist/${userID.payload}`);
    console.log(
      'response from delete all from wishlist:',
      res.data.details.items,
    );
  } catch (error) {
    yield put(wishlistActions.setError(error));
    console.log(error);
  }
}

export default function* wishlistSaga() {
  yield all([
    takeLatest(wishlistActions.addToWishlist.type, toWishlist),
    takeLatest(wishlistActions.getItemsInWishlist.type, getWishlist),
    takeLatest(wishlistActions.removeItemFromWishlist.type, removeFromWishlist),
    takeLatest(
      wishlistActions.removeAllItemFromWishlist.type,
      removeAllFromWishlist,
    ),
  ]);
}
