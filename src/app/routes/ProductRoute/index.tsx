import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainView } from '../../layouts/MainView/index';
import { NotFoundPage } from '../../pages/NotFoundPage/index';
import { MainCategories } from '../../pages/product/MainCategories/index';
import { SubCategories } from '../../pages/product/SubCategories/index';
import { Category } from '../../pages/product/Category/Loadable';
import { ProductDetailPage } from '../../pages/product/ProductDetailPage/Loadable';
import { SellerInformation } from '../../pages/product/SellerInformation/index';
import { ProductFilterPage } from '../../pages/product/ProductListPage/Loadable';
import { ProductSearchResult } from 'app/pages/product/ProductSearchResultPage/Loadable';

interface Props {}

export const ProductRoute = memo((props: Props) => {
  // TODO: Make this come from the redux state once that is setup
  // const isAuthenticated = true;
  return (
    <Switch>
      {/* Top Categories Route (without topbanner)*/}
      <Route exact path="/products/categories">
        <MainView>
          <MainCategories />
        </MainView>
      </Route>
      <Route exact path="/products/search">
        <MainView>
          <ProductSearchResult />
        </MainView>
      </Route>
      <Route exact path="/products/:category">
        <MainView>
          <Category />
        </MainView>
      </Route>
      <Route exact path="/products/:category/:subcategory">
        <MainView>
          <SubCategories />
        </MainView>
      </Route>
      <Route exact path="/products/:category/:subcategory/items">
        <MainView>
          <ProductFilterPage />
        </MainView>
      </Route>
      <Route exact path="/products/:category/:subcategory/items/:productId">
        <MainView>
          <ProductDetailPage />
        </MainView>
      </Route>
      <Route
        exact
        path="/products/:category/:subcategory/:product/sellerinformation"
      >
        <MainView>
          <SellerInformation />
        </MainView>
      </Route>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
