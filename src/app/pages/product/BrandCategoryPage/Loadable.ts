/**
 *
 * Asynchronously loads the component for BrandCategoryPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BrandCategoryPage = lazyLoad(
  () => import('./index'),
  module => module.BrandCategoryPage,
);
