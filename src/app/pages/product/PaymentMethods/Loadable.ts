/**
 *
 * Asynchronously loads the component for PaymentMethods
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PaymentMethods = lazyLoad(
  () => import('./index'),
  module => module.PaymentMethods,
);
