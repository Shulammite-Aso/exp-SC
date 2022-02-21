/**
 *
 * Asynchronously loads the component for ReturnsDesktopView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ReturnsDesktopView = lazyLoad(
  () => import('./index'),
  module => module.ReturnsDesktopView,
);
