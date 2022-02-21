import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import { LandingRoute } from '../LandingRoute/index';
import { AuthRoute } from '../AuthRoute/index';
import { OrderRoute } from '../OrderRoute';
import { AccountRoute } from '../AccountRoute';
import { NotFoundPage } from '../../pages/NotFoundPage/Loadable';
import { ProductRoute } from '../ProductRoute';
import { CampaingRoute } from '../CampaignRoute';
import { FooterRoute } from '../FooterRoute';

interface Props {}

export const MainRoutes = memo((props: Props) => {
  return (
    <Switch>
      <Route path="/auth" component={AuthRoute} />
      <Route path="/account" component={AccountRoute} />
      <Route path="/order" component={OrderRoute} />
      <Route path="/products" component={ProductRoute} />
      <Route path="/campaigns" component={CampaingRoute} />
      <Route path="/company" component={FooterRoute} />

      {/* Other module routes should come before the landing pages */}
      <Route path="/" component={LandingRoute} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
