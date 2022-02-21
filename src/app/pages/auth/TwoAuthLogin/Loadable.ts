/**
 *
 * Asynchronously loads the component for EmailVerification
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TwoAuthLogin = lazyLoad(
  () => import('./index'),
  module => module.TwoAuthLogin,
);
