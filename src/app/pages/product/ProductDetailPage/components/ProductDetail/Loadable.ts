/**
 *
 * Asynchronously loads the component for ProductDetail
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ProductDetail = lazyLoad(
  () => import('./index'),
  module => module.ProductDetail,
);
