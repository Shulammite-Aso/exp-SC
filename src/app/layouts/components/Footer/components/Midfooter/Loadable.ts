/**
 *
 * Asynchronously loads the component for Midfooter
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Midfooter = lazyLoad(
  () => import('./index'),
  module => module.Midfooter,
);
