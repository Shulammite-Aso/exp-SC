import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFoundPage } from '../../pages/NotFoundPage/Loadable';
import { Campaigns } from 'app/pages/Campaigns/Loadable';
import { CampaignProducts } from 'app/pages/CampaignProducts/Loadable';

interface Props {}

export const CampaingRoute = memo((props: Props) => {
  // TODO: Make this come from the redux state once that is setup
  // const isAuthenticated = true;
  return (
    <Switch>
      <Route
        exact
        path="/campaigns/:campaignType/:campaignId/products"
        component={CampaignProducts}
      />
      <Route exact path="/campaigns/:campaignType" component={Campaigns} />

      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
