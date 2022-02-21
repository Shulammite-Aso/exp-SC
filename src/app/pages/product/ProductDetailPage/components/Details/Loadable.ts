/**
 *
 * Asynchronously loads the component for Details
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Details = lazyLoad(
  () => import('./index'),
  module => module.Details,
);
