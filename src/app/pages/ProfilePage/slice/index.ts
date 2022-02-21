import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { profilePageSaga } from './saga';
import { ProfilePageState } from './types';

export const initialState: ProfilePageState = {
  loading: false,
  error: null,
  user: {},
  message: '',
  passwordIsVerified: false,
  token: '',
};

const slice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    getuser(state) {
      state.loading = false;
    },
    getUserSuccessFull(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    getUserRejected(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload;
    },
    updateProfile(state, action) {
      state.loading = false;
    },
    updateProfileSuccessfull(state, action) {
      state.loading = false;
      state.message = 'Successfully Updated';
      state.user = action.payload;
    },
    updateProfileRejected(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload;
    },
    changePassword(state, action) {
      state.loading = false;
    },
    changePasswordSuccessfull(state, action) {
      state.loading = false;
      state.user = action.payload.details;
      state.message = action.payload.message;
    },
    changePasswordRejectced(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload;
    },
    verifyPassword(state, action) {
      state.loading = false;
    },
    verifyPasswordSuccessfull(state, action) {
      state.loading = false;
      state.passwordIsVerified = action.payload.details;
      state.message = action.payload.message;
    },
    verifyPasswordRejectced(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload;
    },
    sendOTP(state, action) {
      state.loading = false;
    },
    sendOTPSuccessfull(state, action) {
      state.loading = false;
      state.message = action.payload.message;
      state.token = action.payload.details;
    },
    sendOTPRejected(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload;
    },
    verifyOTP(state, action) {
      state.loading = true;
    },
    verifyOTPSuccessfull(state, action) {
      state.loading = false;
      state.message = action.payload.message;
    },
    verifyOTPRejected(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload;
    },
  },
});

export const { actions: profilePageActions } = slice;

export const useProfilePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: 'profilePage', saga: profilePageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
