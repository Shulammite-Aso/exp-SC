/**
 *
 * Asynchronously loads the component for Servicebar
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Servicebar = lazyLoad(
  () => import('./index'),
  module => module.Servicebar,
);
