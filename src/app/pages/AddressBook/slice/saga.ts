import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { addAddressActions } from '.';
import { apiCall } from 'utils/axios';

function* addAddress(data) {
  yield delay(500);
  const { requestPayload } = data.payload;
  try {
    const response = yield call(
      apiCall,
      'POST',
      `/user/address/me`,
      requestPayload,
    );
    console.log(response);

    if (response.status === 200) {
      yield put(addAddressActions.addAddressFufilled(response.data));
      console.log(response.data);
    } else {
      console.log(response.data);
      throw new Error(response.data);
    }
  } catch (error: any) {
    console.log(error);
    yield put(addAddressActions.addAddressRejected(error));
    throw new Error(error);
  }
}
function* getAddressList() {
  try {
    const response = yield call(apiCall, 'GET', `/auth/me`);
    console.log(response);

    if (response.status === 200) {
      yield put(addAddressActions.getAddressListFufilled(response.data));
      console.log(response.data);
    } else {
      console.log(response.data);
      throw new Error(response.data);
    }
  } catch (error: any) {
    console.log(error);
    yield put(addAddressActions.getAddressListRejected(error));
    throw new Error(error);
  }
}
function* editAddress(data) {
  yield delay(500);
  const { requestPayload, id } = data.payload;
  try {
    const response = yield call(
      apiCall,
      'PATCH',
      `/user/address/${id}`,
      requestPayload,
    );
    console.log(response);

    if (response.status === 200) {
      yield put(addAddressActions.editAddressFufilled(response.data));
      console.log(response.data);
    } else {
      console.log(response.data);
      throw new Error(response.data);
    }
  } catch (error: any) {
    console.log(error);
    yield put(addAddressActions.editAddressRejected(error));
    throw new Error(error);
  }
}

function* deleteAddress(data) {
  yield delay(500);
  console.log(data.payload);
  const id = data.payload;
  try {
    const response = yield call(apiCall, 'DELETE', `/user/address/${id}`);
    console.log(response);

    if (response.status === 200) {
      yield put(addAddressActions.deleteAddressFufilled(response.data));
      console.log(response.data);
    } else {
      console.log(response.data);
      throw new Error(response.data);
    }
  } catch (error: any) {
    console.log(error);
    yield put(addAddressActions.deleteAddressRejected(error));
    throw new Error(error);
  }
}

export default function* addressSaga() {
  yield all([
    takeLatest(addAddressActions.addAddress.type, addAddress),
    takeLatest(addAddressActions.getAddressList.type, getAddressList),
    takeLatest(addAddressActions.editAddress.type, editAddress),
    takeLatest(addAddressActions.deleteAddress.type, deleteAddress),
  ]);
}
