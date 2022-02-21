import { lazyLoad } from 'utils/loadable';

export const ListView = lazyLoad(
  () => import('./index'),
  module => module.ListView,
);
