/**
 *
 * Asynchronously loads the component for Bottomfooter
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Bottomfooter = lazyLoad(
  () => import('./index'),
  module => module.Bottomfooter,
);
