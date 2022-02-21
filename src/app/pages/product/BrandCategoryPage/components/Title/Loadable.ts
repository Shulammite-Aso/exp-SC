/**
 *
 * Asynchronously loads the component for Title
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Title = lazyLoad(
  () => import('./index'),
  module => module.Title,
);
