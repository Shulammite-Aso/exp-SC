/**
 *
 * Asynchronously loads the component for ProductList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ProductList = lazyLoad(
  () => import('./index'),
  module => module.ProductList,
);
