/**
 *
 * Asynchronously loads the component for AdvertisePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AdvertisePage = lazyLoad(
  () => import('./index'),
  module => module.AdvertisePage,
);
