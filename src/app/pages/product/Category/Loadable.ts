/**
 *
 * Asynchronously loads the component for Category
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Category = lazyLoad(
  () => import('./index'),
  module => module.Category,
);
