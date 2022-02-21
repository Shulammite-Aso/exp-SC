/**
 *
 * Asynchronously loads the component for WeeklyCampaignPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const WishlistPage = lazyLoad(
  () => import('./index'),
  module => module.WishlistPage,
);
