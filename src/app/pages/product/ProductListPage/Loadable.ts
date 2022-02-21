import { lazyLoad } from 'utils/loadable';

export const ProductFilterPage = lazyLoad(
  () => import('./index'),
  module => module.ProductFilterPage,
);
