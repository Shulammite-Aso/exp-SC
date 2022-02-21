import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainView } from '../../layouts/MainView/index';
import { NotFoundPage } from '../../pages/NotFoundPage/index';
import { ProfilePage } from 'app/pages/ProfilePage/Loadable';
import { WalletPage } from 'app/pages/WalletPage/Loadable';
import { AddressBookPage } from 'app/pages/AddressBook/Loadable';
import { AuthGuard } from '../guards/AuthGuard/index';

interface Props {}

export const AccountRoute = memo((props: Props) => {
  // TODO: Make this come from the redux state once that is setup
  const isAuthenticated = true;
  return (
    <Switch>
      <AuthGuard
        exact
        path="/account/profile"
        isAuthenticated={isAuthenticated}
      >
        <MainView>
          <ProfilePage />
        </MainView>
      </AuthGuard>
      <AuthGuard exact path="/account/wallet" isAuthenticated={isAuthenticated}>
        <MainView>
          <WalletPage />
        </MainView>
      </AuthGuard>
      <AuthGuard
        exact
        path="/account/address-book"
        isAuthenticated={isAuthenticated}
      >
        <MainView>
          <AddressBookPage />
        </MainView>
      </AuthGuard>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
