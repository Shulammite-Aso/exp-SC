import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainView } from '../../layouts/MainView/index';
import { HomePage } from '../../pages/HomePage/Loadable';
import { NotFoundPage } from '../../pages/NotFoundPage/Loadable';
import { FAQPage } from '../../pages/FAQPage/Loadable';
import { WishlistPage } from 'app/pages/WishlistPage/Loadable';
import { DealsPage } from 'app/pages/DealsPage/Loadable';
import { CartPage } from 'app/pages/CartPage/Loadable';

interface Props {}

export const LandingRoute = memo((props: Props) => {
  return (
    <Switch>
      <Route exact path="/">
        <MainView>
          <HomePage />
        </MainView>
      </Route>
      <Route exact path="/home">
        <MainView>
          <HomePage />
        </MainView>
      </Route>
      <Route path="/faq">
        <MainView>
          <FAQPage />
        </MainView>
      </Route>
      <Route exact path="/wishlist">
        <MainView>
          <WishlistPage />
        </MainView>
      </Route>
      <Route exact path="/deals">
        <MainView>
          <DealsPage />
        </MainView>
      </Route>
      <Route exact path="/cart">
        <MainView>
          <CartPage />
        </MainView>
      </Route>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
