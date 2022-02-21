/**
 *
 * Asynchronously loads the component for PrivacyPolicyPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PrivacyPolicyPage = lazyLoad(
  () => import('./index'),
  module => module.PrivacyPolicyPage,
);
