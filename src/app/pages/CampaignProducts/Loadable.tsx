/**
 *
 * Asynchronously loads the component for Campaign Products
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CampaignProducts = lazyLoad(
  () => import('./index'),
  module => module.CampaignProducts,
);
