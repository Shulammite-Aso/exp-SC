/**
 *
 * Asynchronously loads the component for Filterbar
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Filterbar = lazyLoad(
  () => import('./index'),
  module => module.Filterbar,
);
