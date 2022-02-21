/**
 *
 * Asynchronously loads the component for DeliveryInfoPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DeliveryInfoPage = lazyLoad(
  () => import('./index'),
  module => module.DeliveryInfoPage,
);
