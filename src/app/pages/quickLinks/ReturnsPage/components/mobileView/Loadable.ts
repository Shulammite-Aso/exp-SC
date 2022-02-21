/**
 *
 * Asynchronously loads the component for ReturnsMobileView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ReturnsMobileView = lazyLoad(
  () => import('./index'),
  module => module.ReturnsMobileView,
);
