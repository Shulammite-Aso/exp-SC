/**
 *
 * Asynchronously loads the component for SocialAccounts
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SocialAccounts = lazyLoad(
  () => import('./index'),
  module => module.SocialAccounts,
);
