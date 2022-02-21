/**
 *
 * Asynchronously loads the component for ProductSearchResult
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ProductSearchResult = lazyLoad(
  () => import('./index'),
  module => module.ProductSearchResult,
);
