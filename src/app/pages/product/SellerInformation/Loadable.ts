/**
 *
 * Asynchronously loads the component for SellerInformation
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SellerInformation = lazyLoad(
  () => import('./index'),
  module => module.SellerInformation,
);
