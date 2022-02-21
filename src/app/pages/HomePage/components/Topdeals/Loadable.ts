/**
 *
 * Asynchronously loads the component for Topdeals
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Topdeals = lazyLoad(
  () => import('./index'),
  module => module.Topdeals,
);
