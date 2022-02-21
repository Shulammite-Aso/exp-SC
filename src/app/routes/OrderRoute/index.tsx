import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainView } from '../../layouts/MainView/index';
import { NotFoundPage } from '../../pages/NotFoundPage/index';
import { OrderHistoryPage } from 'app/pages/OrderHistoryPage/Loadable';
import { PaymentMethods } from 'app/pages/product/PaymentMethods/Loadable';
import { TrackOrderPage } from 'app/pages/TrackOrderPage/Loadable';
import { AuthGuard } from '../guards/AuthGuard/index';
import { Checkout } from 'app/pages/order/Checkout/Loadable';
import { CreditCardSlider } from 'app/pages/product/PaymentMethods/components/CreditCardSlider';

interface Props {}

export const OrderRoute = memo((props: Props) => {
  // TODO: Make this come from the redux state once that is setup
  const isAuthenticated = true;
  return (
    <Switch>
      <AuthGuard exact path="/order/history" isAuthenticated={isAuthenticated}>
        <MainView>
          <OrderHistoryPage />
        </MainView>
      </AuthGuard>
      <AuthGuard exact path="/order/checkout" isAuthenticated={isAuthenticated}>
        <MainView>
          <Checkout />
        </MainView>
      </AuthGuard>
      <AuthGuard exact path="/order/cards" isAuthenticated={isAuthenticated}>
        <MainView>
          <PaymentMethods />
        </MainView>
      </AuthGuard>
      <AuthGuard exact path="/order/track" isAuthenticated={isAuthenticated}>
        <MainView>
          <TrackOrderPage />
        </MainView>
      </AuthGuard>
      <AuthGuard
        exact
        path="/order/:cards/creditcard"
        isAuthenticated={isAuthenticated}
      >
        <MainView>
          <CreditCardSlider />
        </MainView>
      </AuthGuard>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
