import { call, put, delay, all, takeLatest } from 'redux-saga/effects';
import { apiCall } from 'utils/axios';
import { profilePageActions } from '.';

function* getuser() {
  yield delay(500);
  try {
    const response = yield call(apiCall, 'GET', `/auth/me`);
    if (response.status === 200) {
      yield put(profilePageActions.getUserSuccessFull(response.data));
    }
  } catch (error) {
    console.log(error);
    yield put(profilePageActions.getUserRejected(error));
  }
}

function* updateProfile(data) {
  try {
    const requestPayload = data.payload;
    console.log(requestPayload);
    const response = yield call(
      apiCall,
      'PATCH',
      `/user/update/me`,
      requestPayload,
    );
    if (response.status === 200) {
      yield put(profilePageActions.updateProfileSuccessfull(response.data));
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
    yield put(profilePageActions.updateProfileRejected(error));
  }
}
function* changePassword(data) {
  yield delay(500);
  const requestPayload = data.payload;
  try {
    const response = yield call(
      apiCall,
      'PATCH',
      `/user/update-password/me`,
      requestPayload,
    );
    if (response.status === 200) {
      yield put(profilePageActions.verifyPasswordSuccessfull(response.data));
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
    yield put(profilePageActions.verifyPasswordRejectced(error));
  }
}

function* verifyPassword(data) {
  yield delay(500);
  const requestPayload = data.payload;
  console.log(requestPayload);
  try {
    const response = yield call(
      apiCall,
      'POST',
      `/user/confirm/me`,
      requestPayload,
    );
    if (response.status === 200) {
      yield put(profilePageActions.verifyPasswordSuccessfull(response.data));
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
    yield put(profilePageActions.verifyPasswordRejectced(error));
  }
}
function* sendOTP(data) {
  yield delay(500);
  const requestPayload = data.payload;
  console.log(requestPayload);
  try {
    const response = yield call(
      apiCall,
      'POST',
      `/auth/send-verification-code`,
      requestPayload,
    );
    if (response.status === 200) {
      yield put(profilePageActions.sendOTPSuccessfull(response.data));
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
    yield put(profilePageActions.sendOTPRejected(error));
  }
}

function* verifyOTP(data) {
  yield delay(500);
  const requestPayload = data.payload;
  try {
    const response = yield call(
      apiCall,
      'POST',
      `/auth/verify-otp`,
      requestPayload,
    );
    if (response.status === 200) {
      yield put(profilePageActions.verifyOTPSuccessfull(response.data));
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
    yield put(profilePageActions.verifyOTPRejected(error));
  }
}

export function* profilePageSaga() {
  yield all([
    takeLatest(profilePageActions.updateProfile.type, updateProfile),
    takeLatest(profilePageActions.changePassword.type, changePassword),
    takeLatest(profilePageActions.verifyPassword.type, verifyPassword),
    takeLatest(profilePageActions.verifyOTP.type, verifyOTP),
    takeLatest(profilePageActions.sendOTP.type, sendOTP),
    takeLatest(profilePageActions.getuser.type, getuser),
  ]);
}
