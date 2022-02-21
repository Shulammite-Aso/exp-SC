/**
 *
 * Asynchronously loads the component for ProductDetailPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ProductDetailPage = lazyLoad(
  () => import('./index'),
  module => module.ProductDetailPage,
);
