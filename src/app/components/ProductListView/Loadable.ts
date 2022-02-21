import { lazyLoad } from 'utils/loadable';

export const ProductListView = lazyLoad(
  () => import('./index'),
  module => module.ProductListView,
);
