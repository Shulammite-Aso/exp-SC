import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainView } from '../../layouts/MainView/index';
import { PrivacyPolicyPage } from '../../pages/quickLinks/PrivacyPolicyPage/Loadable';
import { NotFoundPage } from '../../pages/NotFoundPage/Loadable';
import { TermsAndConditionPage } from '../../pages/quickLinks/TermsAndConditionPage/Loadable';
import { PaymentOptionPage } from 'app/pages/quickLinks/PaymentOptionPage/Loadable';
import { ReturnsPage } from 'app/pages/quickLinks/ReturnsPage/Loadable';
import { AdvertisePage } from 'app/pages/quickLinks/AdvertisePage/Loadable';
import { DeliveryInfoPage } from 'app/pages/quickLinks/DeliveryInfoPage/Loadable';
import { AboutUsPage } from 'app/pages/quickLinks/AboutUsPage/Loadable';

interface Props {}

export const FooterRoute = memo((props: Props) => {
  return (
    <Switch>
      <Route exact path="/company/about-us">
        <MainView>
          <AboutUsPage />
        </MainView>
      </Route>
      <Route exact path="/company/privacy-policy">
        <MainView>
          <PrivacyPolicyPage />
        </MainView>
      </Route>
      <Route exact path="/company/payment-options">
        <MainView>
          <PaymentOptionPage />
        </MainView>
      </Route>
      <Route exact path="/company/T&amp;C">
        <MainView>
          <TermsAndConditionPage />
        </MainView>
      </Route>
      <Route path="/company/returns">
        <MainView>
          <ReturnsPage />
        </MainView>
      </Route>
      <Route path="/company/advertise">
        <MainView>
          <AdvertisePage />
        </MainView>
      </Route>
      <Route path="/company/delivery">
        <MainView>
          <DeliveryInfoPage />
        </MainView>
      </Route>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
});
