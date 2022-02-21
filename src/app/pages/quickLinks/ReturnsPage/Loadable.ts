/**
 *
 * Asynchronously loads the component for ReturnsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ReturnsPage = lazyLoad(
  () => import('./index'),
  module => module.ReturnsPage,
);
