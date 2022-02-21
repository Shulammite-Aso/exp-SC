import { createSlice } from 'utils/@reduxjs/toolkit';
import { AuthState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../../utils/redux-injectors';
import authSaga from './saga';

export const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  user: {},
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticatedState(state, action: PayloadAction<boolean>) {
      // Check if the localStorage is empty
      // Set the new jwtToken

      state.isAuthenticated = action.payload;
    },
    getAuthState(state) {
      if (localStorage.jwtToken) {
        // decode = jwt_decode(localStorage.jwtToken)
        // check expiration of jwtToken
        state.isAuthenticated = true;

        // if expired logout user
      }
    },
    logoutUser(state) {
      state.loading = true;
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('user');
      state.loading = false;
    },
    setLoadingState(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setUser(state, action: PayloadAction<any>) {
      state.user = { ...state.user, ...action.payload };
      state.loading = false;
    },
    setNewUserData(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.loading = false;
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    signupUser(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    verifyEmail(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    loginUser(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    twoAuthLogin(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    forgotPassword(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    resetPassword(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    googleAuthSignup(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    googleAuthLogin(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    facebookAuthSignup(state, auth: PayloadAction<any>) {
      state.loading = true;
    },
    facebookAuthLogin(state, auth: PayloadAction<any>) {
      state.loading = true;
    },
  },
});

export const { actions: authActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'auth', saga: authSaga });
  return { actions: slice.actions };
};
