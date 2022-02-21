/**
 *
 * Asynchronously loads the component for Topbanner
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Topbanner = lazyLoad(
  () => import('./index'),
  module => module.Topbanner,
);
