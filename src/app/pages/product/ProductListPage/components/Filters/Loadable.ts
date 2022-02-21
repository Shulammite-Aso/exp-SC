import { lazyLoad } from 'utils/loadable';

export const Filters = lazyLoad(
  () => import('./index'),
  module => module.Filters,
);
