/**
 *
 * Asynchronously loads the component for MainCategories
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MainCategories = lazyLoad(
  () => import('./index'),
  module => module.MainCategories,
);
