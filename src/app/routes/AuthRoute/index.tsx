import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { NotAuthGuard } from '../guards/NotAuthGuard/index';
import { SplitView } from '../../layouts/SplitView/index';
import { NotFoundPage } from '../../pages/NotFoundPage/index';
import { Signup } from '../../pages/auth/Signup/Loadable';
import { Login } from '../../pages/auth/Login/index';
import { StandaloneView } from '../../layouts/StandaloneView/index';
import { EmailVerification } from 'app/pages/auth/EmailVerification';
import { TwoAuthLogin } from '../../pages/auth/TwoAuthLogin/index';
import { ForgotPassword } from 'app/pages/auth/ForgotPassword';
import { ResetPassword } from 'app/pages/auth/ResetPassword';
import { SocialAccounts } from 'app/pages/auth/SocialAccounts';
import { MainView } from 'app/layouts/MainView';
import { useSelector } from 'react-redux';
import { authSelector } from '../../pages/auth/slice/selectors';

interface Props {}

export const AuthRoute = memo((props: Props) => {
  // TODO: Make this come from the redux state once that is setup
  const isAuthenticated = useSelector(authSelector) || false;
  return (
    <Switch>
      <NotAuthGuard exact path="/auth/signup" isAuthenticated={isAuthenticated}>
        <SplitView>
          <Signup />
        </SplitView>
      </NotAuthGuard>
      <NotAuthGuard exact path="/auth/login" isAuthenticated={isAuthenticated}>
        <SplitView>
          <Login />
        </SplitView>
      </NotAuthGuard>
      <NotAuthGuard
        exact
        path="/auth/email-verification"
        isAuthenticated={isAuthenticated}
      >
        <StandaloneView>
          <EmailVerification />
        </StandaloneView>
      </NotAuthGuard>
      <NotAuthGuard
        exact
        path="/auth/two-auth-login"
        isAuthenticated={isAuthenticated}
      >
        <StandaloneView>
          <TwoAuthLogin />
        </StandaloneView>
      </NotAuthGuard>
      <NotAuthGuard
        exact
        path="/auth/forgot-password"
        isAuthenticated={isAuthenticated}
      >
        <StandaloneView>
          <ForgotPassword />
        </StandaloneView>
      </NotAuthGuard>
      <NotAuthGuard
        exact
        path="/auth/reset-password"
        isAuthenticated={isAuthenticated}
      >
        <StandaloneView>
          <ResetPassword />
        </StandaloneView>
      </NotAuthGuard>
      <NotAuthGuard
        exact
        path="/auth/socialacount"
        isAuthenticated={isAuthenticated}
      >
        <MainView>
          <SocialAccounts />
        </MainView>
      </NotAuthGuard>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
