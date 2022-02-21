/**
 *
 * Asynchronously loads the component for Body
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Body = lazyLoad(
  () => import('./index'),
  module => module.Body,
);
