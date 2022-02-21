/**
 *
 * Asynchronously loads the component for AltpayCardSlider
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AltpayCardSlider = lazyLoad(
  () => import('./index'),
  module => module.AltpayCardSlider,
);
