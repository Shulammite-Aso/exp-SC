/**
 *
 * Asynchronously loads the component for DealsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DealsPage = lazyLoad(
  () => import('./index'),
  module => module.DealsPage,
);
