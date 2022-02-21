/**
 *
 * Asynchronously loads the component for Right
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Right = lazyLoad(
  () => import('./index'),
  module => module.Right,
);
