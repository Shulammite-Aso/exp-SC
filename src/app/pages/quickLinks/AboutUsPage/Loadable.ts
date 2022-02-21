/**
 *
 * Asynchronously loads the component for AboutUsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AboutUsPage = lazyLoad(
  () => import('./index'),
  module => module.AboutUsPage,
);
