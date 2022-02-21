/**
 *
 * Asynchronously loads the component for TrackOrderPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TrackOrderPage = lazyLoad(
  () => import('./index'),
  module => module.TrackOrderPage,
);
