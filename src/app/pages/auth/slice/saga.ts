import { takeLatest, call, put, delay, all } from 'redux-saga/effects';
import { apiCall } from 'utils/axios';
import { authActions } from '.';

function* signup(data) {
  yield delay(500);

  const { requestPayload, history } = data.payload;

  const res = yield call(
    apiCall,
    'POST',
    `/auth/send-verification-code`,
    requestPayload,
  );

  console.log(res.data);
  yield put(authActions.setUser(res.data));
  history.push('email-verification');
}

function* verifyEmail(data) {
  yield delay(500);

  const { formData, registerData, history } = data.payload;
  yield call(apiCall, 'POST', '/auth/verify-otp', formData);

  const res = yield call(apiCall, 'POST', '/auth/register', registerData);

  if (res.status && res.status === 400) {
    yield put(authActions.setError(res.data));
    history.push('login');
  } else {
    yield put(authActions.setNewUserData(res.data));
    history.push('login');
  }
}

function* login(data) {
  yield delay(500);
  const { form, history } = data.payload;

  const res1 = yield call(apiCall, 'POST', '/auth/check-2fa-status', form);

  if (!res1.data.status) {
    const res = yield call(apiCall, 'POST', '/auth/login', form);

    localStorage.setItem('jwtToken', JSON.stringify(res?.data.token));
    localStorage.setItem('user', JSON.stringify(res?.data.details));
    localStorage.setItem('userDetail', JSON.stringify(form));
    history.push('two-auth-login');
    const res1 = yield call(apiCall, 'POST', '/auth/send-2fa-code', form);
    console.log(res1);

    yield delay(20000);
  }

  const res = yield call(apiCall, 'POST', '/auth/login', form);

  if (res.status && res.status === 400) {
    yield put(authActions.setError({ details: res.data.details }));
    history.push('login');
  } else {
    localStorage.setItem('jwtToken', JSON.stringify(res?.data.token));
    localStorage.setItem('user', JSON.stringify(res?.data.details));

    yield put(authActions.setNewUserData(res?.data.details));
    yield put(authActions.setAuthenticatedState(true));
  }
  if (res.twoAuth) {
    history.push('two-auth-login');
  } else {
    history.push('/');
  }
}

function* twoAuthLogin(data) {
  yield delay(500);
  try {
    const { userDetails, formData, history } = data.payload;

    yield call(apiCall, 'POST', '/auth/verify-2fa-code', formData);
    console.log(formData);

    const res = yield call(apiCall, 'POST', '/auth/login', userDetails.user);
    console.log(res);
    yield put(authActions.setNewUserData(res?.data.details));
    yield put(authActions.setAuthenticatedState(true));

    // yield put(authActions.setUser(res));

    history.push('/');
  } catch (error) {
    yield put(authActions.setError(error));
  }
}
function* forgotPassword(data) {
  yield delay(500);
  try {
    const { history } = data.payload;
    // const res = yield call(apiCall, 'POST', '/users', form);
    // yield put(authActions.setUser(res));
    history.push('reset-password');
  } catch (error) {
    yield put(authActions.setError(error));
  }
}

function* resetPassword(data) {
  yield delay(500);
  try {
    const { history } = data.payload;
    // yield call(apiCall, 'POST', '/users', form);
    history.push('login');
  } catch (error) {
    yield put(authActions.setError(error));
  }
}

function* googleAuthSignup(data) {
  yield delay(500);
  try {
    const { history } = data.payload;
    //const { clientData, history } = data.payload;
    // yield call(apiCall, 'POST', '/users', clientData);
    history.push('/');
  } catch (error) {
    yield put(authActions.setError(error));
  }
}

function* googleAuthLogin(data) {
  yield delay(500);
  try {
    const { history } = data.payload;
    //const { clientData, history } = data.payload;
    // yield call(apiCall, 'POST', '/users', clientData);
    history.push('/');
  } catch (error) {
    yield put(authActions.setError(error));
  }
}

function* facebookAuthSignup(data) {
  yield delay(500);
  try {
    const { history } = data.payload;
    //const { clientData, history } = data.payload;
    // yield call(apiCall, 'POST', '/users', clientData);
    history.push('/');
  } catch (error) {
    yield put(authActions.setError(error));
  }
}

function* facebookAuthLogin(data) {
  yield delay(500);
  try {
    const { history } = data.payload;
    //const { clientData, history } = data.payload;
    // yield call(apiCall, 'POST', '/users', clientData);
    history.push('/');
  } catch (error) {
    yield put(authActions.setError(error));
  }
}
export default function* authSaga() {
  yield all([
    takeLatest(authActions.signupUser.type, signup),
    takeLatest(authActions.verifyEmail.type, verifyEmail),
    takeLatest(authActions.loginUser.type, login),
    takeLatest(authActions.twoAuthLogin.type, twoAuthLogin),
    takeLatest(authActions.forgotPassword.type, forgotPassword),
    takeLatest(authActions.resetPassword.type, resetPassword),
    takeLatest(authActions.googleAuthSignup.type, googleAuthSignup),
    takeLatest(authActions.googleAuthLogin.type, googleAuthLogin),
    takeLatest(authActions.facebookAuthSignup.type, facebookAuthSignup),
    takeLatest(authActions.facebookAuthLogin.type, facebookAuthLogin),
  ]);
}
