/**
 *
 * Asynchronously loads the component for SubCategories
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SubCategories = lazyLoad(
  () => import('./index'),
  module => module.SubCategories,
);
