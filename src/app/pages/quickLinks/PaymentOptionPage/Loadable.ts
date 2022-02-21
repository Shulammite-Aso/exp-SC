/**
 *
 * Asynchronously loads the component for PaymentOptionPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PaymentOptionPage = lazyLoad(
  () => import('./index'),
  module => module.PaymentOptionPage,
);
