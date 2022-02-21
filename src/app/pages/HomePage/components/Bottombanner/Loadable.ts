/**
 *
 * Asynchronously loads the component for Bottombanner
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Bottombanner = lazyLoad(
  () => import('./index'),
  module => module.Bottombanner,
);
