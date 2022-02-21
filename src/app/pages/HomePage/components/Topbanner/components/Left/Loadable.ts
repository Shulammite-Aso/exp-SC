/**
 *
 * Asynchronously loads the component for Left
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Left = lazyLoad(
  () => import('./index'),
  module => module.Left,
);
