/**
 *
 * Asynchronously loads the component for Campaigns
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Campaigns = lazyLoad(
  () => import('./index'),
  module => module.Campaigns,
);
