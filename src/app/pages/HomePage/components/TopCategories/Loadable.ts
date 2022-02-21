/**
 *
 * Asynchronously loads the component for TopCategories
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TopCategories = lazyLoad(
  () => import('./index'),
  module => module.TopCategories,
);
