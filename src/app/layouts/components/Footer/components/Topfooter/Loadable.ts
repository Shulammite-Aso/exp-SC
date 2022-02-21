/**
 *
 * Asynchronously loads the component for Topfooter
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Topfooter = lazyLoad(
  () => import('./index'),
  module => module.Topfooter,
);
